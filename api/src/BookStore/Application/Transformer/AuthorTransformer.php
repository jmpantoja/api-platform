<?php

declare(strict_types=1);

namespace App\BookStore\Application\Transformer;

use App\BookStore\Application\Input\AuthorInput;
use App\BookStore\Domain\Model\Author;

final class AuthorTransformer
{
    public function newInstance(AuthorInput $input): Author
    {
        return new Author($input->name, $input->books);
    }

    public function update(Author $author, AuthorInput $input): Author
    {
        $author->setName($input->name);
        $author->setBooks($input->books);

        return $author;
    }
}
