<?php

declare(strict_types=1);

namespace App\Tests\Doubles\Auth\Domain\Model\VO;

use App\Auth\Domain\Model\VO\Role;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class RoleDouble extends Double
{
    public function reveal(): Role
    {
        return $this->double->reveal();
    }

    public function withRole(string $role): self
    {
        $this->double()
            ->getRole()
            ->willReturn($role)
        ;

        return $this;
    }

    protected function classNameOrInterface(): string
    {
        return Role::class;
    }

    protected function double(): ObjectProphecy|Role
    {
        return $this->double;
    }
}
