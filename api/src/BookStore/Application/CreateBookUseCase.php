<?php

declare(strict_types=1);

namespace App\BookStore\Application;

use App\BookStore\Application\Transformer\BookTransformer;
use App\BookStore\Domain\Model\Book;
use App\BookStore\Domain\Repository\BookRepository;
use PlanB\UseCase\UseCaseInterface;

final class CreateBookUseCase implements UseCaseInterface
{
    private BookTransformer $transformer;
    private BookRepository $repository;

    public function __construct(BookTransformer $transformer, BookRepository $repository)
    {
        $this->transformer = $transformer;
        $this->repository = $repository;
    }

    public function __invoke(CreateBook $command): Book
    {
        $input = $command->getInput();
        $book = $this->transformer->newInstance($input);

        $this->repository->save($book);

        return $book;
    }
}
