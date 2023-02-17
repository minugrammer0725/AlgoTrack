// entity -> data model (Class) 
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Difficulty } from '../enums/Difficulty';
import { Status } from '../enums/Status';
import { CardCategory } from './categories.entity';

// this class will never be initialized
// typeORM uses decorators to identify entities
@Entity()
export class FlashCard {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  title: string;

  @Column({
    type: 'varchar', 
    length: 255
  })
  date: string;

  @Column({type: 'longtext'})
  code: string;

  @Column({
    type: 'enum',
    enum: Difficulty,
    default: Difficulty.easy
  })
  difficulty: Difficulty;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.todo
  })
  status: Status;

  @OneToMany(() => CardCategory, cardcategory => cardcategory.flashcard)
  categories: CardCategory[];
};
