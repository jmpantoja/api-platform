<?php

declare(strict_types=1);

namespace App\BookStore\Framework\Doctrine\Repository;

use App\BookStore\Domain\Model\Author;
use App\BookStore\Domain\Model\AuthorId;
use App\BookStore\Domain\Repository\AuthorRepository;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

final class AuthorDoctrineRepository extends ServiceEntityRepository implements AuthorRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Author::class);
    }

    public function save(Author $author): void
    {
        $this->_em->persist($author);
    }

    public function delete(AuthorId $authorId): void
    {
        $author = $this->_em->getReference(Author::class, $authorId);
        $this->_em->remove($author);
    }

    public function findById(AuthorId $authorId): ?Author
    {
        return $this->find($authorId);
    }
}
