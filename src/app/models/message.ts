export interface Message {
  _id: string;
  user: string;
  message: string;
  channel: string;
  location: string;
  tags: string[];
  time_send: string;
  favourite: boolean;
}
