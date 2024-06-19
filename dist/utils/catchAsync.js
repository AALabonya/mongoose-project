"use strict";
//asynchronous code ar jonno akta higher order function create kori
Object.defineProperty(exports, "__esModule", { value: true });
//jehetu akta function receive (fn) korse abong arekta funtion return korse tai aita k higer order function bole
const catchAsync = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => next(err));
    };
};
exports.default = catchAsync;
