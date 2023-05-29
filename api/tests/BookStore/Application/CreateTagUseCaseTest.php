<?php

namespace App\Tests\BookStore\Application;

use App\BookStore\Application\CreateTag;
use App\BookStore\Application\Input\TagInput;
use App\BookStore\Domain\Model\BookListInput;
use App\BookStore\Domain\Model\Tag;
use App\BookStore\Domain\Repository\TagRepository;
use App\Tests\Doubles\Traits\DoublesTrait;
use App\Tests\Doubles\Traits\FrameworkTrait;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @internal
 */
class CreateTagUseCaseTest extends KernelTestCase
{
    use DoublesTrait;
    use AssertTrait;
    use FrameworkTrait;

    public function test_tag_is_created_properly()
    {
        $input = $this->makeInput(TagInput::class, [
            'name' => 'the tag name',
            'books' => BookListInput::collect(),
        ]);

        $command = new CreateTag($input);
        $tagId = $this->handle($command);
        $tag = $this->findEntity(TagRepository::class, $tagId);

        $this->assertNotNull($tag);
        $this->assertInstanceOf(Tag::class, $tag);

        $this->assertObjectProperties($tag, [
            'id' => $tagId,
            'name' => $input->name,
        ]);

        $this->assertEquals($input->books->count(), $tag->getBooks()->count());
    }
}
