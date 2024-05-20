"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const student_controllers_1 = require("./student.controllers");
const router = express_1.default.Router();
//we call controller function
router.post('/create-student', student_controllers_1.StudentControllers.createStudent);
exports.StudentRoutes = router;
