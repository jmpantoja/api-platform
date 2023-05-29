<?php

declare(strict_types=1);

namespace App\Tests\BookStore\Domain\Model\VO;

use App\BookStore\Domain\Model\VO\Currency;
use App\Tests\Doubles\Traits\DoublesTrait;
use PHPUnit\Framework\TestCase;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Component\Validator\Exception\ValidationFailedException;

/**
 * @internal
 */
class CurrencyTest extends TestCase
{
    use DoublesTrait;
    use AssertTrait;

    public function test_it_can_be_properly_created()
    {
        $currency = new Currency('EUR');

        $this->assertInstanceOf(Currency::class, $currency);

        $this->assertObjectProperties($currency, [
            'currency' => 'EUR',
        ]);

        $this->assertEquals('EUR', $currency->__toString());
    }

    /**
     * @dataProvider wrongInputDataProvider
     */
    public function test_it_properly_validates(string $currency, string $exceptionMessage)
    {
        $this->expectException(ValidationFailedException::class);
        $this->expectExceptionMessageMatches("/{$exceptionMessage}/");
        new Currency($currency);
    }

    public function wrongInputDataProvider(): array
    {
        return [
            //        ['currency' => '??', 'message' => 'exception message']
        ];
    }
}
