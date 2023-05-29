<?php

declare(strict_types=1);

namespace App\Auth\Application\Transformer;

use App\Auth\Application\Input\UserInput;
use App\Auth\Domain\Model\User;

final class UserTransformer
{
    public function newInstance(UserInput $input): User
    {
        return new User($input->username, $input->email, $input->password);
    }

    public function update(User $user, UserInput $input): User
    {
        $user->setUsername($input->username);
        $user->setEmail($input->email);
        $user->setPassword($input->password);

        return $user;
    }
}
