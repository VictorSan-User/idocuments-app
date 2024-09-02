iDocumentos App
O iDocumentos App é uma aplicação para notificação de documentos incorretos. A aplicação permite que os usuários enviem informações sobre documentos com erros e para que administradores possam visualizar esses documentos em uma página de administração.

Tecnologias Utilizadas
React: Biblioteca JavaScript para construir interfaces de usuário.
Next.js: Framework React para renderização do lado do servidor e geração de sites estáticos.
TypeScript: Superset do JavaScript que adiciona tipagem estática.
Tailwind CSS: Framework de utilitários CSS.

Pré-requisitos
Node.js
JavaScript

Configuração
1. Clonar o Repositório
bash
Copiar código
git clone https://github.com/VictorSan-User/idocuments-app
cd idocumentos-app
2. Instalar Dependências do Frontend
Certifique-se de ter o Node.js instalado. Em seguida, execute:


npm install

3. Configurar o Back-end PHP
Navegue para o diretório onde está o código PHP.

Instale as dependências do PHP com Composer (se houver um composer.json):

composer install

Configure seu servidor PHP para servir o projeto. Certifique-se de que o servidor está configurado para lidar com arquivos PHP e está acessível através do endereço especificado no código.

5. Iniciar o Servidor de Desenvolvimento
Para iniciar o servidor de desenvolvimento do Next.js, execute:

npm run dev

Abra o navegador e acesse http://localhost:3000 para visualizar a aplicação.

6. Adicionar o Favicon
Certifique-se de que o arquivo favicon.ico esteja localizado na pasta public do projeto. O favicon deve ser referenciado no componente Head do Next.js.

Uso
Página Inicial (Home)
Na página inicial, os usuários podem enviar documentos incorretos usando um formulário. As informações são enviadas para o back-end PHP para processamento.

Página de Administração (AdminPage)
A página de administração exibe uma lista de documentos enviados. Os administradores podem visualizar e gerenciar essas informações.

Contribuição
Se desejar contribuir para o projeto, siga estas etapas:

Faça um fork do repositório.
Crie uma branch para sua alteração (git checkout -b minha-alteracao).
Faça as alterações necessárias e teste-as.
Faça commit das suas alterações (git commit -am 'Adiciona nova funcionalidade').
Faça push para a branch (git push origin minha-alteracao).
Crie um pull request para revisão.
Licença
Este projeto está licenciado sob a Licença MIT.

Contato
Para mais informações, entre em contato com:

Nome: Victor
E-mail: victorhenriquesan@outlook.com
