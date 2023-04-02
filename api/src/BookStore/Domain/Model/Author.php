<?php

declare(strict_types=1);

namespace App\BookStore\Domain\Model;

use App\BookStore\Domain\Model\VO\Fullname;
use App\BookStore\Domain\Model\VO\Money;
use App\BookStore\Domain\Model\VO\Summary;
use App\BookStore\Domain\Model\VO\Title;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use PlanB\Domain\Model\Entity;

class Author implements Entity
{
    private AuthorId $id;
    private Fullname $name;
    private Collection $books;

    public function __construct(Fullname $name, ?BookListInput $books = null)
    {
        $this->id = new AuthorId();
        $this->books = new ArrayCollection();

        $this->setName($name);
        $this->setBooks($books);
    }

    public function getId(): AuthorId
    {
        return $this->id;
    }

    public function setName(Fullname $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getName(): Fullname
    {
        return $this->name;
    }

    public function setBooks(?BookListInput $books): static
    {
        if (is_null($books)) {
            $books = BookListInput::collect();
        }

        $books
            ->add($this->addBook(...))
            ->remove($this->removeBook(...))
            ->with($this->books);

        return $this;
    }

    public function addBook(Title $title, Summary $summary, Money $price, ?TagListInput $tags = null): static
    {
        $book = new Book($this, $title, $summary, $price, $tags);
        $this->books->add($book);

        return $this;
    }

    public function removeBook(Book $book): static
    {
        if ($this->books->contains($book)) {
            $this->books->removeElement($book);
        }

        return $this;
    }

    public function getBooks(): BookList
    {
        return BookList::collect($this->books);
    }
}
