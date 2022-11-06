<?php

declare(strict_types=1);

namespace App\BookStore\Framework\Doctrine\DBAL;

use App\BookStore\Domain\Model\AuthorId;
use PlanB\Domain\Model\EntityId;
use PlanB\Framework\Doctrine\DBAL\Type\EntityIdType;

final class AuthorIdDBALType extends EntityIdType
{
    public function makeFromValue(string $value): EntityId
    {
        return new AuthorId($value);
    }

    public function getName(): string
    {
        return 'BookStore.AuthorId';
    }
}
