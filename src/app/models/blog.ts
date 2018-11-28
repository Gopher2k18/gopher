export interface Blog {
    _id: string;
    name: string;
    user: string;
    tags: string[];
    ts: string;
    link: string;
    favourite: boolean;
  }