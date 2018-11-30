import { Cardable } from './cardable';
import { Card } from './card';

export class Blog implements Cardable {
    _id: string;
    name: string;
    user: string;
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
    }) {
      this._id = obj._id;
      this.name = obj.name;
      this.user = obj.user;
      this.tags = obj.tags;
      this.ts = obj.ts;
      this.link = obj.link;
      this.favourite = obj.favourite;
    }

    flip() {
      this.favourite = !this.favourite;
    }

    toCard(): Card {
      return new Card(this.user, this.name, this.link,
        this.favourite, this.tags.toString(), this.ts);
    }
  }