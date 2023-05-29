<?php

namespace App\Tests\BookStore\Application;

use App\Auth\Application\DeleteUser;
use App\Auth\Domain\Model\UserId;
use App\Auth\Domain\Repository\UserRepository;
use App\Tests\Doubles\Traits\DoublesTrait;
use App\Tests\Doubles\Traits\FrameworkTrait;
use PlanB\Framework\Testing\Traits\AssertTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @internal
 */
class DeleteUserUseCaseTest extends KernelTestCase
{
    use DoublesTrait;
    use AssertTrait;
    use FrameworkTrait;

    public function test_user_is_deleted_properly()
    {
        /** @var UserId $userId */
        $userId = $this->findEntityId(UserRepository::class);

        $command = new DeleteUser($userId);

        $this->handle($command);
        $user = $this->findEntity(UserRepository::class, $userId);

        $this->assertNull($user);
    }
}
