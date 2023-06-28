<?php

declare(strict_types=1);

namespace App\Auth\Domain\Model;

use App\Auth\Domain\Model\VO\Role;
use PlanB\DS\Attribute\ElementType;
use PlanB\DS\Sequence\Sequence;

#[ElementType('string')]
final class RoleList extends Sequence
{
}
