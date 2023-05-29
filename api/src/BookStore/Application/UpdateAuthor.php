<?php

declare(strict_types=1);

namespace App\BookStore\Application;

use App\BookStore\Application\Input\AuthorInput;
use App\BookStore\Domain\Model\AuthorId;

final class UpdateAuthor
{
    private AuthorInput $input;
    private AuthorId $authorId;

    public function __construct(AuthorId $authorId, AuthorInput $input)
    {
        $this->authorId = $authorId;
        $this->input = $input;
    }

    public function getInput(): AuthorInput
    {
        return $this->input;
    }

    public function getId(): AuthorId
    {
        return $this->authorId;
    }
}
