<?php

declare(strict_types=1);

namespace App\BookStore\Domain\Model\VO\Constraint;

use App\BookStore\Domain\Model\VO\TagName as VO_TagName;
use PlanB\Framework\Symfony\Validator\Constraints\Compound;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\Regex;

final class TagNameConstraint extends Compound
{
    public function getClassName(): string
    {
        return VO_TagName::class;
    }

    /**
     * @param mixed[] $options
     *
     * @return Constraint[]
     */
    protected function getConstraints(array $options): array
    {
        return [
            new Regex([
                'pattern' => '/^[0-9\\_\\p{L} \\-]*$/u',
            ]),
            new Length([
                'min' => 3,
            ]),
        ];
    }
}
