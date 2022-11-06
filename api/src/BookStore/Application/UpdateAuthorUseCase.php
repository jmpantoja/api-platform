<?php

declare(strict_types=1);

namespace App\BookStore\Application;

use App\BookStore\Application\Transformer\AuthorTransformer;
use App\BookStore\Domain\Model\Author;
use App\BookStore\Domain\Repository\AuthorRepository;
use PlanB\UseCase\UseCaseInterface;

final class UpdateAuthorUseCase implements UseCaseInterface
{
    private AuthorTransformer $transformer;
    private AuthorRepository $repository;

    public function __construct(AuthorTransformer $transformer, AuthorRepository $repository)
    {
        $this->transformer = $transformer;
        $this->repository = $repository;
    }

    public function __invoke(UpdateAuthor $command): Author
    {
        $input = $command->getInput();
        $previous = $this->repository->findById($command->getId());

        $author = $this->transformer->update($previous, $input);

        $this->repository->save($author);

        return $author;
    }
}
