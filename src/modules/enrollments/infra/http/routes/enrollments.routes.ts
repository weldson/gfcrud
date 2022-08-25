import { Router } from 'express';
import EnrollmentsController from '../controllers/EnrollmentsController';
import { celebrate, Joi, Segments } from 'celebrate';

const router = Router();
const enrollmentsController = new EnrollmentsController();

router.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      company_id: Joi.string().required(),
      employe_id: Joi.string().required(),
    },
  }),
  enrollmentsController.create,
);

router.delete(
  '/',
  celebrate({
    [Segments.BODY]: {
      company_id: Joi.string().required(),
      employe_id: Joi.string().required(),
    },
  }),
  enrollmentsController.destroy,
);

export default router;
