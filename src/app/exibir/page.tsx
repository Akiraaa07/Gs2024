'use client';

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";

// Mantenha o resto do código como está
import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  Nome: string;
  Email: string;
  Contato: string;
  Cep: string;
  Login: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/listar_usuarios');
        if (!res.ok) {
          throw new Error('Erro ao buscar usuários');
        }
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        setError('Erro ao buscar usuários. Por favor, tente novamente mais tarde.');
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {/* Inclua o NavBar aqui */}
      <NavBar />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-3xl font-bold text-primary mb-4">Usuários Cadastrados</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <ul>
            {users.map((user) => (
              <li key={user.id} className="mb-4">
                <p className="text-lg text-gray-800 font-bold">Nome: {user.Nome}</p>
                <p className="text-gray-700">Cargo: {user.Email}</p>
                <p className="text-gray-700">Email: {user.Contato}</p>
                <p className="text-gray-700">Contato: {user.Cep}</p>
                <p className="text-gray-700">Empresa: {user.Login}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Inclua o FooterSection aqui */}
      <FooterSection />
    </div>
  );
};

export default UsersPage;
