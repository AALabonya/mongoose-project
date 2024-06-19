"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const userNameSchema = joi_1.default.object({
    firstName: joi_1.default.string()
        .min(3)
        .max(20)
        .trim()
        .regex(/^[A-Z][a-z]*$/, 'First name must start with an uppercase letter')
        .messages({
        'string.min': "First Name can't be less than 3 characters",
        'string.max': "First Name can't be greater than 20 characters",
        'string.pattern.name': 'First Name must start with an uppercase letter and contain only alphabetic characters',
    })
        .required(),
    lastName: joi_1.default.string()
        .min(3)
        .max(20)
        .trim()
        .regex(/^[a-zA-Z]+$/, 'Alphabetic characters only')
        .messages({
        'string.min': "Last Name can't be less than 3 characters",
        'string.max': "Last Name can't be greater than 20 characters",
        'string.pattern.name': 'Last Name must contain only alphabetic characters',
    })
        .required(),
});
exports.studentSchema = joi_1.default.object({
    name: userNameSchema.required(),
    age: joi_1.default.number().required(),
    email: joi_1.default.string()
        .email({ tlds: { allow: false } })
        .messages({
        'string.email': '{#value} is not a valid email',
    })
        .required(),
    gender: joi_1.default.string()
        .valid('male', 'female')
        .messages({
        'any.only': '{#value} is not valid. Gender can be male or female',
    })
        .required(),
    dateOfBirth: joi_1.default.string().trim(),
    contact: joi_1.default.string().trim(),
    avatar: joi_1.default.string().trim(),
    bloodGroup: joi_1.default.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'),
    presentAddress: joi_1.default.string().trim(),
});
