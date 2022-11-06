<?php

declare(strict_types=1);

namespace App\BookStore\Application;

use App\BookStore\Application\Input\TagInput;
use App\BookStore\Domain\Model\Tag;
use App\BookStore\Domain\Model\TagId;

final class UpdateTag
{
    private TagInput $input;
    private Tag $tag;

    public function __construct(TagId $tagId, TagInput $input)
    {
        $this->tagid = $tagId;
        $this->input = $input;
    }

    public function getInput(): TagInput
    {
        return $this->input;
    }

    public function getId(): TagId
    {
        return $this->tagid;
    }
}
