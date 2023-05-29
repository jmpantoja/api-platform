<?php

declare(strict_types=1);

namespace App\Tests\Doubles\BookStore\Domain\Model;

use App\BookStore\Domain\Model\Author;
use App\BookStore\Domain\Model\AuthorId;
use App\BookStore\Domain\Model\BookListInput;
use App\BookStore\Domain\Model\VO\Fullname;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class AuthorDouble extends Double
{
    public function reveal(): Author
    {
        return $this->double->reveal();
    }

    public function withId(AuthorId $id): self
    {
        $this->double()
            ->getId()
            ->willReturn($id)
        ;

        return $this;
    }

    public function withName(Fullname $name): self
    {
        $this->double()
            ->getName()
            ->willReturn($name)
        ;

        return $this;
    }

    public function withBooks(?BookListInput $books): self
    {
        $this->double()
            ->getBooks()
            ->willReturn($books)
        ;

        return $this;
    }

    protected function classNameOrInterface(): string
    {
        return Author::class;
    }

    protected function double(): ObjectProphecy|Author
    {
        return $this->double;
    }

    protected function configure(): void
    {
        $this->withId(new AuthorId());
    }
}
