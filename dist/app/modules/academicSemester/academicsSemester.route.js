"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterRoutes = void 0;
const express_1 = __importDefault(require("express"));
const academicsSemester_controllers_1 = require("./academicsSemester.controllers");
const academicSemester_validation_1 = require("./academicSemester.validation");
const validateRequest_1 = __importDefault(require("../../middlwares/validateRequest"));
const router = express_1.default.Router();
router.get('/:academicId', academicsSemester_controllers_1.AcademicsSemesterControllers.getSingleAcademicsSemester);
router.post('/create-academic-semester', (0, validateRequest_1.default)(academicSemester_validation_1.AcademicSemesterValidation.createAcademicSemesterValidationSchema), academicsSemester_controllers_1.AcademicsSemesterControllers.createAcademicsSemester);
router.patch('/:academicId', (0, validateRequest_1.default)(academicSemester_validation_1.AcademicSemesterValidation.updateAcademicSemesterValidationSchema), academicsSemester_controllers_1.AcademicsSemesterControllers.updateAcademicSemester);
router.get('/', academicsSemester_controllers_1.AcademicsSemesterControllers.getAllAcademicsSemester);
exports.AcademicSemesterRoutes = router;
