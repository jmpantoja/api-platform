<?php

declare(strict_types=1);

namespace App\BookStore\Application;

use App\BookStore\Domain\Model\TagId;

final class DeleteTag
{
    private TagId $id;

    public function __construct(TagId $tagId)
    {
        $this->id = $tagId;
    }

    public function getTagId(): TagId
    {
        return $this->id;
    }
}
