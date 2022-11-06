<?php

declare(strict_types=1);

namespace App\BookStore\Application\Input;

use App\BookStore\Domain\Model\AuthorId;
use App\BookStore\Domain\Model\BookListInput;
use App\BookStore\Domain\Model\VO\Fullname;

final class AuthorInput
{
    public ?AuthorId $id = null;
    public Fullname $name;
    public ?BookListInput $books = null;
}
