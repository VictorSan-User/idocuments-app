import formidable from 'formidable';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

// Simulação de armazenamento de dados 
let documentos = [];

export const config = {
  api: {
    bodyParser: false, // Desativo o bodyParser padrão para usar o formidable 
                       //(esse bug foi complicado)
  },
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.status(500).json({ message: 'Erro ao processar o formulário' });
        return;
      }

      try {
        // Extraia os dados do campo
        const { nome, email, categoria, descricao } = fields;

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
    });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
