<?php

declare(strict_types=1);

namespace App\Tests\Doubles\Auth\Domain\Service;

use App\Auth\Domain\Service\PasswordHasher;
use PlanB\Framework\Testing\Double;
use Prophecy\Argument;
use Prophecy\Prophecy\ObjectProphecy;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

final class PasswordHasherDouble extends Double
{
    public function reveal(): PasswordHasher
    {
        return $this->double->reveal();
    }

    public function withHash(string $hash): self
    {
        $this->double()
            ->hash(Argument::type(PasswordAuthenticatedUserInterface::class))
            ->willReturn($hash)
        ;

        return $this;
    }

    protected function classNameOrInterface(): string
    {
        return PasswordHasher::class;
    }

    protected function double(): ObjectProphecy|PasswordHasher
    {
        return $this->double;
    }
}
