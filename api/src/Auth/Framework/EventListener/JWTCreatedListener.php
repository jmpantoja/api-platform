<?php

declare(strict_types=1);

namespace App\Auth\Framework\EventListener;

use App\Auth\Domain\Model\User;
use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;
use Symfony\Component\Security\Core\Role\RoleHierarchyInterface;

final class JWTCreatedListener
{

    private RoleHierarchyInterface $roleHierarchy;

    public function __construct(RoleHierarchyInterface $roleHierarchy)
    {
        $this->roleHierarchy = $roleHierarchy;
    }

    public function onJWTCreated(JWTCreatedEvent $event)
    {


        $user = $event->getUser();
        if ( ! ($user instanceof User)) {
            return;
        }

        $data = $event->getData();
        $data['username'] = (string)$user->getUsername();
        $data['email'] = (string)$user->getEmail();

        $data['roles'] = $this->roleHierarchy->getReachableRoleNames($data['roles']);
//
//        $data = [
//            ...$event->getData(),
//            'username' => (string)$user->getUsername(),
//            'email' => (string)$user->getEmail(),
//        ];

        $event->setData($data);
    }
}
