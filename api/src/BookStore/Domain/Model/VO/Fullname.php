<?php

declare(strict_types=1);

namespace App\BookStore\Domain\Model\VO;

use PlanB\Validation\Traits\ValidableTrait;

final class Fullname
{
    use ValidableTrait;

    private string $firstName;
    private string $lastName;

    public function __construct(string $firstName, string $lastName)
    {
        $this->assert(firstName: $firstName, lastName: $lastName);
        $this->firstName = $firstName;
        $this->lastName = $lastName;
    }

    public function getFirstName(): string
    {
        return $this->firstName;
    }

    public function getLastName(): string
    {
        return $this->lastName;
    }
}
