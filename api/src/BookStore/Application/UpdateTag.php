<?php

declare(strict_types=1);

namespace App\BookStore\Application;

use App\BookStore\Application\Input\TagInput;
use App\BookStore\Domain\Model\TagId;

final class UpdateTag
{
    private TagInput $input;
    private TagId $tagId;

    public function __construct(TagId $tagId, TagInput $input)
    {
        $this->tagId = $tagId;
        $this->input = $input;
    }

    public function getInput(): TagInput
    {
        return $this->input;
    }

    public function getId(): TagId
    {
        return $this->tagId;
    }
}
