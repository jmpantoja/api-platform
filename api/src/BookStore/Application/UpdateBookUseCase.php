<?php

declare(strict_types=1);

namespace App\BookStore\Application;

use App\BookStore\Application\Transformer\BookTransformer;
use App\BookStore\Domain\Model\Book;
use App\BookStore\Domain\Repository\BookRepository;
use PlanB\UseCase\UseCaseInterface;

final class UpdateBookUseCase implements UseCaseInterface
{
    private BookTransformer $transformer;
    private BookRepository $repository;

    public function __construct(BookTransformer $transformer, BookRepository $repository)
    {
        $this->transformer = $transformer;
        $this->repository = $repository;
    }

    public function __invoke(UpdateBook $command): Book
    {
        $input = $command->getInput();
        $previous = $this->repository->findById($command->getId());

        $book = $this->transformer->update($previous, $input);

        $this->repository->save($book);

        return $book;
    }
}
