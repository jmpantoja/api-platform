<?php

declare(strict_types=1);

namespace App\Auth\Framework\Api\State;

use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use ApiPlatform\State\ProcessorInterface;
use App\Auth\Application\CreateUser;
use App\Auth\Application\DeleteUser;
use App\Auth\Application\UpdateUser;
use App\Auth\Domain\Model\UserId;
use League\Tactician\CommandBus;

final class UserProcessor implements ProcessorInterface
{
    private CommandBus $commandBus;

    public function __construct(CommandBus $commandBus)
    {
        $this->commandBus = $commandBus;
    }

    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = []): mixed
    {
        $command = match (true) {
            $operation instanceof Post => new CreateUser($data),
            $operation instanceof Put => new UpdateUser(new UserId($uriVariables['id']), $data),
            $operation instanceof Delete => new DeleteUser(new UserId($uriVariables['id'])),
            default => throw new \Exception('Invalid operation')
        };

        return $this->commandBus->handle($command);
    }
}
