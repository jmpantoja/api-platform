<?php

declare(strict_types=1);

namespace App\BookStore\Application;

use App\BookStore\Domain\Model\AuthorId;

final class DeleteAuthor
{
    private AuthorId $id;

    public function __construct(AuthorId $authorId)
    {
        $this->id = $authorId;
    }

    public function getAuthorId(): AuthorId
    {
        return $this->id;
    }
}
