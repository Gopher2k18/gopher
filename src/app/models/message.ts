export interface Message {
  id: number;
  user: string;
  message: string;
  channel: string;
  location: string;
  tags: string[];
  time_send: string;
  favourite: boolean;
}
