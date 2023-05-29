<?php

declare(strict_types=1);

namespace App\Tests\BookStore\Domain\Model;

use App\BookStore\Domain\Model\Author;
use App\BookStore\Domain\Model\Book;
use App\BookStore\Domain\Model\BookId;
use App\BookStore\Domain\Model\TagList;
use App\BookStore\Domain\Model\TagListInput;
use App\BookStore\Domain\Model\VO\Money;
use App\BookStore\Domain\Model\VO\Summary;
use App\BookStore\Domain\Model\VO\Title;
use App\Tests\Doubles\Traits\DoublesTrait;
use PHPUnit\Framework\TestCase;
use PlanB\Framework\Testing\Traits\AssertTrait;

/**
 * @internal
 */
class BookTest extends TestCase
{
    use DoublesTrait;
    use AssertTrait;

    public function test_it_can_be_properly_created()
    {
        $author = $this->doubleAuthor();
        $title = $this->doubleTitle();
        $summary = $this->doubleSummary();
        $price = $this->doubleMoney();
        $tags = $this->doubleTagListInput();
        $book = new Book($author, $title, $summary, $price, $tags);

        $this->assertInstanceOf(Book::class, $book);

        $this->assertInstanceOf(BookId::class, $book->getId());

        $this->assertObjectProperties($book, [
            'author' => $author,
            'title' => $title,
            'summary' => $summary,
            'price' => $price,
            'tags' => TagList::collect(),
        ]);
    }

    public function test_it_manage_tags_properly()
    {
        $tag = $this->doubleTag();

        $tags = TagListInput::collect([
            $tag,
            ['name' => $this->doubleTagName(), 'books' => $this->doubleBookListInput()],
        ]);

        $book = $this->newInstance();
        $book->setTags($tags);

        $this->assertCount(2, $book->getTags());
        $this->assertTrue($book->getTags()->contains($tag));

        $tags = TagListInput::collect();
        $book->setTags($tags);

        $this->assertTrue($book->getTags()->isEmpty());
    }

    private function newInstance(?Author $author = null, ?Title $title = null, ?Summary $summary = null, ?Money $price = null, ?TagListInput $tags = null): Book
    {
        $author ??= $this->doubleAuthor();
        $title ??= $this->doubleTitle();
        $summary ??= $this->doubleSummary();
        $price ??= $this->doubleMoney();
        $tags ??= $this->doubleTagListInput();

        return new Book($author, $title, $summary, $price, $tags);
    }
}
