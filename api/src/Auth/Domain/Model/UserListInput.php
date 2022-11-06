<?php

declare(strict_types=1);

namespace App\Auth\Domain\Model;

use PlanB\Domain\Model\EntityListInput;
use PlanB\DS\Attribute\ElementType;

#[ElementType(User::class, 'array')]
final class UserListInput extends EntityListInput
{
}
