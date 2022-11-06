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
        $this->setBooks($books);
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
        if (is_null($books)) {
            $books = BookListInput::collect();
        }

        $books
    ->add($this->addBook(...))
    ->remove($this->removeBook(...))
    ->with($this->books);

        return $this;
    }

    public function addBook(Author $author, Title $title, Summary $summary, Money $price, ?TagListInput $tags = null): static
    {
        $book = new Book($author, $title, $summary, $price, $tags);
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
