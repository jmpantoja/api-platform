<?php

declare(strict_types=1);

namespace App\BookStore\Framework\Api\Normalizer;

use App\BookStore\Application\Input\AuthorInput;
use App\BookStore\Domain\Model\Author;
use App\BookStore\Domain\Model\AuthorListInput;
use PlanB\Framework\Api\Normalizer\EntityListNormalizer;

final class AuthorListNormalizer extends EntityListNormalizer
{
    public function supportsDenormalization($data, string $type, $format = null, array $context = []): bool
    {
        return AuthorListInput::class === $type;
    }

    protected function collect(array $data): AuthorListInput
    {
        return AuthorListInput::collect($data);
    }

    protected function itemFromIri(string $input, mixed $format, array $context): Author
    {
        return $this->convert($input, Author::class, $format, $context);
    }

    protected function itemFromArray(array $input, mixed $format, array $context): AuthorInput
    {
        return $this->convert($input, AuthorInput::class, $format, $context);
    }
}
