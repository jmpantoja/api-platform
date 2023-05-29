<?php

declare(strict_types=1);

namespace App\Tests\Doubles\BookStore\Domain\Model;

use App\BookStore\Domain\Model\AuthorListInput;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class AuthorListInputDouble extends Double
{
    public function reveal(): AuthorListInput
    {
        return $this->double->reveal();
    }

    protected function classNameOrInterface(): string
    {
        return AuthorListInput::class;
    }

    protected function double(): ObjectProphecy|AuthorListInput
    {
        return $this->double;
    }
}
