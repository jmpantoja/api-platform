<?php

declare(strict_types=1);

namespace App\Tests\BookStore\Domain\Model\VO;

use App\BookStore\Domain\Model\VO\Fullname;
use App\Tests\Doubles\Traits\DoublesTrait;
use PHPUnit\Framework\TestCase;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Component\Validator\Exception\ValidationFailedException;

/**
 * @internal
 */
class FullnameTest extends TestCase
{
    use DoublesTrait;
    use AssertTrait;

    public function test_it_can_be_properly_created()
    {
        $fullname = new Fullname('pepe', 'martinez');

        $this->assertInstanceOf(Fullname::class, $fullname);

        $this->assertObjectProperties($fullname, [
            'firstName' => 'pepe',
            'lastName' => 'martinez',
        ]);
    }

    /**
     * @dataProvider wrongInputDataProvider
     */
    public function test_it_properly_validates(string $firstName, string $lastName, string $exceptionMessage)
    {
        $this->expectException(ValidationFailedException::class);
        $this->expectExceptionMessageMatches("/{$exceptionMessage}/");
        new Fullname($firstName, $lastName);
    }

    public function wrongInputDataProvider(): array
    {
        return [
            //        ['firstName' => '??', 'lastName' => '??', 'message' => 'exception message']
        ];
    }
}
