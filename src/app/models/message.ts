import { Cardable } from './cardable';
import { Card } from './card';


export class Message implements Cardable {
  _id: string;
  user: string;
  message: string;
  channel: string;
  location: string;
  tags: string[];
  time_send: string;
  favourite: boolean;
  link: string;

  constructor(obj: {
    _id: string,
    user: string,
    message: string,
    channel: string,
    location: string,
    tags: string[],
    time_send: string,
    favourite: boolean,
    link: string
  }) {
    this._id = obj._id;
    this.user = obj.user;
    this.message = obj.message;
    this.channel = obj.channel;
    this.location = obj.location;
    this.tags = obj.tags;
    this.time_send = obj.time_send;
    this.favourite = false;
    this.link = obj.link;
  }

  flip() {
    this.favourite = !this.favourite;
  }

  toCard(): Card {
    return new Card(this.channel, `${this.user}: ${this.message}`, this.link,
      this.favourite, `Keyword: ${this.tags.toString()}`, this.time_send, 'slack', [this.channel]);
  }
}
