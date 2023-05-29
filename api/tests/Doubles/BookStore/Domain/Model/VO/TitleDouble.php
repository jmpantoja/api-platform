<?php

declare(strict_types=1);

namespace App\Tests\Doubles\BookStore\Domain\Model\VO;

use App\BookStore\Domain\Model\VO\Title;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class TitleDouble extends Double
{
    public function reveal(): Title
    {
        return $this->double->reveal();
    }

    public function withTitle(string $title): self
    {
        $this->double()
            ->getTitle()
            ->willReturn($title)
        ;

        return $this;
    }

    protected function classNameOrInterface(): string
    {
        return Title::class;
    }

    protected function double(): ObjectProphecy|Title
    {
        return $this->double;
    }
}
