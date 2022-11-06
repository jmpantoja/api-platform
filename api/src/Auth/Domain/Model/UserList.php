<?php

declare(strict_types=1);

namespace App\Auth\Domain\Model;

use PlanB\DS\Attribute\ElementType;
use PlanB\DS\Map\Map;

#[ElementType(User::class)]
final class UserList extends Map
{
}
