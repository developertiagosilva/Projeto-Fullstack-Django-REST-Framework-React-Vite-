import { useState, useEffect } from 'react';

export default function Home() {
  const [mensagem, setMensagem] = useState('Carregando mensagem do servidor...');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/mensagem/')
      .then((res) => {
        if (!res.ok) throw new Error('Erro na requisição');
        return res.json();
      })
      .then((data) => setMensagem(data.mensagem))
      .catch(() => setMensagem('Olá! (Servidor Django offline ou rota não configurada)'));
  }, []);

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Olá!</h1>
      <p style={{ fontSize: '1.2rem', color: '#444' }}>{mensagem}</p>
    </div>
  );
}