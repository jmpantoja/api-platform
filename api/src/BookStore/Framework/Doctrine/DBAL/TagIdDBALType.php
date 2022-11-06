<?php

declare(strict_types=1);

namespace App\BookStore\Framework\Doctrine\DBAL;

use App\BookStore\Domain\Model\TagId;
use PlanB\Domain\Model\EntityId;
use PlanB\Framework\Doctrine\DBAL\Type\EntityIdType;

final class TagIdDBALType extends EntityIdType
{
    public function makeFromValue(string $value): EntityId
    {
        return new TagId($value);
    }

    public function getName(): string
    {
        return 'BookStore.TagId';
    }
}
