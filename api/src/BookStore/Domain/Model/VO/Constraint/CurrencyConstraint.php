<?php

declare(strict_types=1);

namespace App\BookStore\Domain\Model\VO\Constraint;

use App\BookStore\Domain\Model\VO\Currency as VO_Currency;
use PlanB\Framework\Symfony\Validator\Constraints\Compound;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\Constraints\Choice;

final class CurrencyConstraint extends Compound
{
    public function getClassName(): string
    {
        return VO_Currency::class;
    }

    /**
     * @param mixed[] $options
     *
     * @return Constraint[]
     */
    protected function getConstraints(array $options): array
    {
        return [
            new Choice([
                'choices' => [
                    0 => 'EUR',
                    1 => 'DOL',
                ],
            ]),
        ];
    }
}
