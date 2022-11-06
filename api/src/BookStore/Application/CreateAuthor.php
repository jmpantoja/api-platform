<?php

declare(strict_types=1);

namespace App\BookStore\Application;

use App\BookStore\Application\Input\AuthorInput;

final class CreateAuthor
{
    private AuthorInput $input;

    public function __construct(AuthorInput $input)
    {
        $this->input = $input;
    }

    public function getInput(): AuthorInput
    {
        return $this->input;
    }
}
