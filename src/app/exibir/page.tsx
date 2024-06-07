'use client'

import React, { useState, useEffect } from 'react';
import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";

const UsersPage = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [updatedUser, setUpdatedUser] = useState<any>(null);
  const [message, setMessage] = useState<string | null>(null);

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
      setMessage(null);
      try {
        const res = await fetch(`http://localhost:8080/usuario/${userId}`);
        if (!res.ok) {
          throw new Error('Usuário não encontrado');
        }
        const data = await res.json();
        setUser(data);
        setUpdatedUser(data); // Inicializa o estado editável com os dados carregados
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

  const handleDelete = async () => {
    if (userId === null) {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`http://localhost:8080/usuario/${userId}`, {
        method: 'DELETE'
      });
      if (!res.ok) {
        throw new Error('Erro ao excluir usuário');
      }
      setMessage('Usuário excluído com sucesso.');
      setUser(null);
      setUpdatedUser(null);
      setEditMode(false);
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
      setError('Erro ao excluir usuário. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUpdatedUser((prevUser: any) => ({
      ...prevUser,
      [id]: value
    }));
  };

  const handleSave = async () => {
    if (!userId || !updatedUser) {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`http://localhost:8080/usuario/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
      if (!res.ok) {
        throw new Error('Erro ao atualizar usuário');
      }
      const data = await res.json();
      setMessage('Usuário atualizado com sucesso.');
      setUser(data);
      setEditMode(false);
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      setError('Usuário atualizado com sucesso.');
    } finally {
      setLoading(false);
    }
  };

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
          {error && <p className="text-green-500">{error}</p>}
          {message && <p className="text-green-500">{message}</p>}

          {user && (
            <div>
              <div className="mb-4">
                <label htmlFor="NOME" className="block text-gray-700 font-bold mb-2">Nome Completo:</label>
                <input
                  type="text"
                  id="NOME"
                  value={updatedUser?.NOME || ''}
                  onChange={handleChange}
                  readOnly={!editMode}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!editMode ? 'bg-gray-200' : ''}`}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="EMAIL" className="block text-gray-700 font-bold mb-2">Email:</label>
                <input
                  type="text"
                  id="EMAIL"
                  value={updatedUser?.EMAIL || ''}
                  onChange={handleChange}
                  readOnly={!editMode}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!editMode ? 'bg-gray-200' : ''}`}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="CONTATO" className="block text-gray-700 font-bold mb-2">Contato:</label>
                <input
                  type="text"
                  id="CONTATO"
                  value={updatedUser?.CONTATO || ''}
                  onChange={handleChange}
                  readOnly={!editMode}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!editMode ? 'bg-gray-200' : ''}`}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="CEP" className="block text-gray-700 font-bold mb-2">CEP:</label>
                <input
                  type="text"
                  id="CEP"
                  value={updatedUser?.CEP || ''}
                  onChange={handleChange}
                  readOnly={!editMode}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!editMode ? 'bg-gray-200' : ''}`}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="LOGIN" className="block text-gray-700 font-bold mb-2">Login:</label>
                <input
                  type="text"
                  id="LOGIN"
                  value={updatedUser?.LOGIN || ''}
                  onChange={handleChange}
                  readOnly={!editMode}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!editMode ? 'bg-gray-200' : ''}`}
                />
              </div>
              <div className="flex space-x-4">
                {!editMode && (
                  <button
                    onClick={() => setEditMode(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300"
                  >
                    Editar
                  </button>
                )}
                {editMode && (
                  <button
                    onClick={handleSave}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300"
                  >
                    Salvar
                  </button>
                )}
                {user && (
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300"
                  >
                    Excluir
                  </button>
                )}
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