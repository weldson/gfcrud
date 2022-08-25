import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import EmployeesController from '../controllers/EmployeesController';

const router = Router();
const employeesController = new EmployeesController();

router.get('/', employeesController.list);

router.get(
  '/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().uuid().required() } }),
  employeesController.show,
);

router.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required().min(2).max(255),
      document_number: Joi.string().required().length(11),
      city_id: Joi.number().required(),
      street: Joi.string().required().max(255),
      neighborhood: Joi.string().required().min(2).max(255),
      address_number: Joi.string().required().max(4),
    },
  }),
  employeesController.create,
);

router.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().min(2).max(255),
      document_number: Joi.string().length(11),
      city_id: Joi.number(),
      street: Joi.string().max(255),
      neighborhood: Joi.string().min(2).max(255),
      address_number: Joi.string().max(4),
    },
  }),
  employeesController.update,
);

router.delete(
  '/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().uuid().required() } }),
  employeesController.destroy,
);

export default router;
