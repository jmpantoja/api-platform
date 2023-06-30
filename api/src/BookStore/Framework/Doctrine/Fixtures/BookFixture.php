<?php

declare(strict_types=1);

namespace App\BookStore\Framework\Doctrine\Fixtures;

use App\BookStore\Application\CreateBook;
use App\BookStore\Application\Input\BookInput;
use App\BookStore\Domain\Model\Author;
use App\BookStore\Domain\Model\Tag;
use App\BookStore\Domain\Model\TagListInput;
use App\BookStore\Domain\Model\VO\Amount;
use App\BookStore\Domain\Model\VO\Currency;
use App\BookStore\Domain\Model\VO\Money;
use App\BookStore\Domain\Model\VO\Summary;
use App\BookStore\Domain\Model\VO\Title;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use PlanB\Framework\Doctrine\Fixtures\UseCaseFixture;

final class BookFixture extends UseCaseFixture implements DependentFixtureInterface
{
    public function getDependencies()
    {
        return [
            TagFixture::class,
            AuthorFixture::class,
        ];
    }

    public function loadData(): void
    {
        $this->createMany(150, function (int $key) {
            $author = $this->getReference(Author::class.'_'.rand(0, 14));

            $input = new BookInput();
            $input->title = new Title($this->faker->sentence(3));
            $input->author = $author;
            $input->summary = new Summary($this->faker->text());
            $input->price = new Money(...[
                new Amount($this->faker->numberBetween(10, 100)),
                new Currency('EUR'),
            ]);

            $tags = $this->getSomeReferences(Tag::class, 2, 4);
            $input->tags = new TagListInput($tags);
            $command = new CreateBook($input);

            return $this->handle($command);
        });
    }

    protected function allowedEnvironments(): array
    {
        return ['dev'];
    }
}
