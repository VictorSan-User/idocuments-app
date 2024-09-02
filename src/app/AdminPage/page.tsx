"use client";

import { useEffect, useState } from "react";

interface Documento {
  id: string;
  nome: string;
  email: string;
  categoria: string;
  descricao: string;
  status: string;
  dataRegistro: string;
  ultimaAtualizacao: string;
  usuarioResponsavel: string;
}

export default function AdminPage() {
  const [documentos, setDocumentos] = useState<Documento[]>([]);

  useEffect(() => {
    const fetchDocumentos = async () => {
      try {
        const response = await fetch("/api/documentos");
        if (!response.ok) {
          throw new Error("Erro ao buscar documentos");
        }
        const data: Documento[] = await response.json();
        setDocumentos(data);
      } catch (error) {
        console.error("Erro ao buscar documentos:", error);
      }
    };

    fetchDocumentos();
  }, []);

  return (
    <main>
      <title>iPrescrição</title>
      <div id="tudo">
        <header id="topo" className="bg-blue-300">
          <div id="titulo" className="bg-blue-800">
            <br />
            <h1 className="m-10 text-4xl"><strong>iPrescrição</strong></h1>
            <p className="pagina2 m-10 text-xl text-white mb-4">Lista de documentos incorretos</p>
          </div>
        </header>
        <section id="conteudo" className="bg-blue-350">
          <ul>
            {documentos.map((doc) => (
              <li key={doc.id} className="case_form">
                <form method="post" action="#" encType="multipart/form-data" className="enviar">
                  <label htmlFor="nome">Nome:</label>
                  <input type="text" id="nome" name="nome" value={doc.nome} readOnly />
                  <label htmlFor="email">E-mail:</label>
                  <input type="text" id="email" name="email" value={doc.email} readOnly />
                  <label htmlFor="imagem">Arquivo do documento incorreto:</label>                 
                  <label htmlFor="categoria">Categoria:</label>
                  <select name="categoria" id="categoria" value={doc.categoria} disabled>
                    <option value="2">{doc.categoria}</option>
                  </select>
                  <label htmlFor="descricao">Descrição:</label>
                  <textarea id="descricao" name="descricao" readOnly>{doc.descricao}</textarea>
                  <label htmlFor="status">Status:</label>
                  <select name="status" id="status" value={doc.status} disabled>
                    <option value="1">{doc.status}</option>
                  </select>
                  <input type="submit" value="Salvar" className="btn_enviar" disabled />
                </form>
                <div className="informacoes">
                  <ul>
                    <li><span>Data de registro:</span>{doc.dataRegistro}</li>
                    <li><span>Última atualização:</span>{doc.ultimaAtualizacao}</li>
                    <li><span>Usuário responsável:</span>{doc.usuarioResponsavel}</li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
