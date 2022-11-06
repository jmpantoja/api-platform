<?php

declare(strict_types=1);

namespace App\Auth\Framework\Doctrine\DBAL;

use App\Auth\Domain\Model\VO\Email;
use PlanB\Framework\Doctrine\DBAL\Type\StringType;

final class EmailDBALType extends StringType
{
    public function getFQN(): string
    {
        return Email::class;
    }

    public function getName(): string
    {
        return 'Auth.Email';
    }
}
