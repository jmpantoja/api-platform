<?php

declare(strict_types=1);

namespace App\BookStore\Domain\Model\VO;

use PlanB\Type\StringValue;
use PlanB\Validation\Traits\ValidableTrait;

final class Summary implements StringValue
{
    use ValidableTrait;

    private string $summary;

    public function __construct(string $summary)
    {
        $this->assert(summary: $summary);
        $this->summary = $summary;
    }

    public function __toString(): string
    {
        return $this->summary;
    }

    public function getSummary(): string
    {
        return $this->summary;
    }
}
