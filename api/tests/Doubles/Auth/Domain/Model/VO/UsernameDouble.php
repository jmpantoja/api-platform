<?php

declare(strict_types=1);

namespace App\Tests\Doubles\Auth\Domain\Model\VO;

use App\Auth\Domain\Model\VO\Username;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class UsernameDouble extends Double
{
    public function reveal(): Username
    {
        return $this->double->reveal();
    }

    public function withUsername(string $username): self
    {
        $this->double()
            ->getUsername()
            ->willReturn($username)
        ;

        return $this;
    }

    protected function classNameOrInterface(): string
    {
        return Username::class;
    }

    protected function double(): ObjectProphecy|Username
    {
        return $this->double;
    }
}
