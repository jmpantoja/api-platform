<?php

declare(strict_types=1);

namespace App\BookStore\Domain\Model\VO\Constraint;

use App\BookStore\Domain\Model\VO\Fullname as VO_Fullname;
use PlanB\Framework\Symfony\Validator\Constraints\Compound;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\Constraints\Collection;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\Regex;

final class FullnameConstraint extends Compound
{
    public function getClassName(): string
    {
        return VO_Fullname::class;
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
                'firstName' => [
                    new Regex([
                        'pattern' => '/^[\\p{L} ]*$/u',
                    ]),
                    new Length([
                        'min' => 3,
                    ]),
                ],
                'lastName' => [
                    new Regex([
                        'pattern' => '/^[\\p{L} \\-]*$/u',
                    ]),
                    new Length([
                        'min' => 3,
                    ]),
                ],
            ]),
        ];
    }
}
