<?php

declare(strict_types=1);

namespace App\BookStore\Framework\Api\State;

use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use ApiPlatform\State\ProcessorInterface;
use App\BookStore\Application\CreateAuthor;
use App\BookStore\Application\DeleteAuthor;
use App\BookStore\Application\UpdateAuthor;
use App\BookStore\Domain\Model\AuthorId;
use League\Tactician\CommandBus;

final class AuthorProcessor implements ProcessorInterface
{
    private CommandBus $commandBus;

    public function __construct(CommandBus $commandBus)
    {
        $this->commandBus = $commandBus;
    }

    public function process($data, Operation $operation, array $uriVariables = [], array $context = [])
    {
        $command = match (true) {
            $operation instanceof Post => new CreateAuthor($data),
            $operation instanceof Put => new UpdateAuthor(new AuthorId($uriVariables['id']), $data),
            $operation instanceof Delete => new DeleteAuthor(new AuthorId($uriVariables['id'])),
        };

        return $this->commandBus->handle($command);
    }
}
