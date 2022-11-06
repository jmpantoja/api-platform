<?php

declare(strict_types=1);

namespace App\BookStore\Application\Transformer;

use App\BookStore\Application\Input\BookInput;
use App\BookStore\Domain\Model\Book;

final class BookTransformer
{
    public function newInstance(BookInput $input): Book
    {
        return new Book($input->author, $input->title, $input->summary, $input->price, $input->tags);
    }

    public function update(Book $book, BookInput $input): Book
    {
        $book->setAuthor($input->author);
        $book->setTitle($input->title);
        $book->setSummary($input->summary);
        $book->setPrice($input->price);
        $book->setTags($input->tags);

        return $book;
    }
}
