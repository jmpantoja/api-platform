<?php

declare(strict_types=1);

namespace App\Auth\Framework\Doctrine\Fixtures;

use App\Auth\Application\CreateUser;
use App\Auth\Application\Input\UserInput;
use App\Auth\Domain\Model\RoleList;
use App\Auth\Domain\Model\VO\Email;
use App\Auth\Domain\Model\VO\Username;
use PlanB\Framework\Doctrine\Fixtures\UseCaseFixture;

final class UserFixture extends UseCaseFixture
{
    public function loadData(): void
    {
        $this->createRange(['editor', 'admin'], function (string $name) {
            $input = new UserInput();
            $input->username = new Username($name);
            $input->email = new Email("{$name}@prueba.local");

            $input->roles = RoleList::collect([
                strtoupper("ROLE_{$name}"),
            ]);

            $input->password = $name;

            $command = new CreateUser($input);

            return $this->handle($command);
        });
    }

    protected function allowedEnvironments(): array
    {
        return ['dev'];
    }
}
