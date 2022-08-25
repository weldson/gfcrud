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
      name: Joi.string().uuid().required().length(250),
      document_number: Joi.string().required(),
      city_id: Joi.number().required(),
      street: Joi.string().required(),
      neighborhood: Joi.string().required(),
      address_number: Joi.string().required(),
    },
  }),
  employeesController.create,
);

// router.put('/:id', employeesController.update);

router.delete(
  '/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().uuid().required() } }),
  employeesController.destroy,
);

export default router;
