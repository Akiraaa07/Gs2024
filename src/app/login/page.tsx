'use client';

import React, { useState } from 'react';
import axios from 'axios';
import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";

const LoginPage: React.FC = () => {
  // Define o estado inicial para os dados do formulário
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    contato: '',
    cep: '',      // Adicionado campo CEP
    nomeGit: '',  // Adicionado campo NomeGit
  });

  // Define o estado inicial para a mensagem de feedback
  const [message, setMessage] = useState('');

  // Função para lidar com a mudança nos campos de input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(''); // Reseta a mensagem antes de fazer a requisição

    // Formata os dados para corresponder à estrutura esperada pelo backend
    const formattedData = {
      NOME_COMPLETO: formData.nomeCompleto,
      EMAIL_CORPORATIVO: formData.email,
      CONTATO: formData.contato,
      CEP: formData.cep,          // Adicionado campo CEP
      NOME_GIT: formData.nomeGit, // Adicionado campo NomeGit
    };

    try {
      // Envia os dados para o backend
      const response = await axios.post('http://localhost:8080/usuario', formattedData);
      console.log('Dados enviados com sucesso:', response.data);
      setMessage('Dados enviados com sucesso!'); // Define a mensagem de sucesso
    } catch (error) {
      console.error('Erro ao enviar dados:', error);

      if (axios.isAxiosError(error)) {
        setMessage(`Erro ao enviar dados: ${error.message}`);

        if (error.response) {
          // O servidor respondeu com um código de status diferente de 2xx
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
          setMessage(`Erro ao enviar dados: ${error.response.data.message || error.response.status}`);
        } else if (error.request) {
          // A requisição foi feita, mas nenhuma resposta foi recebida
          console.error('Request data:', error.request);
          setMessage('Erro ao enviar dados: Nenhuma resposta recebida do servidor.');
        } else {
          // Alguma coisa aconteceu ao configurar a requisição que acionou um erro
          console.error('Error message:', error.message);
          setMessage(`Erro ao enviar dados: ${error.message}`);
        }
      } else {
        setMessage('Erro desconhecido ao enviar dados.');
      }
    }
  };

  // Renderiza a interface
  return (
    <>
      <NavBar />
      <section id="Login" className="h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="w-full md:w-1/2 px-8 py-12">
              <div className="text-center mb-8">
                <h1 className="text-blue-900 text-3xl mb-4">Faça login na</h1>
                <h2 className="text-blue-900 text-3xl mb-8">AquaPredict Technologies</h2>
                <p className="py-4 text-gray-700">Todo tipo de conteúdo. Tudo para te ajudar a crescer.</p>
              </div>
              <div className="px-8">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="nomeCompleto" className="block font-bold mb-1">Nome Completo:</label>
                    <input type="text" id="nomeCompleto" placeholder="Nome Completo" value={formData.nomeCompleto} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block font-bold mb-1">E-mail:</label>
                    <input type="email" id="email" placeholder="E-mail" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="contato" className="block font-bold mb-1">Contato:</label>
                    <input type="text" id="contato" placeholder="Contato" value={formData.contato} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="cep" className="block font-bold mb-1">CEP:</label>
                    <input type="text" id="cep" placeholder="CEP" value={formData.cep} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="nomeGit" className="block font-bold mb-1">Nome Git:</label>
                    <input type="text" id="nomeGit" placeholder="Nome Git" value={formData.nomeGit} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <input type="submit" value="Enviar" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300" />
                  </div>
                </form>
                {/* Exibe a mensagem de feedback se houver */}
                {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
              </div>
            </div>
            {/* Lado direito */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src="/images/Logings.png" alt="imagem de Welcome" className="w-[10rem] md:w-full"
          />
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default LoginPage;