<?php

declare(strict_types=1);

namespace App\Tests\Doubles\BookStore\Domain\Model\VO;

use App\BookStore\Domain\Model\VO\Currency;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class CurrencyDouble extends Double
{
    public function reveal(): Currency
    {
        return $this->double->reveal();
    }

    public function withCurrency(string $currency): self
    {
        $this->double()
            ->getCurrency()
            ->willReturn($currency)
        ;

        return $this;
    }

    protected function classNameOrInterface(): string
    {
        return Currency::class;
    }

    protected function double(): ObjectProphecy|Currency
    {
        return $this->double;
    }
}
