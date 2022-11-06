<?php

declare(strict_types=1);

namespace App\BookStore\Domain\Repository;

use App\BookStore\Domain\Model\Tag;
use App\BookStore\Domain\Model\TagId;

interface TagRepository
{
    public function save(Tag $tag): void;

    public function delete(TagId $tag): void;

    public function findById(TagId $tagId): ?Tag;
}
