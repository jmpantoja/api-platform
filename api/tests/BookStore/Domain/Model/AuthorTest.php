<?php

declare(strict_types=1);

namespace App\Tests\BookStore\Domain\Model;

use App\BookStore\Domain\Model\Author;
use App\BookStore\Domain\Model\AuthorId;
use App\BookStore\Domain\Model\BookList;
use App\BookStore\Domain\Model\BookListInput;
use App\BookStore\Domain\Model\VO\Fullname;
use App\Tests\Doubles\Traits\DoublesTrait;
use PHPUnit\Framework\TestCase;
use PlanB\Framework\Testing\Traits\AssertTrait;

/**
 * @internal
 */
class AuthorTest extends TestCase
{
    use DoublesTrait;
    use AssertTrait;

    public function test_it_can_be_properly_created()
    {
        $name = $this->doubleFullname();
        $books = $this->doubleBookListInput();
        $author = new Author($name, $books);

        $this->assertInstanceOf(Author::class, $author);

        $this->assertInstanceOf(AuthorId::class, $author->getId());

        $this->assertObjectProperties($author, [
            'name' => $name,
            'books' => BookList::collect(),
        ]);
    }

    public function test_it_manage_books_properly()
    {
        $book = $this->doubleBook();

        $books = BookListInput::collect([
            $book,
            ['title' => $this->doubleTitle(), 'summary' => $this->doubleSummary(), 'price' => $this->doubleMoney(), 'tags' => $this->doubleTagListInput()],
        ]);

        $author = $this->newInstance();
        $author->setBooks($books);

        $this->assertCount(2, $author->getBooks());
        $this->assertTrue($author->getBooks()->contains($book));

        $books = BookListInput::collect();
        $author->setBooks($books);

        $this->assertTrue($author->getBooks()->isEmpty());
    }

    private function newInstance(?Fullname $name = null, ?BookListInput $books = null): Author
    {
        $name ??= $this->doubleFullname();
        $books ??= $this->doubleBookListInput();

        return new Author($name, $books);
    }
}
