
import express from 'express';

import validateRequest from '../../middlwares/validateRequest';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post(
    '/login',
    validateRequest(AuthValidation.loginValidationSchema)
  );
router.get('/', AdminControllers.getAllAdmins);

router.get('/:id', AdminControllers.getSingleAdmin);

router.patch(
  '/:id',
  validateRequest(updateAdminValidationSchema),
  AdminControllers.updateAdmin,
);

router.delete('/:adminId', AdminControllers.deleteAdmin);

export const AdminRoutes = router;