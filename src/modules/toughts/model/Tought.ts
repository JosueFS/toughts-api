import { v4 as uuid } from 'uuid';

class Tought {
  id?: string;
  message: string;
  author?: {
    id: string;
    name: string;
  };
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Tought };
