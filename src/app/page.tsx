"use client";

import React, { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/documentos', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        // Processar a resposta conforme necessário
        console.log('Documento adicionado:', result);
      } else {
        console.error('Erro ao adicionar documento');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="flex flex-col items-center justify-center">
      <header id="topo">
        <div id="topo_box">
          <div id="titulo">
            <header className="w-full p-4">
              <h1 className="text-4xl text-blue-800">
                <strong>iDocumentos App</strong>
              </h1>
              <p className="text-lg text-blue-700 mb-4">Notifique sobre um documento incorreto</p>
            </header>
          </div>
          <section id="login bg-blue-300">
            <div id="login_box">
              <form method="post" action="pag.html">
                <label htmlFor="usuario">Usuário:</label>
                <input type="text" id="usuario" name="usuario" placeholder="Usuário" required />
                <label htmlFor="senha">Senha:</label>
                <input type="password" id="senha" name="senha" placeholder="Senha" required />
                <button className='w-60' type="submit" id="btn_login">Entrar</button>
              </form>
            </div>
          </section>
        </div>	
      </header>
      <section id="conteudo">
        <h2>Documento Incorreto</h2>
        <form method="post" action="#" encType="multipart/form-data" id="enviar">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" />
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="imagem">Arquivo do documento incorreto:</label>
          <input type="file" id="imagem" name="imagem" />
          <label htmlFor="categoria">Categoria:</label>
          <select name="categoria" id="categoria">
            <option value="1">Perguntas</option>
            <option value="2">Reclamações</option>
          </select>
          <label htmlFor="descricao">Descrição:</label>
          <textarea id="descricao" name="descricao"></textarea>
          <input type="submit" value="Enviar" className="btn_enviar" />
        </form>
      </section>
    </main>
  );
}
