<?php

namespace App\Tests\Auth\Application;

use App\Auth\Application\Input\UserInput;
use App\Auth\Application\UpdateUser;
use App\Auth\Domain\Model\UserId;
use App\Auth\Domain\Repository\UserRepository;
use App\Tests\Doubles\Traits\DoublesTrait;
use App\Tests\Doubles\Traits\FrameworkTrait;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @internal
 */
class UpdateUserUseCaseTest extends KernelTestCase
{
    use DoublesTrait;
    use AssertTrait;
    use FrameworkTrait;

    public function test_user_is_updated_properly()
    {
        /** @var UserId $userId */
        $userId = $this->findEntityId(UserRepository::class);
        $input = $this->makeInput(UserInput::class, [
            'username' => 'pepito58',
            'email' => 'pepito@prueba.com',
            'password' => 'secret',
            'roles' => ['ROLE_EDITOR'],
        ]);

        $command = new UpdateUser($userId, $input);

        $this->handle($command);
        $user = $this->findEntity(UserRepository::class, $userId);

        $this->assertObjectProperties($user, [
            'id' => $userId,
            'username' => $input->username,
            'email' => $input->email,
            'roles' => ['ROLE_EDITOR'],
        ]);
    }
}
