<?php

declare(strict_types=1);

namespace App\Auth\Domain\Model\VO\Constraint;

use App\Auth\Domain\Model\VO\Username as VO_Username;
use PlanB\Framework\Symfony\Validator\Constraints\Compound;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\Constraints\Length;

final class UsernameConstraint extends Compound
{
    public function getClassName(): string
    {
        return VO_Username::class;
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
                'min' => 3,
            ]),
        ];
    }
}
