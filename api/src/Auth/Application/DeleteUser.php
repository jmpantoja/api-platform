<?php

declare(strict_types=1);

namespace App\Auth\Application;

use App\Auth\Domain\Model\UserId;

final class DeleteUser
{
    private UserId $id;

    public function __construct(UserId $userId)
    {
        $this->id = $userId;
    }

    public function getUserId(): UserId
    {
        return $this->id;
    }
}
