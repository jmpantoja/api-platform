<?php

declare(strict_types=1);

namespace App\Tests\Auth\Domain\Model\VO;

use App\Auth\Domain\Model\VO\Email;
use App\Tests\Doubles\Traits\DoublesTrait;
use PHPUnit\Framework\TestCase;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Component\Validator\Exception\ValidationFailedException;

/**
 * @internal
 */
class EmailTest extends TestCase
{
    use DoublesTrait;
    use AssertTrait;

    public function test_it_can_be_properly_created()
    {
        $email = new Email('pepito@prueba.com');

        $this->assertInstanceOf(Email::class, $email);

        $this->assertObjectProperties($email, [
            'email' => 'pepito@prueba.com',
        ]);

        $this->assertEquals('pepito@prueba.com', $email->__toString());
    }

    /**
     * @dataProvider wrongInputDataProvider
     */
    public function test_it_properly_validates(string $email, string $exceptionMessage)
    {
        $this->expectException(ValidationFailedException::class);
        $this->expectExceptionMessageMatches("/{$exceptionMessage}/");
        new Email($email);
    }

    public function wrongInputDataProvider(): array
    {
        return [
            //        ['email' => '??', 'message' => 'exception message']
        ];
    }
}
