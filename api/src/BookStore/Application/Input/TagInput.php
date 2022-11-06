<?php

declare(strict_types=1);

namespace App\BookStore\Application\Input;

use App\BookStore\Domain\Model\BookListInput;
use App\BookStore\Domain\Model\TagId;
use App\BookStore\Domain\Model\VO\TagName;

final class TagInput
{
    public ?TagId $id = null;
    public TagName $name;
    public ?BookListInput $books = null;
}
