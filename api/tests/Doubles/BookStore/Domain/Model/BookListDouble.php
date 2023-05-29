<?php

declare(strict_types=1);

namespace App\Tests\Doubles\BookStore\Domain\Model;

use App\BookStore\Domain\Model\BookList;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class BookListDouble extends Double
{
    public function reveal(): BookList
    {
        return $this->double->reveal();
    }

    protected function classNameOrInterface(): string
    {
        return BookList::class;
    }

    protected function double(): ObjectProphecy|BookList
    {
        return $this->double;
    }
}
