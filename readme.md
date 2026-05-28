# Biblioteca Online

A **Biblioteca Online** se trata de um acervo digital gratuito e disponível para os alunos da rede pública de ensino e para os alunos de aprendizagem industrial da rede ***Senac***.

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
`Set-ExecutionPolicy RemoteSigned` - Serve para habilitar a execução de scripts no *Powershell* caso esteja desabilitado pelo Sistema.

- Executar o arquivo **library.sql** no Banco de Dados. Lembrando de ativar a conexão no topo do arquivo.

- Criar a requisição no **Thunder Client** para testar se o servidor está respondendo.