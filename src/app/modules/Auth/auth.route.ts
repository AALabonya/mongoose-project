
import express from 'express';

import validateRequest from '../../middlwares/validateRequest';
import { AuthValidation } from './auth.validation';
import { AuthControllers } from './auth.controller';

const router = express.Router();

router.post(
    '/login',
    validateRequest(AuthValidation.loginValidationSchema),
    AuthControllers.loginUser
  );
// router.get('/', AdminControllers.getAllAdmins);

// router.get('/:id', AdminControllers.getSingleAdmin);

// router.patch(
//   '/:id',
//   validateRequest(updateAdminValidationSchema),
//   AdminControllers.updateAdmin,
// );

// router.delete('/:adminId', AdminControllers.deleteAdmin);

export const AuthRoutes = router;