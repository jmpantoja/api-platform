<?php

declare(strict_types=1);

namespace App\BookStore\Domain\Repository;

use App\BookStore\Domain\Model\Author;
use App\BookStore\Domain\Model\AuthorId;

interface AuthorRepository
{
    public function save(Author $author): void;

    public function delete(AuthorId $author): void;

    public function findById(AuthorId $authorId): ?Author;
}
