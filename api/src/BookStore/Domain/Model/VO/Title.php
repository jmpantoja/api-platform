<?php

declare(strict_types=1);

namespace App\BookStore\Domain\Model\VO;

use PlanB\Type\StringValue;
use PlanB\Validation\Traits\ValidableTrait;

final class Title implements StringValue
{
    use ValidableTrait;

    private string $title;

    public function __construct(string $title)
    {
        $this->assert(title: $title);
        $this->title = $title;
    }

    public function __toString(): string
    {
        return $this->title;
    }

    public function getTitle(): string
    {
        return $this->title;
    }
}
