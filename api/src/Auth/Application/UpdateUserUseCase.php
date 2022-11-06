<?php

declare(strict_types=1);

namespace App\Auth\Application;

use App\Auth\Application\Transformer\UserTransformer;
use App\Auth\Domain\Model\User;
use App\Auth\Domain\Repository\UserRepository;
use PlanB\UseCase\UseCaseInterface;

final class UpdateUserUseCase implements UseCaseInterface
{
    private UserTransformer $transformer;
    private UserRepository $repository;

    public function __construct(UserTransformer $transformer, UserRepository $repository)
    {
        $this->transformer = $transformer;
        $this->repository = $repository;
    }

    public function __invoke(UpdateUser $command): User
    {
        $input = $command->getInput();
        $previous = $this->repository->findById($command->getId());

        $user = $this->transformer->update($previous, $input);

        $this->repository->save($user);

        return $user;
    }
}
