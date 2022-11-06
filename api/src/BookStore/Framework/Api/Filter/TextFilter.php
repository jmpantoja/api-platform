<?php

declare(strict_types=1);

namespace App\BookStore\Framework\Api\Filter;

use ApiPlatform\Doctrine\Orm\Filter\AbstractFilter;
use ApiPlatform\Doctrine\Orm\Util\QueryNameGeneratorInterface;
use ApiPlatform\Exception\InvalidArgumentException;
use ApiPlatform\Metadata\Operation;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\PropertyInfo\Type;

final class TextFilter extends AbstractFilter
{
    public const STRATEGY_EXACT = 'exact';
    public const STRATEGY_PARTIAL = 'partial';
    public const STRATEGY_START = 'start';
    public const STRATEGY_END = 'end';

    protected function filterProperty(
        string $property,
        $value,
        QueryBuilder $queryBuilder,
        QueryNameGeneratorInterface $queryNameGenerator,
        string $resourceClass,
        Operation $operation = null,
        array $context = []
    ): void {
        if (
            null === $value
            || !$this->isPropertyEnabled($property, $resourceClass)
            || !$this->isPropertyMapped($property, $resourceClass, true)
        ) {
            return;
        }

        $alias = $queryBuilder->getRootAliases()[0];
        $field = $property;

        $associations = [];
        $metadata = $this->getNestedMetadata($resourceClass, $associations);

        foreach ($value as $strategy => $term) {
            if (!$metadata->hasField($field)) {
                continue;
            }

            $term = mb_strtolower($term);

            $term = match ($strategy) {
                self::STRATEGY_EXACT => $term,
                self::STRATEGY_PARTIAL => "%{$term}%",
                self::STRATEGY_START => "{$term}%",
                self::STRATEGY_END => "%{$term}",
                default => throw new InvalidArgumentException(sprintf('strategy %s does not exist.', $strategy)),
            };

            $queryBuilder->andWhere("LOWER({$alias}.{$field}) LIKE '{$term}'");
        }
    }

    public function getDescription(string $resourceClass): array
    {
        $description = [];

        $properties = $this->getProperties();
        if (null === $properties) {
            $properties = array_fill_keys($this->getClassMetadata($resourceClass)->getFieldNames(), null);
        }

        foreach ($properties as $property => $nullManagement) {
            $description += $this->getFilterDescription($property, self::STRATEGY_EXACT);
            $description += $this->getFilterDescription($property, self::STRATEGY_PARTIAL);
            $description += $this->getFilterDescription($property, self::STRATEGY_START);
            $description += $this->getFilterDescription($property, self::STRATEGY_END);
        }

        return $description;
    }

    protected function getFilterDescription(string $property, string $period): array
    {
        $propertyName = $this->normalizePropertyName($property);

        return [
            sprintf('%s[%s]', $propertyName, $period) => [
                'property' => $propertyName,
                'type' => Type::BUILTIN_TYPE_STRING,
                'required' => false,
            ],
        ];
    }
}
