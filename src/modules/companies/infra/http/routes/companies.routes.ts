import { Router } from 'express';
import CompaniesController from '../controllers/CompaniesController';
import { celebrate, Joi, Segments } from 'celebrate';
const router = Router();
const companiesController = new CompaniesController();

router.get('/', companiesController.list);

router.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  companiesController.show,
);

router.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required().min(2).max(255),
      email: Joi.string().email().required().min(6).max(255),
      document_number: Joi.string().required().length(14),
      city_id: Joi.number().required(),
      street: Joi.string().required().max(255),
      neighborhood: Joi.string().required().min(2).max(255),
      address_number: Joi.string().required().max(4),
    },
  }),
  companiesController.create,
);

router.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().min(2).max(255),
      email: Joi.string().email().min(6).max(255),
      document_number: Joi.string().length(14),
      city_id: Joi.number(),
      street: Joi.string().max(255),
      neighborhood: Joi.string().min(2).max(255),
      address_number: Joi.string().max(4),
    },
  }),
  companiesController.update,
);

router.delete(
  '/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().uuid().required() } }),
  companiesController.destroy,
);

export default router;
