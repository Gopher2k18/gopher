export interface Message {
  id: number;
  user: string;
  message: string;
  channel: string;
  tags: string[];
  time_send: string;
  
}
