import { Request, Response, Router } from 'express';
import { body, param, validationResult } from 'express-validator';
import CompaniesController from '../controllers/CompaniesController';

const router = Router();
const companiesController = new CompaniesController();

router.get('/', companiesController.list);

router.get(
  '/:id',
  param('id').isUUID().notEmpty(),
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  },
  companiesController.show,
);

router.post(
  '/',
  body('name').isString().notEmpty().isLength({ min: 2, max: 255 }),
  body('email').isEmail().notEmpty().isLength({ min: 8, max: 255 }),
  body('document_number').isNumeric().notEmpty().isLength({ min: 11, max: 11 }),
  body('city_id').isNumeric().notEmpty(),
  body('neighborhood').isString().notEmpty().isLength({ min: 1, max: 255 }),
  body('street').notEmpty().isLength({ max: 255 }),
  body('address_number').notEmpty().isLength({ max: 10 }),
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  },
  companiesController.create,
);

router.delete('/:id', companiesController.destroy);

export default router;
