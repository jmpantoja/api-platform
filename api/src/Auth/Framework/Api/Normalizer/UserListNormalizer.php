<?php

declare(strict_types=1);

namespace App\Auth\Framework\Api\Normalizer;

use App\Auth\Application\Input\UserInput;
use App\Auth\Domain\Model\User;
use App\Auth\Domain\Model\UserListInput;
use PlanB\Framework\Api\Normalizer\EntityListNormalizer;

final class UserListNormalizer extends EntityListNormalizer
{
    public function supportsDenormalization($data, string $type, $format = null, array $context = []): bool
    {
        return UserListInput::class === $type;
    }

    protected function collect(array $data): UserListInput
    {
        return UserListInput::collect($data);
    }

    protected function itemFromIri(string $input, mixed $format, array $context): User
    {
        return $this->convert($input, User::class, $format, $context);
    }

    protected function itemFromArray(array $input, mixed $format, array $context): UserInput
    {
        return $this->convert($input, UserInput::class, $format, $context);
    }
}
