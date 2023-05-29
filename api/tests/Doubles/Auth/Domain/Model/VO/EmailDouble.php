<?php

declare(strict_types=1);

namespace App\Tests\Doubles\Auth\Domain\Model\VO;

use App\Auth\Domain\Model\VO\Email;
use PlanB\Framework\Testing\Double;
use Prophecy\Prophecy\ObjectProphecy;

final class EmailDouble extends Double
{
    public function reveal(): Email
    {
        return $this->double->reveal();
    }

    public function withEmail(string $email): self
    {
        $this->double()
            ->getEmail()
            ->willReturn($email)
        ;

        return $this;
    }

    protected function classNameOrInterface(): string
    {
        return Email::class;
    }

    protected function double(): ObjectProphecy|Email
    {
        return $this->double;
    }
}
