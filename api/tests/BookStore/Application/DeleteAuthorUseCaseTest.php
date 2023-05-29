<?php

namespace App\Tests\BookStore\Application;

use App\BookStore\Application\DeleteAuthor;
use App\BookStore\Domain\Model\AuthorId;
use App\BookStore\Domain\Repository\AuthorRepository;
use App\Tests\Doubles\Traits\DoublesTrait;
use App\Tests\Doubles\Traits\FrameworkTrait;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @internal
 */
class DeleteAuthorUseCaseTest extends KernelTestCase
{
    use DoublesTrait;
    use AssertTrait;
    use FrameworkTrait;

    public function test_author_is_deleted_properly()
    {
        /** @var AuthorId $authorId */
        $authorId = $this->findEntityId(AuthorRepository::class);

        $command = new DeleteAuthor($authorId);

        $this->handle($command);
        $author = $this->findEntity(AuthorRepository::class, $authorId);

        $this->assertNull($author);
    }
}
