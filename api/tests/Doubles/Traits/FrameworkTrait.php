<?php

namespace App\Tests\Doubles\Traits;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use League\Tactician\CommandBus;
use PlanB\Domain\Model\Entity;
use PlanB\Domain\Model\EntityId;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;

trait FrameworkTrait
{
    private function makeIt(string $className, mixed ...$arguments): object
    {
        return new $className(...$arguments);
    }

    private function makeInput(string $type, mixed $data, string $format = null, array $context = [])
    {
        /** @var DenormalizerInterface $serializer */
        $serializer = $this->getContainer()->get('serializer');

        return $serializer->denormalize($data, $type, $format, $context);
    }

    private function findEntity(string $repositoryName, EntityId $id): ?Entity
    {
        $repository = $this->getContainer()->get($repositoryName);

        return $repository->findById($id);
    }

    private function findEntityId(string $repositoryName): EntityId
    {
        /** @var ServiceEntityRepository $repository */
        $repository = $this->getContainer()->get($repositoryName);

        return $repository->findOneBy([])->getId();
    }

    private function handle(object $command): ?EntityId
    {
        $contanier = $this->getContainer();

        /** @var CommandBus $commandBus */
        $commandBus = $contanier->get('tactician.commandbus');

        $entity = $commandBus->handle($command);

        return $entity instanceof Entity ? $entity->getId() : null;
    }
}
