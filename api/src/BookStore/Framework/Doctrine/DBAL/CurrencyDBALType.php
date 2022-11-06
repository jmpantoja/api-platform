<?php

declare(strict_types=1);

namespace App\BookStore\Framework\Doctrine\DBAL;

use App\BookStore\Domain\Model\VO\Currency;
use PlanB\Framework\Doctrine\DBAL\Type\StringType;

final class CurrencyDBALType extends StringType
{
    public function getFQN(): string
    {
        return Currency::class;
    }

    public function getName(): string
    {
        return 'BookStore.Currency';
    }
}
