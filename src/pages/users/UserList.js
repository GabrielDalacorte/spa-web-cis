import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8080/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      toast.error('Erro ao buscar usuários');
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/users/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success('Usuário deletado com sucesso');
        fetchUsers();
      } else {
        toast.error('Erro ao deletar usuário');
      }
    } catch (error) {
      toast.error('Erro ao deletar usuário');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">Lista de Usuários</h1>
        <button
          onClick={() => navigate('/user')}
          className="mb-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Voltar para Criar Usuário
        </button>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Username</th>
              <th className="py-2 px-4 border-b">Nome</th>
              <th className="py-2 px-4 border-b">Sobrenome</th>
              <th className="py-2 px-4 border-b">Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.ID}>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.username}</td>
                <td className="py-2 px-4 border-b">{user.first_name}</td>
                <td className="py-2 px-4 border-b">{user.last_name}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => deleteUser(user.ID)}
                    className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
