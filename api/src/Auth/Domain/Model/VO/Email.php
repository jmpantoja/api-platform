<?php

declare(strict_types=1);

namespace App\Auth\Domain\Model\VO;

use PlanB\Type\StringValue;
use PlanB\Validation\Traits\ValidableTrait;

final class Email implements StringValue
{
    use ValidableTrait;

    private string $email;

    public function __construct(string $email)
    {
        $this->assert(email: $email);
        $this->email = $email;
    }

    public function __toString(): string
    {
        return $this->email;
    }

    public function getEmail(): string
    {
        return $this->email;
    }
}
