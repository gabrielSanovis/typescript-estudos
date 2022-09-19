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
const EmailsService_1 = __importDefault(require("../services/EmailsService"));
const users = [
    { nome: "Gabriel", email: "gabriel@gmail.com" },
    { nome: "Caua", email: "caua@gmail.com" },
    { nome: "Barbosa", email: "barbosa@gmail.com" },
    { nome: "Santos", email: "santos@gmail.com" },
];
exports.default = {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json(users);
        });
    },
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const emailService = new EmailsService_1.default();
            for (let user of users) {
                emailService.sendMail({ to: user, message: { subject: "Bem-vindo ao sistema", body: "Bem-vindo" } });
            }
            return res.send();
        });
    }
};
