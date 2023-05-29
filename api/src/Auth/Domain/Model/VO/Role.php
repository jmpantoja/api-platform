<?php

declare(strict_types=1);

namespace App\Auth\Domain\Model\VO;

use PlanB\Type\StringValue;
use PlanB\Validation\Traits\ValidableTrait;

final class Role implements StringValue
{
    use ValidableTrait;

    private string $role;

    public function __construct(string $role)
    {
        $this->assert(role: $role);
        $this->role = $role;
    }

    public function __toString(): string
    {
        return $this->role;
    }

    public function getRole(): string
    {
        return $this->role;
    }
}
