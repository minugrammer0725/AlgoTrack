import { Router } from 'express';
import { cardsController } from './flashcards.controller';
import { createValidator, updateValidator } from './flashcards.validator';

const cardsRouter: Router = Router();

cardsRouter.get('/cards', cardsController.getAll);

cardsRouter.post('/cards', createValidator, cardsController.createCard);

cardsRouter.put('/cards', updateValidator, cardsController.updateCard);

export default cardsRouter;
