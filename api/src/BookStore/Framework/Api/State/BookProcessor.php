<?php

declare(strict_types=1);

namespace App\BookStore\Framework\Api\State;

use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use ApiPlatform\State\ProcessorInterface;
use App\BookStore\Application\CreateBook;
use App\BookStore\Application\DeleteBook;
use App\BookStore\Application\UpdateBook;
use App\BookStore\Domain\Model\BookId;
use League\Tactician\CommandBus;

final class BookProcessor implements ProcessorInterface
{
    private CommandBus $commandBus;

    public function __construct(CommandBus $commandBus)
    {
        $this->commandBus = $commandBus;
    }

    public function process($data, Operation $operation, array $uriVariables = [], array $context = [])
    {
        $command = match (true) {
            $operation instanceof Post => new CreateBook($data),
            $operation instanceof Put => new UpdateBook(new BookId($uriVariables['id']), $data),
            $operation instanceof Delete => new DeleteBook(new BookId($uriVariables['id'])),
        };

        return $this->commandBus->handle($command);
    }
}
