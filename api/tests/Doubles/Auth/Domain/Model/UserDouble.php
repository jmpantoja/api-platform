<?php

declare(strict_types=1);

namespace App\Tests\Doubles\Auth\Domain\Model;

use App\Auth\Domain\Model\UserId;
use App\Auth\Domain\Model\VO\Email;
use App\Auth\Domain\Model\VO\Username;
use App\Auth\Domain\Service\PasswordHasher;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class UserDouble extends Double
{
    public function reveal(): User
    {
        return $this->double->reveal();
    }

    public function withId(UserId $id): self
    {
        $this->double()
            ->getId()
            ->willReturn($id)
        ;

        return $this;
    }

    public function withUsername(Username $username): self
    {
        $this->double()
            ->getUsername()
            ->willReturn($username)
        ;

        return $this;
    }

    public function withEmail(Email $email): self
    {
        $this->double()
            ->getEmail()
            ->willReturn($email)
        ;

        return $this;
    }

    public function withPassword(PasswordHasher $password): self
    {
        $this->double()
            ->getPassword()
            ->willReturn($password)
        ;

        return $this;
    }

    protected function classNameOrInterface(): string
    {
        return User::class;
    }

    protected function double(): ObjectProphecy|User
    {
        return $this->double;
    }

    protected function configure(): void
    {
        $this->withId(new UserId());
    }
}
