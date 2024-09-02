import { NextApiRequest, NextApiResponse } from 'next';

// Simulação de armazenamento de dados 
let documentos = []; // Início zerado

export default function handler(req, res) {//require e response
  if (req.method === 'GET') {
    // Retorna todos os documentos
    res.status(200).json(documentos);
  } else if (req.method === 'POST') {
    try {
      // Lê os dados do corpo da requisição
      const { nome, email, categoria, descricao } = req.body;

      // Adiciona um novo documento
      const novoDocumento = {
        id: Date.now().toString(), // Gerar um ID único
        nome,
        email,
        categoria,
        descricao,
        status: 'Solicitação Registrada',
        dataRegistro: new Date().toLocaleString(),
        ultimaAtualizacao: new Date().toLocaleString(),
        usuarioResponsavel: 'Administrador Master',
      };

      documentos.push(novoDocumento);

      // Retorna a resposta de sucesso
      res.status(200).json(novoDocumento);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao processar a requisição' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
