<?php

declare(strict_types=1);

namespace App\Tests\Doubles\BookStore\Domain\Model;

use App\BookStore\Domain\Model\Author;
use App\BookStore\Domain\Model\Book;
use App\BookStore\Domain\Model\BookId;
use App\BookStore\Domain\Model\TagListInput;
use App\BookStore\Domain\Model\VO\Money;
use App\BookStore\Domain\Model\VO\Summary;
use App\BookStore\Domain\Model\VO\Title;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class BookDouble extends Double
{
    public function reveal(): Book
    {
        return $this->double->reveal();
    }

    public function withId(BookId $id): self
    {
        $this->double()
            ->getId()
            ->willReturn($id)
        ;

        return $this;
    }

    public function withAuthor(Author $author): self
    {
        $this->double()
            ->getAuthor()
            ->willReturn($author)
        ;

        return $this;
    }

    public function withTitle(Title $title): self
    {
        $this->double()
            ->getTitle()
            ->willReturn($title)
        ;

        return $this;
    }

    public function withSummary(Summary $summary): self
    {
        $this->double()
            ->getSummary()
            ->willReturn($summary)
        ;

        return $this;
    }

    public function withPrice(Money $price): self
    {
        $this->double()
            ->getPrice()
            ->willReturn($price)
        ;

        return $this;
    }

    public function withTags(?TagListInput $tags): self
    {
        $this->double()
            ->getTags()
            ->willReturn($tags)
        ;

        return $this;
    }

    protected function classNameOrInterface(): string
    {
        return Book::class;
    }

    protected function double(): ObjectProphecy|Book
    {
        return $this->double;
    }

    protected function configure(): void
    {
        $this->withId(new BookId());
    }
}
