<?php

declare(strict_types=1);

namespace App\BookStore\Application;

use App\BookStore\Domain\Model\BookId;

final class DeleteBook
{
    private BookId $id;

    public function __construct(BookId $bookId)
    {
        $this->id = $bookId;
    }

    public function getBookId(): BookId
    {
        return $this->id;
    }
}
