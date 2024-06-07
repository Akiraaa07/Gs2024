'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";

const UserGithubPage = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const fetchUserData = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(res.data);
      setError(null);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      setUserData(null);
      setError('Usuário não encontrado. Verifique o nome de usuário digitado.');
    }
  };

  useEffect(() => {
    if (username) {
      fetchUserData();
    } else {
      setUserData(null);
    }
  }, [username]);

  return (
    <React.Fragment>
      <NavBar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full font-primary">
          <h1 className="text-3xl font-bold text-primary mb-4">Consulta de Usuário do GitHub</h1>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Digite o nome de usuário:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Ex: octocat"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          {userData && (
            <div>
              <p className="text-lg text-gray-800 font-bold mb-2">Dados do Usuário:</p>
              <p className="text-gray-700"><strong>Nome:</strong> {userData.name ?? 'N/A'}</p>
              <p className="text-gray-700"><strong>Login:</strong> {userData.login ?? 'N/A'}</p>
              <p className="text-gray-700"><strong>Empresa:</strong> {userData.company ?? 'N/A'}</p>
              <p className="text-gray-700"><strong>Localização:</strong> {userData.location ?? 'N/A'}</p>
              <p className="text-gray-700"><strong>Blog:</strong> {userData.blog ? <a href={userData.blog} target="_blank" rel="noopener noreferrer">{userData.blog}</a> : 'N/A'}</p>
              <p className="text-gray-700"><strong>Seguidores:</strong> {userData.followers ?? 'N/A'}</p>
              <p className="text-gray-700"><strong>Seguindo:</strong> {userData.following ?? 'N/A'}</p>
              <p className="text-gray-700"><strong>Repositórios Públicos:</strong> {userData.public_repos ?? 'N/A'}</p>
            </div>
          )}
        </div>
      </div>
      <FooterSection />
    </React.Fragment>
  );
};

export default UserGithubPage;