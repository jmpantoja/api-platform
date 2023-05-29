<?php

declare(strict_types=1);

namespace App\Tests\BookStore\Domain\Model\VO;

use App\BookStore\Domain\Model\VO\Amount;
use App\BookStore\Domain\Model\VO\Currency;
use App\BookStore\Domain\Model\VO\Money;
use App\Tests\Doubles\Traits\DoublesTrait;
use PHPUnit\Framework\TestCase;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Component\Validator\Exception\ValidationFailedException;

/**
 * @internal
 */
class MoneyTest extends TestCase
{
    use DoublesTrait;
    use AssertTrait;

    public function test_it_can_be_properly_created()
    {
        $amount = $this->doubleAmount();
        $currency = $this->doubleCurrency();
        $money = new Money($amount, $currency);

        $this->assertInstanceOf(Money::class, $money);

        $this->assertObjectProperties($money, [
            'amount' => $amount,
            'currency' => $currency,
        ]);
    }

    /**
     * @dataProvider wrongInputDataProvider
     */
    public function test_it_properly_validates(Amount $amount, Currency $currency, string $exceptionMessage)
    {
        $this->expectException(ValidationFailedException::class);
        $this->expectExceptionMessageMatches("/{$exceptionMessage}/");
        new Money($amount, $currency);
    }

    public function wrongInputDataProvider(): array
    {
        return [
            //        ['amount' => '??', 'currency' => '??', 'message' => 'exception message']
        ];
    }
}
