# **Chatbot Educacional 🤖🎓**

## **Descrição do Projeto 🌱**  
O **Chatbot Educacional** é um projeto desenvolvido para ajudar estudantes iniciantes em programação a:  
- Resolver dúvidas 💡
- Corrigir erros de código 🐞  
- Praticar e revisar conteúdos complexos de forma interativa e acessível ✨ 

O objetivo principal é oferecer um portal educacional onde os alunos possam interagir com um chatbot baseado na API da OpenAI, promovendo uma experiência de aprendizado contínua e assistida.  

Além disso, buscamos contribuir para o **ODS 4** (*Educação de Qualidade*), desenvolvendo uma aplicação que facilite o acesso a ferramentas educacionais de alta qualidade.



## **Apresentação da Ferramenta 🎥**

Assista à apresentação do **Chatbot Educacional** no YouTube para ver como a ferramenta funciona:

[Assista ao vídeo aqui](EM_PRODUÇÃO)

---

## **Funcionalidades Principais**  
O chatbot possui quatro funcionalidades principais: 

1. **Correção de Código**  
   - O aluno pode enviar códigos com erros para o chatbot, que auxilia na correção e explica o que está errado.  

2. **Criação de Desafios**  
   - Gera desafios personalizados com base nos tópicos que o aluno estudou, incentivando a prática e o aprendizado ativo.  

3. **Estudo de Assuntos**  
   - Responde perguntas sobre conteúdos específicos que o aluno está estudando, permitindo revisão e aprofundamento.  

4. **Explicação de Comandos/Funções**  
   - Fornece explicações detalhadas sobre comandos e funções tecnológicas, ajudando a consolidar conceitos de programação.

---

## **Tecnologias Utilizadas**  

O **Chatbot Educacional** foi desenvolvido com as seguintes tecnologias:

### **Backend**  
- **Python 3.9**: A linguagem principal utilizada para o desenvolvimento do backend.  
- **FastAPI**: Framework moderno e rápido para a criação de APIs, utilizado para desenvolver a lógica de interação do chatbot.  
- **OpenAI API (Gpt-4o mini)**: A API da OpenAI é usada para alimentar o chatbot, permitindo respostas inteligentes baseadas em modelos de linguagem avançados.  

### **Frontend**  
- **React.js**: Biblioteca JavaScript para construir interfaces de usuário interativas e responsivas.  
- **HTML5 e CSS3**: Utilizados para estruturar e estilizar a página web, garantindo uma boa experiência do usuário.
- **TailwindCSS**: Framework CSS utilitário que permite estilização rápida e consistente, facilitando a criação de designs modernos e responsivos.
- **Axios**: Biblioteca para realizar requisições HTTP de forma simples e eficiente, utilizada para conectar o frontend ao backend.

### **Outras Ferramentas**  
- **Git**: Sistema de controle de versão para gerenciar o código-fonte do projeto.  
- **GitHub**: Para hospedagem do código e colaboração entre os desenvolvedores.  

---

## **Pré-requisitos**  

Antes de começar, você precisa garantir que possui as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- **Python 3.9+**  
  - A linguagem principal usada no backend.

- **Node.js 16+**  
  - Necessário para rodar o frontend.

Clone o repositório:
   ```bash
   git clone https://github.com/LaisOli22/eng-software.git
   ```
---

## **Configuração do Ambiente**  

### **Backend**  

1. Entre no diretório do backend:
   ```bash
   cd backend
   ```
2. Crie e ative um ambiente virtual:
   ```bash
   python -m venv venv
   ```
   
   - No Windows:
     ```bash
     venv\Scripts\activate
     ```
   - No macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
     
3. Instale as dependências do projeto:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure as variáveis de ambiente. Crie um arquivo `.env` no diretório raiz do backend com a seguinte estrutura:
   ```env
   AZURE_API_KEY=sua_chave_api_aqui
   AZURE_API_VERSION=sua_versao_api_aqui
   AZURE_ENDPOINT=seu_endpoint_aqui
   ```

### **Frontend**  
1. Entre no diretório do frontend:
   ```bash
   cd frontend
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```
   
---

## **Como Executar o Projeto**

### **Executar o Backend**

1. Certifique-se de que o ambiente virtual está ativo:
   
   - No Windows:
   ```bash
   venv\Scripts\activate
   ```
   - No macOS/Linux:
    ```bash
   source venv/bin/activate
    ```
    
2. Inicie o servidor do backend:
   ```bash
   uvicorn main:app --reload
   ```
   
3. O backend será iniciado e estará disponível em:
[http://127.0.0.1:8000](http://127.0.0.1:8000)

### **Executar o Frontend**

1. No diretório do frontend, inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. O frontend será iniciado e estará disponível em:
[http://localhost:3000](http://localhost:3000)

---

## **Imagens de Logs**

Abaixo estão alguns exemplos de logs gerados durante a execução do projeto:

### **Backend Log**  
![Exemplo de log do backend](backend_logs.png)

### **Frontend Log**  
![Exemplo de log do frontend](frontend_logs.png)

---

## **Contato 📬**

Se você tiver dúvidas, sugestões ou quiser contribuir com o projeto, entre em contato com os desenvolvedores:

- **Lais Oliveira**  
  📧 [lais.oli22@gmail.com](mailto:lais.oli22@gmail.com)  
  GitHub: [@LaisOli22](https://github.com/LaisOli22)

- **Giulia Buonafina**  
  📧 [gbsc@poli.br](mailto:gbsc@poli.br)  
  GitHub: [@GiuBuonafina](https://github.com/GiuBuonafina)

- **Bernardo Braga**  
📧 [bernardo.braga@upe.br](mailto:bernardo.braga@upe.br)  
GitHub: [@BernardoMFBraga](https://github.com/BernardoMFBraga)

---

   

