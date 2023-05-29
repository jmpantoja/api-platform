<?php

namespace App\Tests\BookStore\Application;

use App\BookStore\Application\DeleteBook;
use App\BookStore\Domain\Model\BookId;
use App\BookStore\Domain\Repository\BookRepository;
use App\Tests\Doubles\Traits\DoublesTrait;
use App\Tests\Doubles\Traits\FrameworkTrait;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @internal
 */
class DeleteBookUseCaseTest extends KernelTestCase
{
    use DoublesTrait;
    use AssertTrait;
    use FrameworkTrait;

    public function test_book_is_deleted_properly()
    {
        /** @var BookId $bookId */
        $bookId = $this->findEntityId(BookRepository::class);

        $command = new DeleteBook($bookId);

        $this->handle($command);
        $book = $this->findEntity(BookRepository::class, $bookId);

        $this->assertNull($book);
    }
}
