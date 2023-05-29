<?php

declare(strict_types=1);

namespace App\BookStore\Domain\Model\VO\Constraint;

use App\BookStore\Domain\Model\VO\Money as VO_Money;
use PlanB\Framework\Symfony\Validator\Constraints\Compound;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\Constraints\Collection;

final class MoneyConstraint extends Compound
{
    public function getClassName(): string
    {
        return VO_Money::class;
    }

    /**
     * @param mixed[] $options
     *
     * @return Constraint[]
     */
    protected function getConstraints(array $options): array
    {
        return [
            new Collection([
                'amount' => [
                    new AmountConstraint(),
                ],
                'currency' => [
                    new CurrencyConstraint(),
                ],
            ]),
        ];
    }
}
