# 🚲 Sistema de Aluguel de Veículos (CLI)
Este é um sistema de aluguel de bicicletas e patinetes desenvolvido em Node.js, executado diretamente no terminal (CLI).
O sistema permite criar contas de usuário, fazer login, adicionar saldo (cash), alugar veículos e gerenciar os veículos alugados.

## 📋 Funcionalidades
° Cadastro e Login de Usuários (Sign Up / Sign In) <br>
° Validação de email e senha. <br>
° Armazenamento de dados no arquivo bd.json. <br>
° Gerenciamento de Veículos <br>
° Aluguel de bicicletas e patinetes. <br>
° Atualização do status do veículo (disponível ou indisponível). <br>
° Gerenciamento de Conta <br>
° Adicionar ou retirar cash. <br>
° Visualizar veículos alugados. <br>
° Exibir dados do usuário (nome, saldo e lista de veículos alugados). <br>
° Persistência Local (JSON) <br>
° Todos os usuários e veículos ficam armazenados no arquivo bd.json.

## 🛠️ Tecnologias Utilizadas
Node.js

prompt-sync — para entrada de dados do usuário.

fs (File System) — para manipulação do arquivo bd.json.

## 📂 Estrutura do Projeto
```bash
📦 projeto-aluguel-veiculos
├── 📄 index.js              # Código principal do sistema (CLI)
├── 📄 bd.json               # Banco de dados local (usuários e veículos)
├── 📄 package.json          # Configuração do projeto Node.js
└── 📄 README.md             # Documentação do projeto
```
Exemplo de estrutura do bd.json

```bash
{
    "users": [
        {
            "id": 1,
            "user": "João",
            "email": "joao@email.com",
            "password": "1234"
        }
    ],
    "veichles": [
        { "id": 1, "tipo": "bicicleta", "status": true },
        { "id": 2, "tipo": "patinete", "status": true }
    ]
}
```

## 🚀 Como Executar o Projeto

-> 1. Clonar o repositório <br>
```bash
git clone https://github.com/DavidTelles/PF-01
cd PF-01
```

-> 2. Instalar dependências <br>
```bash
npm init
npm i prompt-sync
```

-> 3. Executar o projeto <br>
```bash
node index.js
```

## 💡 Fluxo de Uso
Ao iniciar o programa, o usuário digita o nome.

Escolhe entre criar uma conta ou entrar.

Depois de logado:
Pode adicionar cash, 
Alugar bicicletas ou patinetes, 
Visualizar veículos alugados e removê-los, 
Ver dados da conta e 
O sistema salva tudo automaticamente em bd.json.

## ⚠️ Possíveis Melhorias Futuras
Implementar criptografia de senha (ex: bcryptjs).

Melhorar tratamento de erros e validações

## 👨‍💻 Autor
Desenvolvido por David Telles <br>
📧 Email: davidsilvatelles2023@gmail.com <br>
💻 Projeto educativo para prática de JavaScript e Node.js
