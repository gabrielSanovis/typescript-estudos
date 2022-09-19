import { useEffect, useState } from 'react';
import api from "./service/api";
import User from "./components/User"

interface IUser {
  nome: string,
  email?: string
}

function App() {


  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    const getUsers = async (): Promise<void> => {
      await api.get<IUser[]>("/users")
        .then(response => setUsers(response.data))
    }
    getUsers();
  }, [])
  return (
    <div>
      {users.map(user => <User key={user.email} user={user}/>)}
    </div>
  );
}

export default App;
