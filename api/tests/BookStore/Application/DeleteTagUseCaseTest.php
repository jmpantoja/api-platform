<?php

namespace App\Tests\BookStore\Application;

use App\BookStore\Application\DeleteTag;
use App\BookStore\Domain\Model\TagId;
use App\BookStore\Domain\Repository\TagRepository;
use App\Tests\Doubles\Traits\DoublesTrait;
use App\Tests\Doubles\Traits\FrameworkTrait;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @internal
 */
class DeleteTagUseCaseTest extends KernelTestCase
{
    use DoublesTrait;
    use AssertTrait;
    use FrameworkTrait;

    public function test_tag_is_deleted_properly()
    {
        /** @var TagId $tagId */
        $tagId = $this->findEntityId(TagRepository::class);

        $command = new DeleteTag($tagId);

        $this->handle($command);
        $tag = $this->findEntity(TagRepository::class, $tagId);

        $this->assertNull($tag);
    }
}
