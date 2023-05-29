<?php

declare(strict_types=1);

namespace App\Auth\Domain\Model\VO\Constraint;

use App\Auth\Domain\Model\VO\Email as VO_Email;
use PlanB\Framework\Symfony\Validator\Constraints\Compound;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\Constraints\Email;

final class EmailConstraint extends Compound
{
    public function getClassName(): string
    {
        return VO_Email::class;
    }

    /**
     * @param mixed[] $options
     *
     * @return Constraint[]
     */
    protected function getConstraints(array $options): array
    {
        return [
            new Email(),
        ];
    }
}
