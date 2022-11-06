<?php

declare(strict_types=1);

namespace App\BookStore\Application;

use App\BookStore\Application\Transformer\AuthorTransformer;
use App\BookStore\Domain\Model\Author;
use App\BookStore\Domain\Repository\AuthorRepository;
use PlanB\UseCase\UseCaseInterface;

final class CreateAuthorUseCase implements UseCaseInterface
{
    private AuthorTransformer $transformer;
    private AuthorRepository $repository;

    public function __construct(AuthorTransformer $transformer, AuthorRepository $repository)
    {
        $this->transformer = $transformer;
        $this->repository = $repository;
    }

    public function __invoke(CreateAuthor $command): Author
    {
        $input = $command->getInput();
        $author = $this->transformer->newInstance($input);

        $this->repository->save($author);

        return $author;
    }
}
