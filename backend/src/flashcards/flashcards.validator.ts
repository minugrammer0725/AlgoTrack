import { body, CustomValidator, ValidationChain } from 'express-validator';
import { Difficulty } from '../enums/Difficulty';
import { Status } from '../enums/Status';
import { Category } from '../enums/Category';

const isValidCategory: CustomValidator = (categories) => {
  // return true if every value from category is in enum
  if (!categories.length) return false;
  const validCategories = Object.values(Category);
  for (let category of categories) {
    if (!validCategories.includes(category)) {
      return false;
    }
  }
  return true;
};

export const createValidator:ValidationChain[] = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('Problem title is required')
    .trim()
    .isString()
    .withMessage('Title must be in text format'),
  body('date')
    .not()
    .isEmpty()
    .withMessage('Date field is required')
    .isString()
    .withMessage('Date must be in string format'),
  body('code')
    .not()
    .isEmpty()
    .withMessage('Code field is required')
    .isString()
    .withMessage('Code must be in text format'),
  body('difficulty')
    .trim()
    .isIn(Object.values(Difficulty))
    .withMessage('Invalid Difficulty Enum'),
  body('status')
    .trim()
    .isIn(Object.values(Status))
    .withMessage('Invalid Status Enum'),
  body('categories')
    .custom(isValidCategory)
    .withMessage('You must select at least one valid category')
];

export const updateValidator = [
  body('id')  
    .not()
    .isEmpty()
    .withMessage('card id is required')
    .trim()
    .isString()
    .withMessage('id must be a string(uuid)'),
  body('status')
    .trim()
    .isIn(Object.values(Status))
    .withMessage('Invalid Status Enum')
];
