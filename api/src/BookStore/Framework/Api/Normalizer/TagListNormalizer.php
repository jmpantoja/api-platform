<?php

declare(strict_types=1);

namespace App\BookStore\Framework\Api\Normalizer;

use App\BookStore\Application\Input\TagInput;
use App\BookStore\Domain\Model\Tag;
use App\BookStore\Domain\Model\TagListInput;
use PlanB\Framework\Api\Normalizer\EntityListNormalizer;

final class TagListNormalizer extends EntityListNormalizer
{
    protected function collect(array $data): TagListInput
    {
        return TagListInput::collect($data);
    }

    public function supportsDenormalization($data, string $type, $format = null, array $context = []): bool
    {
        return TagListInput::class === $type;
    }

    protected function itemFromIri(string $input, mixed $format, array $context): Tag
    {
        return $this->convert($input, Tag::class, $format, $context);
    }

    protected function itemFromArray(array $input, mixed $format, array $context): TagInput
    {
        return $this->convert($input, TagInput::class, $format, $context);
    }
}
