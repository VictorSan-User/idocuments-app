import React from 'react';

export function UploadForm({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
      alert('Por favor, selecione um arquivo.');
      return;
    }

    const allowedExtensions = /(\.pdf|\.rtf)$/i;
    const maxSize = 10 * 1024 * 1024; // 10 MB em bytes

    if (!allowedExtensions.exec(file.name)) {
      alert('Formato de arquivo inválido.');
      fileInput.value = ''; // Limpa o input de arquivo
      return;
    }

    if (file.size > maxSize) {
      alert('O tamanho do arquivo é maior que 10 MB.');
      fileInput.value = ''; // Limpa o input de arquivo
      return;
    }

    // Passa o arquivo para o componente pai
    onSubmit(file);
  };

  return (
    <form id="uploadForm" onSubmit={handleSubmit}>
      <label htmlFor="fileInput" className='text-left text-blue-800'>
        Arquivo do documento incorreto:
      </label>
      <input
        type="file"
        id="fileInput"
        accept=".pdf,.rtf"
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default UploadForm;
