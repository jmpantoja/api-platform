<?php

declare(strict_types=1);

namespace App\Tests\Auth\Domain\Model\VO;

use App\Auth\Domain\Model\VO\Role;
use App\Tests\Doubles\Traits\DoublesTrait;
use PHPUnit\Framework\TestCase;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Component\Validator\Exception\ValidationFailedException;

/**
 * @internal
 */
class RoleTest extends TestCase
{
    use DoublesTrait;
    use AssertTrait;

    public function test_it_can_be_properly_created()
    {
        $role = new Role('editor');

        $this->assertInstanceOf(Role::class, $role);

        $this->assertObjectProperties($role, [
            'role' => 'editor',
        ]);

        $this->assertEquals('editor', $role->__toString());
    }

    /**
     * @dataProvider wrongInputDataProvider
     */
    public function test_it_properly_validates(string $role, string $exceptionMessage)
    {
        $this->expectException(ValidationFailedException::class);
        $this->expectExceptionMessageMatches("/{$exceptionMessage}/");
        new Role($role);
    }

    public function wrongInputDataProvider(): array
    {
        return [
            //        ['role' => '??', 'message' => 'exception message']
        ];
    }
}
