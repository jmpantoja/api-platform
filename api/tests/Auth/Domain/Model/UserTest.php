<?php

declare(strict_types=1);

namespace App\Tests\Auth\Domain\Model;

use App\Auth\Domain\Model\UserId;
use App\Auth\Domain\Model\VO\Email;
use App\Auth\Domain\Model\VO\Username;
use App\Auth\Domain\Service\PasswordHasher;
use App\Tests\Doubles\Traits\DoublesTrait;
use PHPUnit\Framework\TestCase;
use PlanB\Framework\Testing\Traits\AssertTrait;

/**
 * @internal
 */
class UserTest extends TestCase
{
    use DoublesTrait;
    use AssertTrait;

    public function test_it_can_be_properly_created()
    {
        $username = $this->doubleUsername();
        $email = $this->doubleEmail();
        $password = $this->doublePasswordHasher();
        $user = new User($username, $email, $password);

        $this->assertInstanceOf(User::class, $user);

        $this->assertInstanceOf(UserId::class, $user->getId());

        $this->assertObjectProperties($user, [
            'username' => $username,
            'email' => $email,
            'password' => $password,
        ]);
    }

    private function newInstance(?Username $username = null, ?Email $email = null, ?PasswordHasher $password = null): User
    {
        $username ??= $this->doubleUsername();
        $email ??= $this->doubleEmail();
        $password ??= $this->doublePasswordHasher();

        return new User($username, $email, $password);
    }
}
