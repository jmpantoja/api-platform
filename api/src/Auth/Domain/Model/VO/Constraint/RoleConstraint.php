<?php

declare(strict_types=1);

namespace App\Auth\Domain\Model\VO\Constraint;

use App\Auth\Domain\Model\VO\Role as VO_Role;
use PlanB\Framework\Symfony\Validator\Constraints\Compound;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\Constraints\Length;

final class RoleConstraint extends Compound
{
    public function getClassName(): string
    {
        return VO_Role::class;
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
