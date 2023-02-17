import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from '../enums/Category';
import { FlashCard } from './flashcards.entity';

@Entity()
export class CardCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: Category
  })
  category: Category;

  @ManyToOne(() => FlashCard, flashcard => flashcard.categories)
  flashcard: FlashCard;
}