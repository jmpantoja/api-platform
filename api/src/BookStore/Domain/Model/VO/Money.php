<?php

declare(strict_types=1);

namespace App\BookStore\Domain\Model\VO;

use PlanB\Validation\Traits\ValidableTrait;

final class Money
{
    use ValidableTrait;

    private Amount $amount;
    private Currency $currency;

    public function __construct(Amount $amount, Currency $currency)
    {
        $this->assert(amount: $amount, currency: $currency);
        $this->amount = $amount;
        $this->currency = $currency;
    }

    public function getAmount(): Amount
    {
        return $this->amount;
    }


    public function getCurrency(): Currency
    {
        return $this->currency;
    }



}
