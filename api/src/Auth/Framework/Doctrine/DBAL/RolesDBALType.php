<?php

declare(strict_types=1);

namespace App\Auth\Framework\Doctrine\DBAL;

use App\Auth\Domain\Model\RoleList;
use PlanB\Framework\Doctrine\DBAL\Type\ArrayType;

final class RolesDBALType extends ArrayType
{
    public function getFQN(): string
    {
        return RoleList::class;
    }

    public function getName(): string
    {
        return 'Auth.Roles';
    }
}
