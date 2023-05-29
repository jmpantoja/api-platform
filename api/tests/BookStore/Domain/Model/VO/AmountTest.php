<?php

declare(strict_types=1);

namespace App\Tests\BookStore\Domain\Model\VO;

use App\BookStore\Domain\Model\VO\Amount;
use App\Tests\Doubles\Traits\DoublesTrait;
use PHPUnit\Framework\TestCase;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Component\Validator\Exception\ValidationFailedException;

/**
 * @internal
 */
class AmountTest extends TestCase
{
    use DoublesTrait;
    use AssertTrait;

    public function test_it_can_be_properly_created()
    {
        $amount = new Amount(3);

        $this->assertInstanceOf(Amount::class, $amount);

        $this->assertObjectProperties($amount, [
            'amount' => 3,
        ]);

        $this->assertEquals(3, $amount->toInt());
    }

    /**
     * @dataProvider wrongInputDataProvider
     */
    public function test_it_properly_validates(int $amount, string $exceptionMessage)
    {
        $this->expectException(ValidationFailedException::class);
        $this->expectExceptionMessageMatches("/{$exceptionMessage}/");
        new Amount($amount);
    }

    public function wrongInputDataProvider(): array
    {
        return [
            //        ['amount' => '??', 'message' => 'exception message']
        ];
    }
}
