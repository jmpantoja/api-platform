<?php

declare(strict_types=1);

namespace App\Tests\Doubles\BookStore\Domain\Model;

use App\BookStore\Domain\Model\TagList;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class TagListDouble extends Double
{
    public function reveal(): TagList
    {
        return $this->double->reveal();
    }

    protected function classNameOrInterface(): string
    {
        return TagList::class;
    }

    protected function double(): ObjectProphecy|TagList
    {
        return $this->double;
    }
}
