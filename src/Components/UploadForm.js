import React from 'react';
//Condicional if 
export function UploadForm() {
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

    // Permito proceder com o envio do arquivo
    console.log('Arquivo válido:', file);
  };

  return (
    <form id="uploadForm" onSubmit={handleSubmit}>
      <button className='text-left text-blue-800' type="submit">
        Arquivo do documento incorreto:
        <input type="file" id="fileInput" accept=".pdf,.rtf" />
      </button>
    </form>
  );
}

export default UploadForm;
