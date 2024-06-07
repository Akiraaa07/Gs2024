'use client'

import React, { useState } from 'react';
import axios from 'axios';
import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    contato: '',
    cep: '',
    nomeGit: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await axios.post('http://localhost:8080/usuario', formData);
      console.log('Dados enviados com sucesso:', response.data);
      setMessage('Dados enviados com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      setMessage('Erro ao enviar dados. Por favor, tente novamente mais tarde.');
    }
  };

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
                  <FormField id="nomeCompleto" label="Nome Completo" placeholder="Nome Completo" value={formData.nomeCompleto} onChange={handleChange} />
                  <FormField id="email" label="E-mail" placeholder="E-mail" value={formData.email} onChange={handleChange} style={{ fontFamily: 'Arial, sans-serif' }} />
                  <FormField id="contato" label="Contato" placeholder="Contato" value={formData.contato} onChange={handleChange} style={{ fontFamily: 'Arial, sans-serif' }} />
                  <FormField id="cep" label="CEP" placeholder="CEP" value={formData.cep} onChange={handleChange} style={{ fontFamily: 'Arial, sans-serif' }} />
                  <FormField id="nomeGit" label="Nome Git" placeholder="Nome Git" value={formData.nomeGit} onChange={handleChange} style={{ fontFamily: 'Arial, sans-serif' }} />
                  <div>
                    <input type="submit" value="Enviar" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300" />
                  </div>
                </form>
                {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img src="/images/Logings.png" alt="imagem de Welcome" className="w-[10rem] md:w-full" />
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
};

// Componente para campo de formulário
const FormField: React.FC<{
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties; // Adicionado para aceitar estilos personalizados
}> = ({ id, label, placeholder, value, onChange, style }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block font-bold mb-1">{label}:</label>
    <input type="text" id={id} placeholder={placeholder} value={value} onChange={onChange} style={style} className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
  </div>
);

export default LoginPage;
