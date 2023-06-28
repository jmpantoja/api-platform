<?php

declare(strict_types=1);

namespace App\Tests\Auth\Domain\Model;

use App\Auth\Domain\Model\RoleList;
use App\Auth\Domain\Model\User;
use App\Auth\Domain\Model\UserId;
use App\Auth\Domain\Model\UserList;
use App\Auth\Domain\Model\VO\Email;
use App\Auth\Domain\Model\VO\Username;
use App\Auth\Domain\Service\PasswordHasher;
use App\Tests\Doubles\Auth\Domain\Model\UserListDouble;
use App\Tests\Doubles\Auth\Domain\Service\PasswordHasherDouble;
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

    private function doublePasswordHasher(callable $configure = null): PasswordHasher
    {
        $builder = new PasswordHasherDouble($this->prophesize(...), $configure);
        return $builder->reveal();
    }

    public function test_it_can_be_properly_created()
    {
        $username = $this->doubleUsername();
        $email = $this->doubleEmail();
        $password = $this->doublePasswordHasher(function (PasswordHasherDouble $builder){
            $builder->withHash('hash');
        });

        $roles = RoleList::collect(['ROLE_EDIT']);
        $user = new User($username, $email, $roles, $password);

        $this->assertInstanceOf(User::class, $user);

        $this->assertInstanceOf(UserId::class, $user->getId());

        $this->assertObjectProperties($user, [
            'username' => $username,
            'email' => $email,
            'password' => $password->hash($user),
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
