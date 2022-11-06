<?php

namespace App\BookStore\Framework\Command;

use App\Auth\Domain\Model\RoleList;
use App\Auth\Domain\Repository\UserRepository;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Security\Core\Role\RoleHierarchyInterface;

#[AsCommand(
    name: 'app:borrame',
    description: 'Add a short description for your command',
)]
class BorrameCommand extends Command
{
    private RoleHierarchyInterface $roleHierarchy;

    public function __construct(RoleHierarchyInterface $roleHierarchy)
    {
        parent::__construct(null);


        $this->roleHierarchy = $roleHierarchy;
    }

    protected function configure(): void
    {
//        $this
//            ->addArgument('name', InputArgument::REQUIRED, 'the name');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);


        $roles = [
            new RoleList(['122']),
            new RoleList(['abc'])
        ];

        dump(json_encode($roles));

        return Command::SUCCESS;
    }
}
