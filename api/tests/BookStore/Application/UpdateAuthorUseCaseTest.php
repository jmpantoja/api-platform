<?php

namespace App\Tests\BookStore\Application;

use App\BookStore\Application\Input\AuthorInput;
use App\BookStore\Application\UpdateAuthor;
use App\BookStore\Domain\Model\AuthorId;
use App\BookStore\Domain\Model\BookListInput;
use App\BookStore\Domain\Repository\AuthorRepository;
use App\Tests\Doubles\Traits\DoublesTrait;
use App\Tests\Doubles\Traits\FrameworkTrait;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @internal
 */
class UpdateAuthorUseCaseTest extends KernelTestCase
{
    use DoublesTrait;
    use AssertTrait;
    use FrameworkTrait;

    public function test_author_is_updated_properly()
    {
        /** @var AuthorId $authorId */
        $authorId = $this->findEntityId(AuthorRepository::class);
        $input = $this->makeInput(AuthorInput::class, [
            'name' => [
                'firstName' => 'pepe',
                'lastName' => 'martinez',
            ],
            'books' => BookListInput::collect(),
        ]);

        $command = new UpdateAuthor($authorId, $input);

        $this->handle($command);
        $author = $this->findEntity(AuthorRepository::class, $authorId);

        $this->assertObjectProperties($author, [
            'id' => $authorId,
            'name' => $input->name,
        ]);

        $this->assertEquals($input->books->count(), $author->getBooks()->count());
    }
}
