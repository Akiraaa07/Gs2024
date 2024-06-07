'use client'

import React, { useState } from 'react';
import axios from 'axios';
import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    NOME: '',
    EMAIL: '',
    CONTATO: '',
    CEP: '',
    LOGIN: '',
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

    // Verifica se os valores são números válidos
    const contatoNum = parseInt(formData.CONTATO);
    const cepNum = parseInt(formData.CEP);

    if (isNaN(contatoNum) || isNaN(cepNum)) {
      setMessage('Contato e CEP devem ser números.');
      return;
    }

    const dataToSend = {
      ...formData,
      contato: contatoNum,
      cep: cepNum
    };

    try {
      const response = await axios.post('http://localhost:8080/usuario', dataToSend, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
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
                  <FormField id="NOME" label="Nome Completo" placeholder="Nome Completo" value={formData.NOME} onChange={handleChange} />
                  <FormField id="EMAIL" label="E-mail" placeholder="E-mail" value={formData.EMAIL} onChange={handleChange} />
                  <FormField id="CONTATO" label="Contato" placeholder="Contato" value={formData.CONTATO} onChange={handleChange} />
                  <FormField id="CEP" label="CEP" placeholder="CEP" value={formData.CEP} onChange={handleChange} />
                  <FormField id="LOGIN" label="Nome Git" placeholder="Nome Git" value={formData.LOGIN} onChange={handleChange} />
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

const FormField: React.FC<{
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}> = ({ id, label, placeholder, value, onChange, style }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block font-bold mb-1">{label}:</label>
    <input type="text" id={id} placeholder={placeholder} value={value} onChange={onChange} style={style} className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500 font-primary" />
  </div>
);

export default LoginPage;