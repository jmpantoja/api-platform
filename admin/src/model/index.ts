import {BaseRecord} from "@refinedev/core";

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

export interface ITag extends BaseRecord {
  name: string
}

export interface IAuthor extends BaseRecord {
  '@id': string,
  name: {
    firstName: string,
    lastName: string
  }
}

export interface IBook extends BaseRecord {
  title: string
  author: IAuthor,
  price: Money
  summary: string
}

export interface Money {
  amount: number,
  currency: 'EUR' | 'DOL'
}

export interface FullName {
  firstName: string,
  lastName: string
}
