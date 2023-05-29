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

class Book implements Entity
{
    private BookId $id;
    private Author $author;
    private Title $title;
    private Summary $summary;
    private Money $price;
    private Collection $tags;

    public function __construct(Author $author, Title $title, Summary $summary, Money $price, ?TagListInput $tags = null)
    {
        $this->id = new BookId();
        $this->tags = new ArrayCollection();

        $this->setAuthor($author);
        $this->setTitle($title);
        $this->setSummary($summary);
        $this->setPrice($price);
        $this->setTags($tags ?? TagListInput::collect());
    }

    public function getId(): BookId
    {
        return $this->id;
    }

    public function setAuthor(Author $author): static
    {
        $this->author = $author;

        return $this;
    }

    public function getAuthor(): Author
    {
        return $this->author;
    }

    public function setTitle(Title $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getTitle(): Title
    {
        return $this->title;
    }

    public function setSummary(Summary $summary): static
    {
        $this->summary = $summary;

        return $this;
    }

    public function getSummary(): Summary
    {
        return $this->summary;
    }

    public function setPrice(Money $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getPrice(): Money
    {
        return $this->price;
    }

    public function setTags(?TagListInput $tags): static
    {
        $tags
            ->add($this->addTag(...))
            ->create($this->createTag(...))
            ->remove($this->removeTag(...))
            ->with($this->tags)
        ;

        return $this;
    }

    public function addTag(Tag $tag): static
    {
        if (!$this->tags->contains($tag)) {
            $this->tags->add($tag);
        }

        return $this;
    }

    public function createTag(TagName $name, ?BookListInput $books = null): static
    {
        $tag = new Tag($name, $books);
        $this->tags->add($tag);

        return $this;
    }

    public function removeTag(TagId $tagId): static
    {
        $tag = $this->tags->findFirst(function (int $key, Tag $tag) use ($tagId) {
            return $tagId->equals($tag->getId());
        });

        if ($tag instanceof Tag) {
            $this->tags->removeElement($tag);
        }

        return $this;
    }

    public function getTags(): TagList
    {
        return TagList::collect($this->tags);
    }
}
