<?php

declare(strict_types=1);

namespace App\BookStore\Framework\Api\Normalizer;

use App\BookStore\Application\Input\BookInput;
use App\BookStore\Domain\Model\Book;
use App\BookStore\Domain\Model\BookListInput;
use PlanB\Framework\Api\Normalizer\EntityListNormalizer;

final class BookListNormalizer extends EntityListNormalizer
{
    protected function collect(array $data): BookListInput
    {
        return BookListInput::collect($data);
    }

    public function supportsDenormalization($data, string $type, $format = null, array $context = []): bool
    {
        return BookListInput::class === $type;
    }

    protected function itemFromIri(string $input, mixed $format, array $context): Book
    {
        return $this->convert($input, Book::class, $format, $context);
    }

    protected function itemFromArray(array $input, mixed $format, array $context): BookInput
    {
        return $this->convert($input, BookInput::class, $format, $context);
    }
}
