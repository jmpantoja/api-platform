<?php

declare(strict_types=1);

namespace App\Tests\Doubles\Auth\Domain\Model;

use App\Auth\Domain\Model\UserListInput;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class UserListInputDouble extends Double
{
    public function reveal(): UserListInput
    {
        return $this->double->reveal();
    }

    protected function classNameOrInterface(): string
    {
        return UserListInput::class;
    }

    protected function double(): ObjectProphecy|UserListInput
    {
        return $this->double;
    }
}
