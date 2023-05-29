<?php

declare(strict_types=1);

namespace App\Tests\Doubles\BookStore\Domain\Model\VO;

use App\BookStore\Domain\Model\VO\TagName;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class TagNameDouble extends Double
{
    public function reveal(): TagName
    {
        return $this->double->reveal();
    }

    public function withName(string $name): self
    {
        $this->double()
            ->getName()
            ->willReturn($name)
        ;

        return $this;
    }

    protected function classNameOrInterface(): string
    {
        return TagName::class;
    }

    protected function double(): ObjectProphecy|TagName
    {
        return $this->double;
    }
}
