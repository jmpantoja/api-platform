<?php

declare(strict_types=1);

namespace App\BookStore\Application;

use App\BookStore\Application\Transformer\TagTransformer;
use App\BookStore\Domain\Model\Tag;
use App\BookStore\Domain\Repository\TagRepository;
use PlanB\UseCase\UseCaseInterface;

final class CreateTagUseCase implements UseCaseInterface
{
    private TagTransformer $transformer;
    private TagRepository $repository;

    public function __construct(TagTransformer $transformer, TagRepository $repository)
    {
        $this->transformer = $transformer;
        $this->repository = $repository;
    }

    public function __invoke(CreateTag $command): Tag
    {
        $input = $command->getInput();
        $tag = $this->transformer->newInstance($input);

        $this->repository->save($tag);

        return $tag;
    }
}
