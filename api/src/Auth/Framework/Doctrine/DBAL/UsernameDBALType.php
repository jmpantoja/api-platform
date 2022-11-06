<?php

declare(strict_types=1);

namespace App\Auth\Framework\Doctrine\DBAL;

use App\Auth\Domain\Model\VO\Username;
use PlanB\Framework\Doctrine\DBAL\Type\StringType;

final class UsernameDBALType extends StringType
{
    public function getFQN(): string
    {
        return Username::class;
    }

    public function getName(): string
    {
        return 'Auth.Username';
    }
}
