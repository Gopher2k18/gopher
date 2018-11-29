import { Cardable } from './cardable';
import { Card } from './card';


export class Message implements Cardable {
  private_id: string;
  user: string;
  message: string;
  channel: string;
  location: string;
  tags: string[];
  time_send: string;
  favourite: boolean;

  constructor(obj: {
    private_id: string,
    user: string,
    message: string,
    channel: string,
    location: string,
    tags: string[],
    time_send: string,
    favourite: boolean
  }) {
    this.private_id = obj.private_id;
    this.user = obj.user;
    this.message = obj.message;
    this.channel = obj.channel;
    this.location = obj.location;
    this.tags = obj.tags;
    this.time_send = obj.time_send;
    this.favourite = obj.favourite;
  }

  flip() {
    this.favourite = !this.favourite;
  }

  toCard(): Card {
    return new Card(this.channel, this.message,
      this.favourite, this.tags.toString(), this.time_send);
  }
}
