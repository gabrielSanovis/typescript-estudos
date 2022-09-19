import React from "react";

interface IUser {
    nome: string,
    email?: string
}

interface IProps {
    user: IUser
    children?: React.ReactNode
}

const User: React.FC<IProps> = ({ user, children }) => {
    return (
        <div>
            <strong>Nome</strong> {user.nome} <br />
            <strong>Email</strong> {user.email} <br /><br />
        </div>
    );
}

export default User;