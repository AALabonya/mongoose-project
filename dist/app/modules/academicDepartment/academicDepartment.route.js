"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepartmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlwares/validateRequest"));
const academicDepartment_controllers_1 = require("./academicDepartment.controllers");
const academicDepartment_validation_1 = require("./academicDepartment.validation");
const router = express_1.default.Router();
router.get('/:departmentId', academicDepartment_controllers_1.AcademicDepartmentControllers.getSingleAcademicDepartment);
router.post('/create-academic-department', (0, validateRequest_1.default)(academicDepartment_validation_1.AcademicDepartmentValidation.createAcademicDepartmentValidationSchema), academicDepartment_controllers_1.AcademicDepartmentControllers.createAcademicDepartment);
router.patch('/:departmentId', (0, validateRequest_1.default)(academicDepartment_validation_1.AcademicDepartmentValidation.updatedAcademicDepartmentValidationSchema), academicDepartment_controllers_1.AcademicDepartmentControllers.updateAcademicDepartment);
router.get('/', academicDepartment_controllers_1.AcademicDepartmentControllers.getAllAcademicDepartment);
exports.AcademicDepartmentRoutes = router;
