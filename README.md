<div align="center"> 
    <a ref="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">
        <img src="https://img.shields.io/badge/HTML-E34F26.svg?logo=html5&logoColor=white" alt="HTML">
    </a>
    <a ref="https://styled-components.com/" target="_blank">
        <img src="https://img.shields.io/badge/Styled Components-0E1013.svg?logo=styledcomponents&logoColor=E69280" alt="Styled Components">
    </a>
    <a ref="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?logo=javascript&logoColor=black" alt="JavaScript">
    </a>
    <a ref="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started" target="_blank">
        <img src="https://img.shields.io/badge/React-313335.svg?logo=react&logoColor=67DEFF" alt="React">
    </a>
</div>

<div align="center"> 
  <h1>Projeto Mini Blog</h1>
    
  [Sobre](#sobre)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; [Rotas (Telas)](#rotas)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; [Deploy](#deploy)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; [Tecnologias](#tecnologias)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; [Instalacoes necessarias](#instalacoes)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; [Contato](#contato)
</div>


https://github.com/user-attachments/assets/017cc061-83ee-4963-8103-c753dde5dfe7


<h2 name="sobre">📝 Sobre</h2>
<ul style="display: flex; flex-direction: column; gap: 15px">
  <li>Através do projeto Mini Blog, é possível realizar cadastro/login, publicar, alterar, visualizar e remover posts;
  </li>
  <li>O Back-End foi feito utilizando a plataforma do <a href="https://firebase.google.com/docs/guides?hl=pt-br" target="_blank">Firebase</a>, o qual fornece toda a estrutura necessária e armazena seus dados em um banco NoSQL;
  </li>
  <li>A implementação da autenticação foi feita com <a href="https://firebase.google.com/docs/auth?hl=pt-br" target="_blank">Firebase Authentication</a>, sendo necessário apenas um email e senha. Há bloqueio de acesso às páginas que necessitam de um usuário logado, sendo encaminhadas automaticamente para a página de login;</li>
  <li>Com este projeto, pude aprender mais sobre o Firebase e sua integração com o lado Front-End da aplicação.</li>
</ul>

<h2 name="rotas">📲 Rotas (Telas)</h2>
<ul style="display: flex; flex-direction: column; gap: 15px">
  <li>
    <strong>"/register"</strong>: Página de cadastro do usuário, onde deverá ser inserido nome, email, senha e confirmação de senha;
  </li>
  <li>
    <strong>"/login"</strong>: Após criar um cadastro, o usuário poderá utilizar a Tela de Login para adentrar o sistema;
  </li>
  <li>
    <strong>"/"</strong>: Página Home (Inicial) assim que é confirmada a autenticação de Login;
  </li>
  <li>
    <strong>"/search?q=[tag]"</strong>: O usuário é encaminhado para a página assim que uma pesquisa de tag é feita. A palavra digitada no campo de busca é passada para a URL em uma query string para a filtragem de posts por tag;
  </li>
  <li>
    <strong>"/posts/create"</strong>: Reservada a criação de um post. Todos os campos são obrigatórios: Título do Post, imagem, conteúdo e tags;
  </li>
  <li>
    <strong>"/posts/[idDoPost]"</strong>: Exibe detalhes de um post específico ao clicar no botão "Ver post";
  </li>
  <li>
    <strong>"/posts/edit/[idDoPost]"</strong>: Formulário idêntico ao de criação do post, com informações do post selecionado para alteração. Todos os campos obrigatórios;
  </li>
  <li>
    <strong>"/dashboard"</strong>: Área de gerenciamento de posts de um usuário, onde todos são listados e há ações de visualizar, editar e excluir; 
  </li>
</ul>

<h2 name="deploy">🔗 Deploy</h2>
<p>Acesse a visualização completa do Projeto Mini Blog <a href="https://mini-blog-teal.vercel.app" target="_blank"> aqui</a>.</p>

<h2 name="tecnologias">💻 Tecnologias</h2></p>
<p>Feito através do editor <a href="https://code.visualstudio.com/docs">Visual Studio Code.</a>

<ul style="display: flex; flex-direction: column; gap: 15px">
  <li>
    <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank">HTML</a>: Linguagem de marcação utilizada na construção de páginas na Web;
  </li>
  <li>
    <a href="https://styled-components.com/" target="_blank">Styled Components</a>: Biblioteca React que permite criar componentes de estilo, utilizando CSS dentro de um arquivo javascript;
  </li>
  <li>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">Javascript</a>: Linguagem de programação utilizada principalmente no desenvolvimento web para a criação de interfaces dinâmicas;
  </li>
  <li>
    <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started" target="_blank">React.js</a>: Biblioteca Javascript que permite aos desenvolvedores criar interfaces de usuário interativas e reutilizáveis. Sua abordagem baseada em componentes facilita a construção de aplicativos web modulares e escaláveis;
  </li>
  <li>
    <a href="https://lucide.dev/guide/packages/lucide-react" target="_blank">Lucide React</a>: Biblioteca ReactJS de ícones;
  </li>
  <li>
    <a href="https://firebase.google.com/docs/guides?hl=pt-br" target="_blank">Firebase</a>: Plataforma BaaS multiplataforma que fornece uma estrutura Back-End pronta;
  </li>
  <li>
    <a href="https://firebase.google.com/docs/database?hl=pt-br" target="_blank">Firestore Database</a>: Banco de dados NoSQL fornecido pelo Firebase;
  </li>
  <li>
    <a href="https://vitejs.dev/guide/" target="_blank">ViteJS</a>: É um build tool que permite um desenvolvimento rápido para projetos web. Ele simula um servidor durante o desenvolvimento para melhorar o desempenho e a produtividade.
  </li>
</ul>

<h2 name="instalacoes">💾 Instalações necessárias</h2>
<p>Para executar os seguintes comandos em seu <strong>terminal</strong>, é necessário ter o <a href="https://git-scm.com/downloads/" target="_blank">Git</a> e o <a href="https://nodejs.org/en/download/package-manager" target="_blank">Node.JS</a> (preferencialmente na versão LTS) instalados previamente e configurados.</p>

<h3>Clone o repositório e entre em sua pasta</h3>
<code>git clone https://github.com/ABeatrizSC/mini-blog.git</code> 
<br>
<br>
<code>cd mini-blog</code>

<h3>Instalação das dependências do projeto</h3>
<code>npm install</code>

<h3>Inicie o servidor local utilizando o Vite.js</h3>
<code>npm run dev</code>
<br>
<br>
<p>Dê <i>ctrl + click </i> no endereço de link gerado para abrir o projeto em seu navegador.</p>

<h3 align="center">CONFIGURAÇÃO DO FIREBASE</h3>
<p>Para criar seu próprio projeto/banco de dados no Firebase, siga o passo a passo:</p>
<h4>1. Login/Cadastro</h4>
<p>Faça login ou cadastre-se no <a href="https://firebase.google.com/?hl=pt-br" target="_blank">site oficial do Firebase;</a></p>

<h4>2. Crie o projeto</h4>
<p> Ir em "Go To Console" ➡ "Criar um projeto" ➡ Insira o nome do projeto (mini-blog) ➡ Desative o Google Analytics do Projeto (opcional) ➡ "Criar projeto";</p>

<h4>3. Registre o App</h4>
<p>Clique no botão "&lt;/&gt;" ➡ Registre o App (mini-blog) com a opção de hoisting desativada ➡ substitua a variável <code>firebaseConfig</code> do arquivo firebase/config.js com as novas configurações fornecidas;</p>

<h4>5. Crie a autenticação por e-mail e senha</h4>
<p>No menu lateral esquerdo, vá em "Criação" ➡ "Autenticação" ➡ "Método de Login" ➡ "E-mail/senha" ➡ Ative as duas opções e salve;</p>

<h4>6. Crie o Banco de Dados</h4>
<p>Ainda no menu lateral esquerdo, vá em "Firestore Database" ➡ "Criar banco de dados" ➡ "Próxima" ➡ "Iniciar modo teste" e "Criar";</p>

<h4>7. Adicione índices de busca</h4>
<p>"Firestore Database" ➡ "Índices" ➡ "Criar índice";</p>
<p>Crie os seguintes índices:	<code>tagsArray Matrizes createdAt Decrescente __name__ Decrescente </code>&nbsp;e <code>uid Crescente createdAt Decrescente __name__ Decrescente</code>&nbsp; para que as buscas dentro do App funcionem.</p>

<h2 name="contato">🔍 Contato:</h2>
<a href="mailto:anabeatrizscarmoni@gmail.com">
  <img src="https://img.shields.io/badge/email-fff.svg?logo=gmail&logoColor=red" alt="E-mail">
</a>
<a href="http://www.linkedin.com/in/anabeatrizsantuccicarmoni">
  <img src="https://img.shields.io/badge/LinkedIn-0A78B5.svg?logo=linkedin&logoColor=white" alt="LinkedIn">
</a>
&nbsp;&nbsp;
