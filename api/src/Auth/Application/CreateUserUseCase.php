<?php

declare(strict_types=1);

namespace App\Auth\Application;

use App\Auth\Application\Transformer\UserTransformer;
use App\Auth\Domain\Model\User;
use App\Auth\Domain\Repository\UserRepository;
use PlanB\UseCase\UseCaseInterface;

final class CreateUserUseCase implements UseCaseInterface
{
    private UserTransformer $transformer;
    private UserRepository $repository;

    public function __construct(UserTransformer $transformer, UserRepository $repository)
    {
        $this->transformer = $transformer;
        $this->repository = $repository;
    }

    public function __invoke(CreateUser $command): User
    {
        $input = $command->getInput();
        $user = $this->transformer->newInstance($input);

        $this->repository->save($user);

        return $user;
    }
}
