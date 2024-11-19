"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJwtPayload = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const User_1 = __importDefault(require("../model/User"));
const getJwtPayload = (token) => {
    if (!token) {
        return null;
    }
    return jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
};
exports.getJwtPayload = getJwtPayload;
const protect = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(404).json({
            success: false,
            message: "Page Not Found",
        });
    }
    const decodeData = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
    const user = yield User_1.default.findOne({ _id: decodeData._id });
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "Page Not Found",
        });
    }
    return next();
}));
exports.default = protect;