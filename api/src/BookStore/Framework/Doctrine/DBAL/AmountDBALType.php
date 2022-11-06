<?php

declare(strict_types=1);

namespace App\BookStore\Framework\Doctrine\DBAL;

use App\BookStore\Domain\Model\VO\Amount;
use PlanB\Framework\Doctrine\DBAL\Type\IntegerType;

final class AmountDBALType extends IntegerType
{
    public function getFQN(): string
    {
        return Amount::class;
    }

    public function getName(): string
    {
        return 'BookStore.Amount';
    }
}
