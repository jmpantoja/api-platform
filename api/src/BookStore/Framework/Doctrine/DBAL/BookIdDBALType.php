<?php

declare(strict_types=1);

namespace App\BookStore\Framework\Doctrine\DBAL;

use App\BookStore\Domain\Model\BookId;
use PlanB\Domain\Model\EntityId;
use PlanB\Framework\Doctrine\DBAL\Type\EntityIdType;

final class BookIdDBALType extends EntityIdType
{
    public function makeFromValue(string $value): EntityId
    {
        return new BookId($value);
    }

    public function getName(): string
    {
        return 'BookStore.BookId';
    }
}
