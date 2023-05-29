<?php

declare(strict_types=1);


use App\Auth\Domain\Model\RoleList;
use App\Auth\Domain\Model\UserId;
use App\Auth\Domain\Model\VO\Email;
use App\Auth\Domain\Model\VO\Username;
use App\Auth\Domain\Service\PasswordHasher;
use PlanB\Domain\Model\Entity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

class User implements Entity, UserInterface, PasswordAuthenticatedUserInterface
{
    private UserId $id;
    private Username $username;
    private Email $email;
    private RoleList $roles;
    private string $password;

    public function __construct(Username $username, Email $email, RoleList $roles, PasswordHasher $password)
    {
        $this->id = new UserId();

        $this->setUsername($username);
        $this->setEmail($email);
        $this->setRoles($roles);
        $this->setPassword($password);
    }

    public function getId(): UserId
    {
        return $this->id;
    }

    public function setUsername(Username $username): static
    {
        $this->username = $username;

        return $this;
    }

    public function getUsername(): Username
    {
        return $this->username;
    }

    public function setEmail(Email $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getEmail(): Email
    {
        return $this->email;
    }

    public function setRoles(RoleList $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    public function getRoles(): array
    {
        return $this->roles->toArray();
    }

    public function setPassword(PasswordHasher $hasher): static
    {
        $this->password = $hasher->hash($this);

        return $this;
    }

    public function getPassword(): string
    {
        return $this->password;
    }


    public function eraseCredentials()
    {
    }

    public function getUserIdentifier(): string
    {
        return (string) $this->getEmail();
    }
}
