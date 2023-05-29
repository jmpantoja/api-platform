<?php

declare(strict_types=1);

namespace App\Auth\Framework\Doctrine\Repository;

use App\Auth\Domain\Model\User;
use App\Auth\Domain\Model\UserId;
use App\Auth\Domain\Repository\UserRepository;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\User\UserInterface;

final class UserDoctrineRepository extends ServiceEntityRepository implements UserRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    public function save(User $user): void
    {
        $this->_em->persist($user);
    }

    public function delete(UserId $userId): void
    {
        $user = $this->_em->getReference(User::class, $userId);
        $this->_em->remove($user);
    }

    public function findById(UserId $userId): ?User
    {
        return $this->find($userId);
    }

    public function loadUserByIdentifier(string $identifier): ?UserInterface
    {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQueryBuilder()
            ->select('U')
            ->from(User::class, 'U')
            ->where('U.username = :identifier')
            ->orWhere('U.email = :identifier')
            ->setParameter('identifier', $identifier)
            ->getQuery()
        ;

        return $query->getOneOrNullResult();
    }
}
