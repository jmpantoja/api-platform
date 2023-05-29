<?php

namespace App\Tests\BookStore\Application;

use App\BookStore\Application\Input\TagInput;
use App\BookStore\Application\UpdateTag;
use App\BookStore\Domain\Model\BookListInput;
use App\BookStore\Domain\Model\TagId;
use App\BookStore\Domain\Repository\TagRepository;
use App\Tests\Doubles\Traits\DoublesTrait;
use App\Tests\Doubles\Traits\FrameworkTrait;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @internal
 */
class UpdateTagUseCaseTest extends KernelTestCase
{
    use DoublesTrait;
    use AssertTrait;
    use FrameworkTrait;

    public function test_tag_is_updated_properly()
    {
        /** @var TagId $tagId */
        $tagId = $this->findEntityId(TagRepository::class);
        $input = $this->makeInput(TagInput::class, [
            'name' => 'the tag name',
            'books' => BookListInput::collect(),
        ]);

        $command = new UpdateTag($tagId, $input);

        $this->handle($command);
        $tag = $this->findEntity(TagRepository::class, $tagId);

        $this->assertObjectProperties($tag, [
            'id' => $tagId,
            'name' => $input->name,
        ]);

        $this->assertEquals($input->books->count(), $tag->getBooks()->count());
    }
}
