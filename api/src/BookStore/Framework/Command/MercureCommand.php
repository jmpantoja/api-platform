<?php

namespace App\BookStore\Framework\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;

#[AsCommand(
    name: 'app:mercure',
    description: 'Add a short description for your command',
)]
class MercureCommand extends Command
{
    private HubInterface $hub;

    public function __construct(HubInterface $userRepository)
    {
        parent::__construct(null);

        $this->hub = $userRepository;
    }

    protected function configure(): void
    {
        $this
            ->addArgument('name', InputArgument::REQUIRED, 'the name');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);




        $update = new Update(
            'kokoloco',
            json_encode(['name' => $input->getArgument('name')])
        );

        $this->hub->publish($update);

        return Command::SUCCESS;
    }
}
