<?php

declare(strict_types=1);

namespace App\BookStore\Domain\Model;

use App\BookStore\Domain\Model\VO\Money;
use App\BookStore\Domain\Model\VO\Summary;
use App\BookStore\Domain\Model\VO\TagName;
use App\BookStore\Domain\Model\VO\Title;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use PlanB\Domain\Model\Entity;

class Tag implements Entity
{
    private TagId $id;
    private TagName $name;
    private Collection $books;

    public function __construct(TagName $name, ?BookListInput $books = null)
    {
        $this->id = new TagId();
        $this->books = new ArrayCollection();

        $this->setName($name);
        $this->setBooks($books ?? BookListInput::collect());
    }

    public function getId(): TagId
    {
        return $this->id;
    }

    public function setName(TagName $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getName(): TagName
    {
        return $this->name;
    }

    public function setBooks(?BookListInput $books): static
    {
        $books
            ->add($this->addBook(...))
            ->create($this->createBook(...))
            ->remove($this->removeBook(...))
            ->with($this->books)
        ;

        return $this;
    }

    public function addBook(Book $book): static
    {
        if (!$this->books->contains($book)) {
            $this->books->add($book);
        }

        return $this;
    }

    public function createBook(Author $author, Title $title, Summary $summary, Money $price, ?TagListInput $tags = null): static
    {
        $book = new Book($author, $title, $summary, $price, $tags);
        $this->books->add($book);

        return $this;
    }

    public function removeBook(BookId $bookId): static
    {
        $book = $this->books->findFirst(function (int $key, Book $book) use ($bookId) {
            return $bookId->equals($book->getId());
        });

        if ($book instanceof Book) {
            $this->books->removeElement($book);
        }

        return $this;
    }

    public function getBooks(): BookList
    {
        return BookList::collect($this->books);
    }
}
