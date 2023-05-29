<?php

declare(strict_types=1);

namespace App\BookStore\Framework\Api\State;

use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use ApiPlatform\State\ProcessorInterface;
use App\BookStore\Application\CreateTag;
use App\BookStore\Application\DeleteTag;
use App\BookStore\Application\UpdateTag;
use App\BookStore\Domain\Model\TagId;
use League\Tactician\CommandBus;

final class TagProcessor implements ProcessorInterface
{
    private CommandBus $commandBus;

    public function __construct(CommandBus $commandBus)
    {
        $this->commandBus = $commandBus;
    }

    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = []): mixed
    {
        $command = match (true) {
            $operation instanceof Post => new CreateTag($data),
            $operation instanceof Put => new UpdateTag(new TagId($uriVariables['id']), $data),
            $operation instanceof Delete => new DeleteTag(new TagId($uriVariables['id'])),
            default => throw new \Exception('Invalid operation')
        };

        return $this->commandBus->handle($command);
    }
}
