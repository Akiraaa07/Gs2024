'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";

const UserCepPage = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCep = event.target.value.replace(/\D/g, '');
    setCep(formattedCep);
  };

  const fetchAddress = async () => {
    try {
      const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (res.data.erro) {
        throw new Error('CEP não encontrado');
      }
      setAddress(res.data);
      setError(null);
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
      setAddress(null);
      setError('CEP não encontrado. Verifique o CEP digitado.');
    }
  };

  useEffect(() => {
    if (cep.length === 8) {
      fetchAddress();
    } else {
      setAddress(null);
    }
  }, [cep]);

  return (
    <React.Fragment>
      <NavBar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full font-primary">
          <h1 className="text-3xl font-bold text-primary mb-4">Consulta de CEP</h1>
          <div className="mb-4">
            <label htmlFor="cep" className="block text-gray-700 font-bold mb-2">Digite o CEP:</label>
            <input
              type="text"
              id="cep"
              value={cep}
              onChange={handleCepChange}
              placeholder="Ex: 01001000"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          {address && (
            <div>
              <p className="text-lg text-gray-800 font-bold mb-2">Endereço:</p>
              <p className="text-gray-700" style={{ color: 'black', fontSize: '16px', fontWeight: 'normal' }}>
                <strong>CEP:</strong> {address.cep ?? 'N/A'}
              </p>
              <p className="text-gray-700" style={{ color: 'black', fontSize: '16px', fontWeight: 'normal' }}>
                <strong>Logradouro:</strong> {address.logradouro ?? 'N/A'}
              </p>
              <p className="text-gray-700" style={{ color: 'black', fontSize: '16px', fontWeight: 'normal' }}>
                <strong>Complemento:</strong> {address.complemento ?? 'N/A'}
              </p>
              <p className="text-gray-700" style={{ color: 'black', fontSize: '16px', fontWeight: 'normal' }}>
                <strong>Bairro:</strong> {address.bairro ?? 'N/A'}
              </p>
              <p className="text-gray-700" style={{ color: 'black', fontSize: '16px', fontWeight: 'normal' }}>
                <strong>Cidade:</strong> {address.localidade ?? 'N/A'} - {address.uf ?? 'N/A'}
              </p>
            </div>
          )}

          {cep.length === 8 && !address && (
            <p className="text-red-500">CEP não encontrado. Verifique o CEP digitado.</p>
          )}
        </div>
      </div>
      <FooterSection />
    </React.Fragment>
  );
};

export default UserCepPage;