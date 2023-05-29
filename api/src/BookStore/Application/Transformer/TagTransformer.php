<?php

declare(strict_types=1);

namespace App\BookStore\Application\Transformer;

use App\BookStore\Application\Input\TagInput;
use App\BookStore\Domain\Model\Tag;

final class TagTransformer
{
    public function newInstance(TagInput $input): Tag
    {
        return new Tag($input->name, $input->books);
    }

    public function update(Tag $tag, TagInput $input): Tag
    {
        $tag->setName($input->name);
        if (!is_null($input->books)) {
            $tag->setBooks($input->books); //nullable
        }

        return $tag;
    }
}
