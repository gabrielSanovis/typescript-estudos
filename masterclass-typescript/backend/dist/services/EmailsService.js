"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailService {
    sendMail({ to, message }) {
        console.log(`Email enviado ${to.nome}: ${message.subject}`);
    }
}
exports.default = EmailService;
