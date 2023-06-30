<?php

declare(strict_types=1);

namespace App\BookStore\Framework\Doctrine\Fixtures;

use App\BookStore\Application\CreateTag;
use App\BookStore\Application\Input\TagInput;
use App\BookStore\Domain\Model\VO\TagName;
use PlanB\Framework\Doctrine\Fixtures\UseCaseFixture;

final class TagFixture extends UseCaseFixture
{
    public function loadData(): void
    {
        $this->createMany(50, function (int $key) {
            $input = new TagInput();
//            $input->name = new TagName($this->faker->regexify('[A-C][a-z]{3,4}'));
            $input->name = new TagName("tag_{$key}");
            $command = new CreateTag($input);

            return $this->handle($command);
        });
    }

    protected function allowedEnvironments(): array
    {
        return ['dev'];
    }
}
