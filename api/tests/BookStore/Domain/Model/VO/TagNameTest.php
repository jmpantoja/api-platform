<?php

declare(strict_types=1);

namespace App\Tests\BookStore\Domain\Model\VO;

use App\BookStore\Domain\Model\VO\TagName;
use App\Tests\Doubles\Traits\DoublesTrait;
use PHPUnit\Framework\TestCase;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Component\Validator\Exception\ValidationFailedException;

/**
 * @internal
 */
class TagNameTest extends TestCase
{
    use DoublesTrait;
    use AssertTrait;

    public function test_it_can_be_properly_created()
    {
        $tagName = new TagName('the tag name');

        $this->assertInstanceOf(TagName::class, $tagName);

        $this->assertObjectProperties($tagName, [
            'name' => 'the tag name',
        ]);

        $this->assertEquals('the tag name', $tagName->__toString());
    }

    /**
     * @dataProvider wrongInputDataProvider
     */
    public function test_it_properly_validates(string $name, string $exceptionMessage)
    {
        $this->expectException(ValidationFailedException::class);
        $this->expectExceptionMessageMatches("/{$exceptionMessage}/");
        new TagName($name);
    }

    public function wrongInputDataProvider(): array
    {
        return [
            //        ['name' => '??', 'message' => 'exception message']
        ];
    }
}
