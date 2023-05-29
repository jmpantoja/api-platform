<?php

namespace App\Tests\BookStore\Application;

use App\BookStore\Application\CreateBook;
use App\BookStore\Application\Input\BookInput;
use App\BookStore\Domain\Model\Book;
use App\BookStore\Domain\Repository\BookRepository;
use App\Tests\Doubles\Traits\DoublesTrait;
use App\Tests\Doubles\Traits\FrameworkTrait;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @internal
 */
class CreateBookUseCaseTest extends KernelTestCase
{
    use DoublesTrait;
    use AssertTrait;
    use FrameworkTrait;

    public function test_book_is_created_properly()
    {
        $input = $this->makeInput(BookInput::class, [
            'author' => [
                'name' => [
                    'firstName' => 'pepe',
                    'lastName' => 'martinez',
                ],
            ],
            'title' => 'the title',
            'summary' => 'a long text with summary',
            'price' => [
                'amount' => 10,
                'currency' => 'EUR',
            ],
            'tags' => [
                0 => [
                    'name' => 'the tag name',
                ],
            ],
        ]);

        $command = new CreateBook($input);
        $bookId = $this->handle($command);
        $book = $this->findEntity(BookRepository::class, $bookId);

        $this->assertNotNull($book);
        $this->assertInstanceOf(Book::class, $book);

        $this->assertObjectProperties($book, [
            'id' => $bookId,
            'author' => $input->author,
            'title' => $input->title,
            'summary' => $input->summary,
            'price' => $input->price,
        ]);

        $this->assertEquals($input->tags->count(), $book->getTags()->count());
    }
}
