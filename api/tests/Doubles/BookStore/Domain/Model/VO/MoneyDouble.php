<?php

declare(strict_types=1);

namespace App\Tests\Doubles\BookStore\Domain\Model\VO;

use App\BookStore\Domain\Model\VO\Amount;
use App\BookStore\Domain\Model\VO\Currency;
use App\BookStore\Domain\Model\VO\Money;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class MoneyDouble extends Double
{
    public function reveal(): Money
    {
        return $this->double->reveal();
    }

    public function withAmount(Amount $amount): self
    {
        $this->double()
            ->getAmount()
            ->willReturn($amount)
        ;

        return $this;
    }

    public function withCurrency(Currency $currency): self
    {
        $this->double()
            ->getCurrency()
            ->willReturn($currency)
        ;

        return $this;
    }

    protected function classNameOrInterface(): string
    {
        return Money::class;
    }

    protected function double(): ObjectProphecy|Money
    {
        return $this->double;
    }
}
