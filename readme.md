# Biblioteca Online

A **Biblioteca Online** se trata de um acervo digital gratuito e disponível para os alunos da rede pública de ensino e para os alunos de aprendizagem industrial da rede ***Senac***.

## Tecnologias Utilizadas
- **Frontend**: HTML + CSS + JS + Vue.js
- **Backend**: JS + Node.js + Express + MySql2
- **Banco de Dados**: MySql ou PostgreeSql
- **Hospedagem**: 

## Execução do projeto
### 1. Instalações Iniciais:

- Baixar o **Visual Studio Code**
- Instalar o **Git** localmente no Powershell: 
```powershell
winget install --id Git.Git -e --source winget
```

- Instalar o **Node.js**
- Instalar o **MySQL Server**
    - **Microsoft Visual C++** é pré-requisito para o server.
- Reiniciar o dispositivo.

### 2. Extensões do VS Code

- **MySQL**: Serve para conectar e manipular o banco de dados.
- **Live Server** e **Live Preview**: Permite levantar um servidor local para exibir o frontend no navegador.
- **Material Icon Theme**: Estilizar a estrutura de pastas, para facilitar a compreensão visual.
- **Thunder Client** ou **Postman**:  Simular o cliente executando requisições no servidor.
- **Code Runner** : Opção gráfica para executar os scripts.
- **GitLens**: Visibilidade para versionamento do projeto.
- **Rainbow CSV**: Melhora a visibilidade dos arquivos csv presentes no projeto.


### 3. Primeiras Configurações

- Posicionar o cursor na pasta **/backend** e criar arquivo **.env**.
```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=0000
DB_NAME=library
```

- Rodar o comando para instalar as dependências descritas no arquivo **package.json** com o cursor ainda em **/backend**:

```bash
npm install
```

- package.json dependencies:
  - mysql2
  - express
  - cors
  
`Set-ExecutionPolicy RemoteSigned` - Serve para habilitar a execução de scripts no *Powershell* caso esteja desabilitado pelo Sistema.

- Executar o arquivo **library.sql** no Banco de Dados. Lembrando de ativar a conexão no topo do arquivo.

- Criar a requisição no **Thunder Client** para testar se o servidor está respondendo.

## Utils

### Git Config
```bash
git  config --global user.email "example@gmail.com"
git  config --global user.name "Your Name"
```

### Package.json Config
```
  "start": "node --watch ./js/server.js"
```
- A tag **--watch** server para não precisar reiniciar o servidor manualmente.


---

# Configuração do Frontend

- **Vite**: Criar a pasta /frontend com o React no projeto
```bash 
 npm create vite@latest frontend -y
```
ou
```bash 
 npm create vite@latest frontend -- --template
```
- Selecionar React e depois Javascript.

- No terminal:
```bash
   cd ./frontend
```
Instala as dependências do vite:
```bash
 npm i 
```
Executa o servidor:
```bash
 npm run dev
```

### Apagar os arquivos de /frontend:
  - .gitignore
  - README.md
  - eslint.config.js
  - ./src/assets
  - ./src/App.css
  - public/** 


### Limpar arquivos: 
- App.jsx 
```js
export default function App() {
  
  return (
    <>
    </>
  )
}
```
- index.css
```
```

### Bibliotecas do NPM

- **Material UI React**: Componentes para o React
```
  npm install @mui/material @emotion/react @emotion/styled
```
- **React Icons**: Ícones para o React
```
  npm install react-icons
```

---

# API de Livros

API REST desenvolvida em Node.js e Express para gerenciamento de livros e autores.

## Base URL

```http
http://localhost:3000
```

---

# Endpoints

## Listar livros

Retorna os 20 livros mais recentes cadastrados.

### Requisição

```http
GET http://localhost:3000/books
```

### Resposta

```json
[
  {
    "id": 10,
    "isbn": "9788575228289",
    "title": "Node.js",
    "author": 1,
    "name": "Fulano de Tal",
    "year": 2024,
    "pages": 350
  }
]
```

## Cadastrar livro

Cadastra um novo livro. Caso o autor informado não exista, ele será criado automaticamente.

### Requisição

```http
POST http://localhost:3000/books
Content-Type: application/json
```

```json
{
  "isbn": "9788575228289",
  "title": "Node.js",
  "author": "Fulano de Tal",
  "year": 2024,
  "pages": 350
}
```

### Resposta

```json
{
  "message": "Livro 10 cadastrado com sucesso."
}
```

## Atualizar livro

Atualiza os dados de um livro existente.

### Requisição

```http
PUT http://localhost:3000/books/10
Content-Type: application/json
```

```json
{
  "isbn": "9788575228289",
  "title": "Node.js Atualizado",
  "author": "Fulano de Tal",
  "year": 2025,
  "pages": 400
}
```

### Resposta

```json
{
  "message": "Livro 10 atualizado com sucesso"
}
```

## Excluir livro

Remove um livro do banco de dados.

### Requisição

```http
DELETE http://localhost:3000/books/10
```

### Resposta

```json
{
  "message": "Livro 10 excluído com sucesso"
}
```

# Estrutura do Livro

| Campo | Tipo | Descrição |
|---------|---------|---------|
| id | integer | Identificador do livro |
| isbn | string | ISBN do livro |
| title | string | Título do livro |
| author | string | Nome do autor enviado pela API |
| year | integer | Ano de publicação |
| pages | integer | Quantidade de páginas |

---

# Observações

- Os autores são armazenados em uma tabela separada (`authors`).
- Caso o autor informado não exista, ele será criado automaticamente.
- A rota `GET /books` retorna no máximo 20 registros.
- Os resultados são ordenados do mais recente para o mais antigo.


## Novos horizontes:
- Documentação: Diagramas Mermaid
- Frontend: Criar o Frontend para exibir livros.
- Projeto: Prototipação em Figma.  
- Testes: Automatizados com JUnit.