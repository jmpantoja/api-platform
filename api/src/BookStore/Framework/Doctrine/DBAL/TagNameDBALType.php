<?php

declare(strict_types=1);

namespace App\BookStore\Framework\Doctrine\DBAL;

use App\BookStore\Domain\Model\VO\TagName;
use PlanB\Framework\Doctrine\DBAL\Type\StringType;

final class TagNameDBALType extends StringType
{
    public function getFQN(): string
    {
        return TagName::class;
    }

    public function getName(): string
    {
        return 'BookStore.TagName';
    }
}
