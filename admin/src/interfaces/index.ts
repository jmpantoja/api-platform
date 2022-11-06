import {Entity} from "@planb/definitions/entity";

export interface ICategory {
  id: number;
  title: string;
}

export interface IPost {
  id: number;
  title: string;
  content: string;
  status: "published" | "draft" | "rejected";
  createdAt: string;
  category: { id: number };
}

export interface ITag extends Entity {
  name: string
}

export interface IAuthor extends Entity {
  name: {
    firstName: string,
    lastName: string
  }
}

export interface IBook extends Entity {
  title: string
  author: IAuthor,
  price: Money
}

export interface Money {
  amount: number,
  currency: 'EUR' | 'DOL'
}
