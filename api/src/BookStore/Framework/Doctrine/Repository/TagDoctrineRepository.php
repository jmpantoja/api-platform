<?php

declare(strict_types=1);

namespace App\BookStore\Framework\Doctrine\Repository;

use App\BookStore\Domain\Model\Tag;
use App\BookStore\Domain\Model\TagId;
use App\BookStore\Domain\Repository\TagRepository;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

final class TagDoctrineRepository extends ServiceEntityRepository implements TagRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Tag::class);
    }

    public function save(Tag $tag): void
    {
        $this->_em->persist($tag);
    }

    public function delete(TagId $tagId): void
    {
        $tag = $this->_em->getReference(Tag::class, $tagId);
        $this->_em->remove($tag);
    }

    public function findById(TagId $tagId): ?Tag
    {
        return $this->find($tagId);
    }
}
