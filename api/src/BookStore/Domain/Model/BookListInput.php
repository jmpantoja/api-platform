<?php

declare(strict_types=1);

namespace App\BookStore\Domain\Model;

use PlanB\Domain\Model\EntityListInput;
use PlanB\DS\Attribute\ElementType;

#[ElementType(Book::class, 'array')]
final class BookListInput extends EntityListInput
{
}
