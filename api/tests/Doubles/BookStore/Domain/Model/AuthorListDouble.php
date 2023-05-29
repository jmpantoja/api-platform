<?php

declare(strict_types=1);

namespace App\Tests\Doubles\BookStore\Domain\Model;

use App\BookStore\Domain\Model\AuthorList;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class AuthorListDouble extends Double
{
    public function reveal(): AuthorList
    {
        return $this->double->reveal();
    }

    protected function classNameOrInterface(): string
    {
        return AuthorList::class;
    }

    protected function double(): ObjectProphecy|AuthorList
    {
        return $this->double;
    }
}
