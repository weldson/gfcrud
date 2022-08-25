import { Request, Response, Router } from 'express';
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
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      document_number: Joi.string().required(),
      city_id: Joi.number().required(),
      street: Joi.string().required(),
      neighborhood: Joi.string().required(),
      address_number: Joi.string().required(),
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
      name: Joi.string(),
      email: Joi.string().email(),
      document_number: Joi.string(),
      city_id: Joi.number(),
      street: Joi.string(),
      neighborhood: Joi.string(),
      address_number: Joi.string(),
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
