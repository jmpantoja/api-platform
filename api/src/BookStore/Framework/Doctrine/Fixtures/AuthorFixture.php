<?php

declare(strict_types=1);

namespace App\BookStore\Framework\Doctrine\Fixtures;

use App\BookStore\Application\CreateAuthor;
use App\BookStore\Application\Input\AuthorInput;
use App\BookStore\Domain\Model\VO\Fullname;
use PlanB\Framework\Doctrine\Fixtures\UseCaseFixture;

final class AuthorFixture extends UseCaseFixture
{
    public function loadData(): void
    {
        $this->createMany(15, function (int $key) {
            $input = new AuthorInput();
            $input->name = new Fullname(...[
                $this->faker->firstName(),
                $this->faker->lastName(),
            ]);

            $command = new CreateAuthor($input);

            return $this->handle($command);
        });
    }

    protected function allowedEnvironments(): array
    {
        return ['dev'];
    }
}
