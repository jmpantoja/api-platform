<?php

namespace App\Tests\BookStore\Application;

use App\BookStore\Application\CreateAuthor;
use App\BookStore\Application\Input\AuthorInput;
use App\BookStore\Domain\Model\Author;
use App\BookStore\Domain\Model\BookListInput;
use App\BookStore\Domain\Repository\AuthorRepository;
use App\Tests\Doubles\Traits\DoublesTrait;
use App\Tests\Doubles\Traits\FrameworkTrait;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @internal
 */
class CreateAuthorUseCaseTest extends KernelTestCase
{
    use DoublesTrait;
    use AssertTrait;
    use FrameworkTrait;

    public function test_author_is_created_properly()
    {
        $input = $this->makeInput(AuthorInput::class, [
            'name' => [
                'firstName' => 'pepe',
                'lastName' => 'martinez',
            ],
            'books' => BookListInput::collect(),
        ]);

        $command = new CreateAuthor($input);
        $authorId = $this->handle($command);
        $author = $this->findEntity(AuthorRepository::class, $authorId);

        $this->assertNotNull($author);
        $this->assertInstanceOf(Author::class, $author);

        $this->assertObjectProperties($author, [
            'id' => $authorId,
            'name' => $input->name,
        ]);

        $this->assertEquals($input->books->count(), $author->getBooks()->count());
    }
}
