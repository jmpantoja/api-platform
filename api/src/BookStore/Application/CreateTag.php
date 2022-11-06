<?php

declare(strict_types=1);

namespace App\BookStore\Application;

use App\BookStore\Application\Input\TagInput;

final class CreateTag
{
    private TagInput $input;

    public function __construct(TagInput $input)
    {
        $this->input = $input;
    }

    public function getInput(): TagInput
    {
        return $this->input;
    }
}
