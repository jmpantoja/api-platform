<?php

declare(strict_types=1);

namespace App\BookStore\Domain\Model\VO\Constraint;

use App\BookStore\Domain\Model\VO\Summary as VO_Summary;
use PlanB\Framework\Symfony\Validator\Constraints\Compound;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\Constraints\Length;

final class SummaryConstraint extends Compound
{
    public function getClassName(): string
    {
        return VO_Summary::class;
    }

    /**
     * @param mixed[] $options
     *
     * @return Constraint[]
     */
    protected function getConstraints(array $options): array
    {
        return [
            new Length([
                'min' => 10,
            ]),
        ];
    }
}
