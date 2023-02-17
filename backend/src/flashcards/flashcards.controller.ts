import { FlashCard } from "./flashcards.entity";
import { CardCategory } from "./categories.entity";
import { AppDataSource } from "../../index";
import { instanceToPlain, plainToInstance } from "class-transformer";
import { Request, Response } from 'express';
import { validationResult } from "express-validator/src/validation-result";
import { UpdateResult } from "typeorm";

class CardsController {

  public async getAll(req: Request, res: Response): Promise<Response> {
    let cards: FlashCard[];
    try {
      cards = await AppDataSource.getRepository(FlashCard).find({
        order: {
          date: 'ASC'
        }
      });
      cards = instanceToPlain(cards) as FlashCard[];
      return res.json(cards).status(200);
    } catch (error) {
      return res.json({error: "Internal Server Error"}).status(500);
    }
  }

  public async createCard(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    // create a new instance of flash card (different from normal object)
    let categories: CardCategory[] = [];

    for (let category of req.body.categories) {
      let newCategory = new CardCategory();
      newCategory.category = category;
      await AppDataSource.getRepository(CardCategory).save(newCategory);
      categories.push(newCategory);
    } 

    const newCard = new FlashCard();
    newCard.title = req.body.title;
    newCard.date = req.body.date;
    newCard.code = req.body.code;
    newCard.difficulty = req.body.difficulty;
    newCard.status = req.body.status;
    newCard.categories = categories;
    
    // save new card to DB
    let createdCard;
    try {
      createdCard = await AppDataSource.getRepository(FlashCard).save(newCard);
      createdCard = instanceToPlain(createdCard) as FlashCard;
      return res.json(createdCard).status(201); 
    } catch (error) {
      return res.json({error}).status(500);
    }

  }
  
  public async updateCard(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    // first, find the card
    let card: FlashCard | null;
    try {
      card = await AppDataSource.getRepository(FlashCard).findOne({
        where: {id: req.body.id}
      })

      if (!card) { 
        return res.json({error: 'card with given ID does not exist'}).status(404);
      }       
    } catch (error) {
      return res.json({error}).status(500);
    }

    // if found, update the card
    let updatedCard: UpdateResult;
    try {
      updatedCard = await AppDataSource.getRepository(FlashCard).update(
        req.body.id,
        plainToInstance(FlashCard, {
          status: req.body.status // only updating the status
        })
      )
      updatedCard = instanceToPlain(updatedCard) as UpdateResult;
      return res.json(updatedCard).status(200);
    } catch (error) {
      return res.json({error}).status(500);
    }

  }
};


export const cardsController = new CardsController();