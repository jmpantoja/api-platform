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
    /**
     * @param mixed[] $options
     *
     * @return Constraint[]
     */
    protected function getConstraints(array $options): array
    {
        return [
    new Regex([
  'pattern' => '/^[\\p{L} \\-]*$/u',
]),
    new Length([
  'min' => 3,
]),
        ];
    }

    public function getClassName(): string
    {
        return VO_TagName::class;
    }
}
