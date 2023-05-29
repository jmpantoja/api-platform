<?php

declare(strict_types=1);

namespace App\Tests\Doubles\BookStore\Domain\Model;

use App\BookStore\Domain\Model\BookListInput;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class BookListInputDouble extends Double
{
    public function reveal(): BookListInput
    {
        return $this->double->reveal();
    }

    protected function classNameOrInterface(): string
    {
        return BookListInput::class;
    }

    protected function double(): ObjectProphecy|BookListInput
    {
        return $this->double;
    }
}
