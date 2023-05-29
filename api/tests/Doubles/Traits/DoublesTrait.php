<?php

namespace App\Tests\Doubles\Traits;

use App\Auth\Domain\Model\User;
    use App\Auth\Domain\Model\UserList;
    use App\Auth\Domain\Model\UserListInput;
    use App\Auth\Domain\Model\VO\Email;
    use App\Auth\Domain\Model\VO\Role;
    use App\Auth\Domain\Model\VO\Username;
    use App\BookStore\Domain\Model\Author;
    use App\BookStore\Domain\Model\AuthorList;
    use App\BookStore\Domain\Model\AuthorListInput;
    use App\BookStore\Domain\Model\Book;
    use App\BookStore\Domain\Model\BookList;
    use App\BookStore\Domain\Model\BookListInput;
    use App\BookStore\Domain\Model\Tag;
    use App\BookStore\Domain\Model\TagList;
    use App\BookStore\Domain\Model\TagListInput;
    use App\BookStore\Domain\Model\VO\Amount;
    use App\BookStore\Domain\Model\VO\Currency;
    use App\BookStore\Domain\Model\VO\Fullname;
    use App\BookStore\Domain\Model\VO\Money;
    use App\BookStore\Domain\Model\VO\Summary;
    use App\BookStore\Domain\Model\VO\TagName;
    use App\BookStore\Domain\Model\VO\Title;
    use App\Tests\Doubles\Auth\Domain\Model\UserDouble;
    use App\Tests\Doubles\Auth\Domain\Model\UserListDouble;
    use App\Tests\Doubles\Auth\Domain\Model\UserListInputDouble;
    use App\Tests\Doubles\Auth\Domain\Model\VO\EmailDouble;
    use App\Tests\Doubles\Auth\Domain\Model\VO\RoleDouble;
    use App\Tests\Doubles\Auth\Domain\Model\VO\UsernameDouble;
    use App\Tests\Doubles\BookStore\Domain\Model\AuthorDouble;
    use App\Tests\Doubles\BookStore\Domain\Model\AuthorListDouble;
    use App\Tests\Doubles\BookStore\Domain\Model\AuthorListInputDouble;
    use App\Tests\Doubles\BookStore\Domain\Model\BookDouble;
    use App\Tests\Doubles\BookStore\Domain\Model\BookListDouble;
    use App\Tests\Doubles\BookStore\Domain\Model\BookListInputDouble;
    use App\Tests\Doubles\BookStore\Domain\Model\TagDouble;
    use App\Tests\Doubles\BookStore\Domain\Model\TagListDouble;
    use App\Tests\Doubles\BookStore\Domain\Model\TagListInputDouble;
    use App\Tests\Doubles\BookStore\Domain\Model\VO\AmountDouble;
    use App\Tests\Doubles\BookStore\Domain\Model\VO\CurrencyDouble;
    use App\Tests\Doubles\BookStore\Domain\Model\VO\FullnameDouble;
    use App\Tests\Doubles\BookStore\Domain\Model\VO\MoneyDouble;
    use App\Tests\Doubles\BookStore\Domain\Model\VO\SummaryDouble;
    use App\Tests\Doubles\BookStore\Domain\Model\VO\TagNameDouble;
    use App\Tests\Doubles\BookStore\Domain\Model\VO\TitleDouble;
    use Prophecy\PhpUnit\ProphecyTrait;

    trait DoublesTrait
{
    use ProphecyTrait;

    private function doubleUser(callable $configure = null): User
    {
        $builder = new UserDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleUserList(callable $configure = null): UserList
    {
        $builder = new UserListDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleUserListInput(callable $configure = null): UserListInput
    {
        $builder = new UserListInputDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleAuthor(callable $configure = null): Author
    {
        $builder = new AuthorDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleAuthorList(callable $configure = null): AuthorList
    {
        $builder = new AuthorListDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleAuthorListInput(callable $configure = null): AuthorListInput
    {
        $builder = new AuthorListInputDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleBook(callable $configure = null): Book
    {
        $builder = new BookDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleBookList(callable $configure = null): BookList
    {
        $builder = new BookListDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleBookListInput(callable $configure = null): BookListInput
    {
        $builder = new BookListInputDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleTag(callable $configure = null): Tag
    {
        $builder = new TagDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleTagList(callable $configure = null): TagList
    {
        $builder = new TagListDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleTagListInput(callable $configure = null): TagListInput
    {
        $builder = new TagListInputDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleEmail(callable $configure = null): Email
    {
        $builder = new EmailDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleRole(callable $configure = null): Role
    {
        $builder = new RoleDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleUsername(callable $configure = null): Username
    {
        $builder = new UsernameDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleAmount(callable $configure = null): Amount
    {
        $builder = new AmountDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleCurrency(callable $configure = null): Currency
    {
        $builder = new CurrencyDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleFullname(callable $configure = null): Fullname
    {
        $builder = new FullnameDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleMoney(callable $configure = null): Money
    {
        $builder = new MoneyDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleSummary(callable $configure = null): Summary
    {
        $builder = new SummaryDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleTagName(callable $configure = null): TagName
    {
        $builder = new TagNameDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }

    private function doubleTitle(callable $configure = null): Title
    {
        $builder = new TitleDouble($this->prophesize(...), $configure);

        return $builder->reveal();
    }
}
