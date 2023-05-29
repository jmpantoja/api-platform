<?php

declare(strict_types=1);

namespace App\Tests\Doubles\BookStore\Domain\Model;

use App\BookStore\Domain\Model\TagListInput;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class TagListInputDouble extends Double
{
    public function reveal(): TagListInput
    {
        return $this->double->reveal();
    }

    protected function classNameOrInterface(): string
    {
        return TagListInput::class;
    }

    protected function double(): ObjectProphecy|TagListInput
    {
        return $this->double;
    }
}
