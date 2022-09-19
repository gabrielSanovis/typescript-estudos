import { Request, Response } from "express";
import EmailService from "../services/EmailsService";

const users = [
    { nome: "Gabriel", email: "gabriel@gmail.com" },
    { nome: "Caua", email: "caua@gmail.com" },
    { nome: "Barbosa", email: "barbosa@gmail.com" },
    { nome: "Santos", email: "santos@gmail.com" },
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },
    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        for(let user of users) {
            emailService.sendMail({to:user, message:{ subject: "Bem-vindo ao sistema", body: "Bem-vindo" }})
        }
        return res.send();

    }

}