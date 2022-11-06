<?php

declare(strict_types=1);

namespace App\Auth\Application\Input;

use App\Auth\Domain\Model\RoleList;
use App\Auth\Domain\Model\UserId;
use App\Auth\Domain\Model\VO\Email;
use App\Auth\Domain\Model\VO\Username;

final class UserInput
{
    public ?UserId $id = null;
    public Username $username;
    public Email $email;
    public RoleList $roles;
    public string $password;
}
