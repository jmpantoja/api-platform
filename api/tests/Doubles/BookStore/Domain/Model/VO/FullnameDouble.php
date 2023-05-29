<?php

declare(strict_types=1);

namespace App\Tests\Doubles\BookStore\Domain\Model\VO;

use App\BookStore\Domain\Model\VO\Fullname;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class FullnameDouble extends Double
{
    public function reveal(): Fullname
    {
        return $this->double->reveal();
    }

    public function withFirstName(string $firstName): self
    {
        $this->double()
            ->getFirstName()
            ->willReturn($firstName)
        ;

        return $this;
    }

    public function withLastName(string $lastName): self
    {
        $this->double()
            ->getLastName()
            ->willReturn($lastName)
        ;

        return $this;
    }

    protected function classNameOrInterface(): string
    {
        return Fullname::class;
    }

    protected function double(): ObjectProphecy|Fullname
    {
        return $this->double;
    }
}
