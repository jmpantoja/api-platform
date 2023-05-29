<?php

declare(strict_types=1);

namespace App\Tests\Doubles\BookStore\Domain\Model\VO;

use App\BookStore\Domain\Model\VO\Summary;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class SummaryDouble extends Double
{
    public function reveal(): Summary
    {
        return $this->double->reveal();
    }

    public function withSummary(string $summary): self
    {
        $this->double()
            ->getSummary()
            ->willReturn($summary)
        ;

        return $this;
    }

    protected function classNameOrInterface(): string
    {
        return Summary::class;
    }

    protected function double(): ObjectProphecy|Summary
    {
        return $this->double;
    }
}
