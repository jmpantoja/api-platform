<?php

declare(strict_types=1);

namespace App\Auth\Domain\Model\VO;

use PlanB\Type\StringValue;
use PlanB\Validation\Traits\ValidableTrait;

final class Username implements StringValue
{
    use ValidableTrait;

    private string $username;

    public function __construct(string $username)
    {
        $this->assert(username: $username);
        $this->username = $username;
    }

    public function getUsername(): string
    {
        return $this->username;
    }

    public function __toString(): string
    {
        return $this->username;
    }
}
