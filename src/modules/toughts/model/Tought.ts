import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { User } from '../../users/model/User';

@Entity('toughts')
class Tought {
  @PrimaryColumn()
  id?: string;

  @Column()
  message: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'id' })
  author: User;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Tought };
