<?php

declare(strict_types=1);

namespace App\BookStore\Domain\Model\VO;

use PlanB\Type\StringValue;
use PlanB\Validation\Traits\ValidableTrait;

final class Currency implements StringValue
{
    use ValidableTrait;

    private string $currency;

    public function __construct(string $currency)
    {
        $this->assert(currency: $currency);
        $this->currency = $currency;
    }

    public function __toString(): string
    {
        return $this->currency;
    }

    public function getCurrency(): string
    {
        return $this->currency;
    }
}
