<?php

declare(strict_types=1);

namespace App\BookStore\Application\Input;

use App\BookStore\Domain\Model\Author;
use App\BookStore\Domain\Model\BookId;
use App\BookStore\Domain\Model\TagListInput;
use App\BookStore\Domain\Model\VO\Money;
use App\BookStore\Domain\Model\VO\Summary;
use App\BookStore\Domain\Model\VO\Title;

final class BookInput
{
    public ?BookId $id = null;
    public Author $author;
    public Title $title;
    public Summary $summary;
    public Money $price;
    public ?TagListInput $tags = null;
}
