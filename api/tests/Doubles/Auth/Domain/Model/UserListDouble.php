<?php

declare(strict_types=1);

namespace App\Tests\Doubles\Auth\Domain\Model;

use App\Auth\Domain\Model\UserList;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class UserListDouble extends Double
{
    public function reveal(): UserList
    {
        return $this->double->reveal();
    }

    protected function classNameOrInterface(): string
    {
        return UserList::class;
    }

    protected function double(): ObjectProphecy|UserList
    {
        return $this->double;
    }
}
