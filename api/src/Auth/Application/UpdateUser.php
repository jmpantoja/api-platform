<?php

declare(strict_types=1);

namespace App\Auth\Application;

use App\Auth\Application\Input\UserInput;
use App\Auth\Domain\Model\UserId;

final class UpdateUser
{
    private UserInput $input;
    private UserId $userId;

    public function __construct(UserId $userId, UserInput $input)
    {
        $this->userId = $userId;
        $this->input = $input;
    }

    public function getInput(): UserInput
    {
        return $this->input;
    }

    public function getId(): UserId
    {
        return $this->userId;
    }
}
