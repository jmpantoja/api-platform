<?php

$finder = (new PhpCsFixer\Finder())
    ->in(__DIR__)
    ->exclude('var');

return (new PhpCsFixer\Config())
    ->setRules([
        '@PSR12' => true,
        '@PHP80Migration' => true,
        '@Symfony' => true,
        '@PhpCsFixer' => true,
        'align_multiline_comment' => ['comment_type' => 'all_multiline'],
        'array_indentation' => true,
        'array_syntax' => ['syntax' => 'short'],
        'backtick_to_shell_exec' => true,
        'braces' => true,
        'indentation_type' => true,
        'method_chaining_indentation' => true,
        'trim_array_spaces' => true,
        'php_unit_test_class_requires_covers' => false,
        'php_unit_method_casing' => ['case'=>'snake_case']
    ])
    ->setFinder($finder);
