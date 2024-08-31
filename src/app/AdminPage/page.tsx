"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [documentos, setDocumentos] = useState([]);

  useEffect(() => {
    // Função para buscar documentos da API
    const fetchDocumentos = async () => {
      try {
        const response = await fetch("/api/documentos");
        const data = await response.json();
        setDocumentos(data);
      } catch (error) {
        console.error("Erro ao buscar documentos:", error);
      }
    };

    fetchDocumentos();
  }, []);
    return(
    <body>
        <div id="tudo">
            <header id="topo" className="bg-blue-300">
                    <div id="titulo">
                        <br/>
                        <h1 className="m-10 text-4xl text-#0055ad"><strong>iDocumentos</strong></h1>			
                        <p className="pagina2 m-10 text-xl">Lista de documentos incorretos</p>
                    </div>
            </header>
            <section id="conteudo" className="bg-blue-350">
                <ul>
                    <li className="case_form">
                        <form method="post" action="#" encType="multipart/form-data" className="enviar">
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" id="nome" name="nome" value="José da Silva" />
                            <label htmlFor="email">E-mail:</label>
                            <input type="text" id="email" name="email" value="silva@email.com" />
                            <label htmlFor="imagem">Arquivo do documento incorreto:</label>                 
                            <label htmlFor="categoria">Categoria:</label>
                            <select name="categoria" id="categoria">
                                <option value="2">Nome da mãe errado</option>
                            </select>
                            <label htmlFor="descricao">Descrição:</label>
                            <textarea id="descricao" name="descricao">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</textarea>
                            <label htmlFor="status">Status:</label>
                            <select name="status" id="status">
                                <option value="1">Solicitação Registrada</option>
                            </select>
                            <input type="submit" value="Salvar" className="btn_enviar" />
                        </form>
                        <div className="informacoes">
                            <ul>
                                <li><span>Data de registro:</span>12/02/2014 às 15:00h</li>
                                <li><span>Última atualização:</span>15/02/2014 às 15:30h</li>
                                <li><span>Usuário responsável:</span>Administrador Master</li>
                            </ul>
                        </div>
                    </li>
                    <li className="case_form">
                        <form method="post" action="#" encType="multipart/form-data" className="enviar">
                            <label htmlFor="nome">nome:</label>
                            <input type="text" id="nome" name="nome" value="José da SIlva" />
                            <label htmlFor="email">email:</label>
                            <input type="text" id="email" name="email" value="silva@email.com" />
                            <label htmlFor="imagem">arquivo do documento incorreto:</label>                    
                            <label htmlFor="categoria">categoria:</label>
                            <select name="categoria" id="categoria">
                                <option value="2">Problemas de leitura do arquivo, preciso em RTF</option>
                            </select>
                            <label htmlFor="descricao">descrição:</label>
                            <textarea id="descricao" name="descricao">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</textarea>
                            <label htmlFor="status">Status:</label>
                            <select name="status" id="status">
                                <option value="1">Solicitação Registrada</option>
                            </select>
                            <input type="submit" value="Salvar" className="btn_enviar" />
                        </form>
                        <div className="informacoes">
                            <ul>
                                <li><span>Data de registro:</span>12/02/2014 às 15:00h</li>
                                <li><span>Última atualização:</span>15/02/2014 às 15:30h</li>
                                <li><span>Usuário responsável:</span>Administrador Master</li>
                            </ul>
                        </div>
                    </li>
                    <li className="case_form">
                        <form method="post" action="#" encType="multipart/form-data" className="enviar">
                            <label htmlFor="nome">nome:</label>
                            <input type="text" id="nome" name="nome" value="José da SIlva" />
                            <label htmlFor="email">email:</label>
                            <input type="text" id="email" name="email" value="silva@email.com" />
                            <label htmlFor="imagem">arquivo do documento incorreto:</label>                    
                            <label htmlFor="categoria">categoria:</label>
                            <select name="categoria" id="categoria">
                                <option value="2">Problemas de curso errado</option>
                            </select>
                            <label htmlFor="descricao">descrição:</label>
                            <textarea id="descricao" name="descricao">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</textarea>
                            <label htmlFor="status">Status:</label>
                            <select name="status" id="status">
                                <option value="1">Solicitação Registrada</option>
                            </select>
                            <input type="submit" value="Salvar" className="btn_enviar" />
                        </form>
                        <div className="informacoes">
                            <ul>
                                <li><span>Data de registro:</span>12/02/2014 às 15:00h</li>
                                <li><span>Última atualização:</span>15/02/2014 às 15:30h</li>
                                <li><span>Usuário responsável:</span>Administrador Master</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </body>
    );
}  