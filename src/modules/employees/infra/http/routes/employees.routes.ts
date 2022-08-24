import { Request, Response, Router } from 'express';
import { body, param, validationResult } from 'express-validator';
import EmployeesController from '../controllers/EmployeesController';

const router = Router();
const employeesController = new EmployeesController();

router.get('/', employeesController.list);

router.get(
  '/:id',
  param('id').isUUID().notEmpty(),
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  },
  employeesController.show,
);

router.post('/', employeesController.create);

// router.put('/:id', employeesController.update);

router.delete('/:id', employeesController.destroy);

export default router;
