<?php

declare(strict_types=1);

namespace App\BookStore\Domain\Model;

use PlanB\Domain\Model\EntityListInput;
use PlanB\DS\Attribute\ElementType;

#[ElementType(Author::class, 'array')]
final class AuthorListInput extends EntityListInput
{
}
