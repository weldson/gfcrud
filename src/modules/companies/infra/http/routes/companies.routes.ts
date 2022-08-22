import { Router } from 'express';
import CompaniesController from '../controllers/CompaniesController';

const router = Router();
const companiesController = new CompaniesController();

router.get('/', companiesController.list);

router.get('/:id', companiesController.show);

router.post('/', companiesController.create);

router.delete('/:id', companiesController.delete);

export default router;
