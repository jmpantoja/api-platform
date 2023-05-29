<?php

declare(strict_types=1);

namespace App\Tests\BookStore\Domain\Model\VO;

use App\BookStore\Domain\Model\VO\Summary;
use App\Tests\Doubles\Traits\DoublesTrait;
use PHPUnit\Framework\TestCase;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Component\Validator\Exception\ValidationFailedException;

/**
 * @internal
 */
class SummaryTest extends TestCase
{
    use DoublesTrait;
    use AssertTrait;

    public function test_it_can_be_properly_created()
    {
        $summary = new Summary('a long text with summary');

        $this->assertInstanceOf(Summary::class, $summary);

        $this->assertObjectProperties($summary, [
            'summary' => 'a long text with summary',
        ]);

        $this->assertEquals('a long text with summary', $summary->__toString());
    }

    /**
     * @dataProvider wrongInputDataProvider
     */
    public function test_it_properly_validates(string $summary, string $exceptionMessage)
    {
        $this->expectException(ValidationFailedException::class);
        $this->expectExceptionMessageMatches("/{$exceptionMessage}/");
        new Summary($summary);
    }

    public function wrongInputDataProvider(): array
    {
        return [
            //        ['summary' => '??', 'message' => 'exception message']
        ];
    }
}
