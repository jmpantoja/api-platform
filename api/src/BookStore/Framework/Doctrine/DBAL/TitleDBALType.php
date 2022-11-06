<?php

declare(strict_types=1);

namespace App\BookStore\Framework\Doctrine\DBAL;

use App\BookStore\Domain\Model\VO\Title;
use PlanB\Framework\Doctrine\DBAL\Type\StringType;

final class TitleDBALType extends StringType
{
    public function getFQN(): string
    {
        return Title::class;
    }

    public function getName(): string
    {
        return 'BookStore.Title';
    }
}
