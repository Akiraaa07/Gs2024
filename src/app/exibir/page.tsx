'use client'

import React, { useState, useEffect } from 'react';
import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";

const UsersPage = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = parseInt(event.target.value);
    setUserId(isNaN(id) ? null : id);
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (userId === null) {
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`http://localhost:8080/usuario/${userId}`);
        if (!res.ok) {
          throw new Error('Usuário não encontrado');
        }
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        setError('Usuário não encontrado');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center font-primary">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-3xl font-bold text-primary mb-4">Detalhes do Usuário</h1>
          <div className="mb-4">
            <label htmlFor="userId" className="block text-gray-700 font-bold mb-2">Digite o ID do Usuário:</label>
            <input
              type="number"
              id="userId"
              value={userId || ''}
              onChange={handleIdChange}
              placeholder="Ex: 1"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {loading && <p>Carregando...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {user && (
            <div>
              <p className="text-lg font-bold text-gray-800 mb-2">{user.NOME}</p>
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 mb-2">
                  <p className="text-sm text-gray-600">Email: {user.EMAIL}</p>
                </div>
                <div className="w-full sm:w-1/2 mb-2">
                  <p className="text-sm text-gray-600">Contato: {user.CONTATO}</p>
                </div>
                <div className="w-full sm:w-1/2 mb-2">
                  <p className="text-sm text-gray-600">CEP: {user.CEP}</p>
                </div>
                <div className="w-full sm:w-1/2 mb-2">
                  <p className="text-sm text-gray-600">Login: {user.LOGIN}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default UsersPage;