<?php

declare(strict_types=1);

namespace App\BookStore\Application;

use App\BookStore\Application\Input\BookInput;

final class CreateBook
{
    private BookInput $input;

    public function __construct(BookInput $input)
    {
        $this->input = $input;
    }

    public function getInput(): BookInput
    {
        return $this->input;
    }
}
