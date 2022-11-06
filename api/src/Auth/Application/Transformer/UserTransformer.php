<?php

declare(strict_types=1);

namespace App\Auth\Application\Transformer;

use App\Auth\Application\Input\UserInput;
use App\Auth\Domain\Model\User;
use App\Auth\Domain\Service\PasswordHasher;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

final class UserTransformer
{
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }

    public function newInstance(UserInput $input): User
    {
        $hasher = new PasswordHasher($this->hasher, $input->password);

        return new User($input->username, $input->email, $input->roles, $hasher);
    }

    public function update(User $user, UserInput $input): User
    {
        $hasher = new PasswordHasher($this->hasher, $input->password);

        $user->setUsername($input->username);
        $user->setEmail($input->email);
        $user->setRoles($input->roles);
        $user->setPassword($hasher);

        return $user;
    }
}
