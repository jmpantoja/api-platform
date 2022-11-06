<?php

declare(strict_types=1);

namespace App\Auth\Domain\Service;

use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

final class PasswordHasher
{
    private UserPasswordHasherInterface $hasher;
    private string $plainPassword;

    public function __construct(UserPasswordHasherInterface $hasher, string $plainPassword)
    {
        $this->hasher = $hasher;
        $this->plainPassword = $plainPassword;
    }

    public function hash(PasswordAuthenticatedUserInterface $user): string
    {
        return $this->hasher->hashPassword($user, $this->plainPassword);
    }
}
