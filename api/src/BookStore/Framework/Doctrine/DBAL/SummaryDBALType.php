<?php

declare(strict_types=1);

namespace App\BookStore\Framework\Doctrine\DBAL;

use App\BookStore\Domain\Model\VO\Summary;
use PlanB\Framework\Doctrine\DBAL\Type\StringType;

final class SummaryDBALType extends StringType
{
    public function getFQN(): string
    {
        return Summary::class;
    }

    public function getName(): string
    {
        return 'BookStore.Summary';
    }
}
