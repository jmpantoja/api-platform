<?php

declare(strict_types=1);

namespace App\BookStore\Domain\Model\VO\Constraint;

use App\BookStore\Domain\Model\VO\Amount as VO_Amount;
use PlanB\Framework\Symfony\Validator\Constraints\Compound;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\Constraints\Range;

final class AmountConstraint extends Compound
{
    public function getClassName(): string
    {
        return VO_Amount::class;
    }

    /**
     * @param mixed[] $options
     *
     * @return Constraint[]
     */
    protected function getConstraints(array $options): array
    {
        return [
            new Range([
                'min' => 0,
            ]),
        ];
    }
}
