<?php

declare(strict_types=1);

namespace App\BookStore\Application;

use App\BookStore\Application\Input\BookInput;
use App\BookStore\Domain\Model\BookId;

final class UpdateBook
{
    private BookInput $input;
    private BookId $bookId;

    public function __construct(BookId $bookId, BookInput $input)
    {
        $this->bookId = $bookId;
        $this->input = $input;
    }

    public function getInput(): BookInput
    {
        return $this->input;
    }

    public function getId(): BookId
    {
        return $this->bookId;
    }
}
