<?php

declare(strict_types=1);

namespace App\Tests\Doubles\BookStore\Domain\Model\VO;

use App\BookStore\Domain\Model\VO\Amount;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class AmountDouble extends Double
{
    public function reveal(): Amount
    {
        return $this->double->reveal();
    }

    public function withAmount(int $amount): self
    {
        $this->double()
            ->getAmount()
            ->willReturn($amount)
        ;

        return $this;
    }

    protected function classNameOrInterface(): string
    {
        return Amount::class;
    }

    protected function double(): ObjectProphecy|Amount
    {
        return $this->double;
    }
}
