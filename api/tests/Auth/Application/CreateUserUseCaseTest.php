<?php

namespace App\Tests\BookStore\Application;

use App\Auth\Application\CreateUser;
use App\Auth\Application\Input\UserInput;
use App\Auth\Domain\Model\User;
use App\Auth\Domain\Repository\UserRepository;
use App\Tests\Doubles\Traits\DoublesTrait;
use App\Tests\Doubles\Traits\FrameworkTrait;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @internal
 */
class CreateUserUseCaseTest extends KernelTestCase
{
    use DoublesTrait;
    use AssertTrait;
    use FrameworkTrait;

    public function test_user_is_created_properly()
    {
        $input = $this->makeInput(UserInput::class, [
            'username' => 'pepito58',
            'email' => 'pepito@prueba.com',
            'password' => 'secret',
        ]);

        $command = new CreateUser($input);
        $userId = $this->handle($command);
        $user = $this->findEntity(UserRepository::class, $userId);

        $this->assertNotNull($user);
        $this->assertInstanceOf(User::class, $user);

        $this->assertObjectProperties($user, [
            'id' => $userId,
            'username' => $input->username,
            'email' => $input->email,
            'password' => $input->password,
        ]);
    }
}
