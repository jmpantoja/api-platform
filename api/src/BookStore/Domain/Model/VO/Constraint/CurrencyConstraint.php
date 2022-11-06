<?php

declare(strict_types=1);

namespace App\BookStore\Domain\Model\VO\Constraint;

use App\BookStore\Domain\Model\VO\Currency as VO_Currency;
use PlanB\Framework\Symfony\Validator\Constraints\Compound;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\Constraints\Regex;

final class CurrencyConstraint extends Compound
{
    /**
     * @param   mixed[]  $options
     *
     * @return Constraint[]
     */
    protected function getConstraints(array $options): array
    {
        return [
            new Regex([
                'pattern' => '/^[A-Z]{3}$/',
            ]),
        ];
    }

    public function getClassName(): string
    {
        return VO_Currency::class;
    }
}
