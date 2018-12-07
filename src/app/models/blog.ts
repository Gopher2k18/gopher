import { Cardable } from './cardable';
import { Card } from './card';

export class Blog implements Cardable {
  _id: string;
  name: string;
  user: string;
  content: string;
  tags: string[];
  ts: string;
  link: string;
  favourite: boolean;

  constructor(obj: {
    _id: string;
    name: string;
    user: string;
    tags: string[];
    ts: string;
    link: string;
    favourite: boolean;
    content: string;
  }) {
    this._id = obj._id;
    this.name = obj.name;
    this.user = obj.user;
    this.tags = obj.tags.map((val, ind, arr) => {
      return val.toLocaleLowerCase();
    });
    this.ts = obj.ts;
    this.link = obj.link;
    this.favourite = obj.favourite;
    this.content = obj.content;
  }

  flip() {
    this.favourite = !this.favourite;
  }

  toCard(): Card {
    return new Card(this.name, this.content, this.link,
      this.favourite, `Tags: ${this.tags.toString()}`, this.ts, 'conf', this.tags);
  }
}
