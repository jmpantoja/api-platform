<?php

declare(strict_types=1);

namespace App\BookStore\Domain\Repository;

use App\BookStore\Domain\Model\Book;
use App\BookStore\Domain\Model\BookId;

interface BookRepository
{
    public function save(Book $book): void;

    public function delete(BookId $book): void;

    public function findById(BookId $bookId): ?Book;
}
