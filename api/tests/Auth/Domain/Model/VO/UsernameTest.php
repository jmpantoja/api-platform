<?php

declare(strict_types=1);

namespace App\Tests\Auth\Domain\Model\VO;

use App\Auth\Domain\Model\VO\Username;
use App\Tests\Doubles\Traits\DoublesTrait;
use PHPUnit\Framework\TestCase;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Component\Validator\Exception\ValidationFailedException;

/**
 * @internal
 */
class UsernameTest extends TestCase
{
    use DoublesTrait;
    use AssertTrait;

    public function test_it_can_be_properly_created()
    {
        $username = new Username('pepito58');

        $this->assertInstanceOf(Username::class, $username);

        $this->assertObjectProperties($username, [
            'username' => 'pepito58',
        ]);

        $this->assertEquals('pepito58', $username->__toString());
    }

    /**
     * @dataProvider wrongInputDataProvider
     */
    public function test_it_properly_validates(string $username, string $exceptionMessage)
    {
        $this->expectException(ValidationFailedException::class);
        $this->expectExceptionMessageMatches("/{$exceptionMessage}/");
        new Username($username);
    }

    public function wrongInputDataProvider(): array
    {
        return [
            //        ['username' => '??', 'message' => 'exception message']
        ];
    }
}
