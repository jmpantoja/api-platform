<?php

declare(strict_types=1);

namespace App\Tests\BookStore\Domain\Model;

use App\BookStore\Domain\Model\BookList;
use App\BookStore\Domain\Model\BookListInput;
use App\BookStore\Domain\Model\Tag;
use App\BookStore\Domain\Model\TagId;
use App\BookStore\Domain\Model\VO\TagName;
use App\Tests\Doubles\Traits\DoublesTrait;
use PHPUnit\Framework\TestCase;
use PlanB\Framework\Testing\Traits\AssertTrait;

/**
 * @internal
 */
class TagTest extends TestCase
{
    use DoublesTrait;
    use AssertTrait;

    public function test_it_can_be_properly_created()
    {
        $name = $this->doubleTagName();
        $books = $this->doubleBookListInput();
        $tag = new Tag($name, $books);

        $this->assertInstanceOf(Tag::class, $tag);

        $this->assertInstanceOf(TagId::class, $tag->getId());

        $this->assertObjectProperties($tag, [
            'name' => $name,
            'books' => BookList::collect(),
        ]);
    }

    public function test_it_manage_books_properly()
    {
        $book = $this->doubleBook();

        $books = BookListInput::collect([
            $book,
            ['author' => $this->doubleAuthor(), 'title' => $this->doubleTitle(), 'summary' => $this->doubleSummary(), 'price' => $this->doubleMoney(), 'tags' => $this->doubleTagListInput()],
        ]);

        $tag = $this->newInstance();
        $tag->setBooks($books);

        $this->assertCount(2, $tag->getBooks());
        $this->assertTrue($tag->getBooks()->contains($book));

        $books = BookListInput::collect();
        $tag->setBooks($books);

        $this->assertTrue($tag->getBooks()->isEmpty());
    }

    private function newInstance(?TagName $name = null, ?BookListInput $books = null): Tag
    {
        $name ??= $this->doubleTagName();
        $books ??= $this->doubleBookListInput();

        return new Tag($name, $books);
    }
}
