<?php

declare(strict_types=1);

namespace App\BookStore\Application;

use App\BookStore\Application\Input\AuthorInput;
use App\BookStore\Domain\Model\Author;
use App\BookStore\Domain\Model\AuthorId;

final class UpdateAuthor
{
    private AuthorInput $input;
    private Author $author;

    public function __construct(AuthorId $authorId, AuthorInput $input)
    {
        $this->authorid = $authorId;
        $this->input = $input;
    }

    public function getInput(): AuthorInput
    {
        return $this->input;
    }

    public function getId(): AuthorId
    {
        return $this->authorid;
    }
}
