"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const student_controllers_1 = require("./student.controllers");
const validateRequest_1 = __importDefault(require("../../middlwares/validateRequest"));
const student_validation_1 = require("./student.validation");
const router = express_1.default.Router();
router.get('/:id', student_controllers_1.StudentControllers.getSingleStudent);
router.patch('/:id', (0, validateRequest_1.default)(student_validation_1.updateStudentValidationSchema), student_controllers_1.StudentControllers.updateStudent);
router.delete('/:id', student_controllers_1.StudentControllers.deleteStudent);
router.get('/', student_controllers_1.StudentControllers.getAllStudents);
exports.StudentRoutes = router;
