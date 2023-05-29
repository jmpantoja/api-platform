<?php

declare(strict_types=1);

namespace App\Tests\BookStore\Domain\Model\VO;

use App\BookStore\Domain\Model\VO\Title;
use App\Tests\Doubles\Traits\DoublesTrait;
use PHPUnit\Framework\TestCase;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Component\Validator\Exception\ValidationFailedException;

/**
 * @internal
 */
class TitleTest extends TestCase
{
    use DoublesTrait;
    use AssertTrait;

    public function test_it_can_be_properly_created()
    {
        $title = new Title('the title');

        $this->assertInstanceOf(Title::class, $title);

        $this->assertObjectProperties($title, [
            'title' => 'the title',
        ]);

        $this->assertEquals('the title', $title->__toString());
    }

    /**
     * @dataProvider wrongInputDataProvider
     */
    public function test_it_properly_validates(string $title, string $exceptionMessage)
    {
        $this->expectException(ValidationFailedException::class);
        $this->expectExceptionMessageMatches("/{$exceptionMessage}/");
        new Title($title);
    }

    public function wrongInputDataProvider(): array
    {
        return [
            //        ['title' => '??', 'message' => 'exception message']
        ];
    }
}
