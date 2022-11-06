<?php

declare(strict_types=1);

namespace App\BookStore\Domain\Model;

use PlanB\Domain\Model\EntityListInput;
use PlanB\DS\Attribute\ElementType;

#[ElementType(Tag::class, 'array')]
final class TagListInput extends EntityListInput
{
}
