<?php

declare(strict_types=1);

namespace App\Auth\Application;

use App\Auth\Application\Input\UserInput;

final class CreateUser
{
    private UserInput $input;

    public function __construct(UserInput $input)
    {
        $this->input = $input;
    }

    public function getInput(): UserInput
    {
        return $this->input;
    }
}
