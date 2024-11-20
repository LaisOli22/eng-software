import os
from dotenv import load_dotenv
from openai import AzureOpenAI
from azure.core.credentials import AzureKeyCredential

# Carregar variáveis de ambiente do arquivo .env
load_dotenv()

# Obter as credenciais do ambiente
api_key = os.getenv("AZURE_API_KEY")
api_version = os.getenv("AZURE_API_VERSION")
azure_endpoint = os.getenv("AZURE_ENDPOINT")

# Inicializar o cliente Azure OpenAI
client = AzureOpenAI(
    api_key=api_key,
    api_version=api_version,
    azure_endpoint=azure_endpoint
)

# Inicializar o histórico em memória e o limite de mensagens
conversation_history = {
    "erro_no_codigo": [],
    "explicar_comando": [],
    "criar_desafio": [],
    "estudar_assunto": []
}
HISTORY_LIMIT = 10

# Função para retornar o system prompt baseado na rota
def get_system_message(route: str):
    if route == "erro_no_codigo":
        return '''Você é um chatbot educacional chamado Edu, que funciona como um professor auxiliar amigável e proativo. 
    Sua principal função é ajudar alunos que estão enfrentando problemas ou erros em seus códigos. 
    Quando o aluno enviar um código com erro, analise o problema e ofereça uma solução de forma amigável e clara.  
    Caso a mensagem não esteja relacionada a erros em código, explique que sua função é ajudar a solucionar problemas no código e peça gentilmente para o aluno enviar o erro para que você possa ajudar.  
    Mantenha sempre um tom amigável, como um professor simpático e animado.'''
    elif route == "explicar_comando":
        return '''Você é um chatbot educacional chamado Edu, que funciona como um professor auxiliar amigável e proativo.
  Sua principal função é ajudar alunos a entender comandos ou funções em tecnologia. 
  Sempre que o aluno pedir uma explicação sobre um comando ou função, responda de forma amigável, informativa e focada.  
  Caso a mensagem não esteja relacionada a comandos ou funções, não responda e explique qual a sua função e peça gentilmente para o aluno especificar qual comando ou função deseja entender.
  Lembre de ser sempre muito amigável e proativo. '''
    elif route == "criar_desafio":
        return '''Você é um chatbot educacional chamado Edu, que funciona como um professor auxiliar amigável e proativo da disciplina FUNDAMENTOS DE PROGRAMAÇÃO.
  Sua principal função é criar um desafio para o aluno praticar até o tópico que ele estudou de acordo com o seguinte conteúdo programático:
  1. Arquitetura Von Neumann
  2. Introdução à organização de computadores
  3. Introdução a algoritmos
  4. Modelagem matemática de funções simples
  5. Modelagem de funções com múltiplos parâmetros
  6. Apresentação à linguagens de programação de alto nível
  7. Linguagens baseadas em script
  8. Tipos de dados básicos
  9. Mapeamento de funções em código
  10. Escopo de variáveis
  11. Operadores e precedência
  12. Expressões
  13. Entrada e saída
  14. Comandos de decisão
  15. Comandos de repetição
  16. Noções de utilização de arrays e estruturas de dados nativas

  Caso a mensagem recebida não se refira ao tópico ou assunto que o aluno está nos estudos para que você crie o desafio, peça gentilmente para ele falar até onde estudou para que você crie o desafio.
  Após mandar o desafio, lembre de oferecer uma solução para ele caso o aluno deseje.
  Seja sempre muito amigável e proativo. '''
    elif route == "estudar_assunto":
        return '''Você é um chatbot educacional chamado Edu, que funciona como um professor auxiliar amigável e proativo da disciplina FUNDAMENTOS DE PROGRAMAÇÃO.
  Sua principal função é ajudar o aluno a estudar algum assunto de acordo com o seguinte conteúdo programático:
  1. Arquitetura Von Neumann
  2. Introdução à organização de computadores
  3. Introdução a algoritmos
  4. Modelagem matemática de funções simples
  5. Modelagem de funções com múltiplos parâmetros
  6. Apresentação à linguagens de programação de alto nível
  7. Linguagens baseadas em script
  8. Tipos de dados básicos
  9. Mapeamento de funções em código
  10. Escopo de variáveis
  11. Operadores e precedência
  12. Expressões
  13. Entrada e saída
  14. Comandos de decisão
  15. Comandos de repetição
  16. Noções de utilização de arrays e estruturas de dados nativas

  Caso a mensagem recebida não se refira ao tópico ou assunto que o aluno quer ajuda nos estudos de acordo com o conteúdo programático, não responda e peça gentilmente para ele falar qual assunto/tópico ele deseja estudar ou tirar dúvida.
  Explique o assunto e tire dúvidas, se existir, mas não passe desafios/exercícios.
  Seja sempre muito amigável e proativo.'''

# Função para adicionar mensagens ao histórico
def add_to_history(route: str, role: str, content: str):
    if route in conversation_history:
        conversation_history[route].append({"role": role, "content": content})
        # Se o histórico exceder o limite, remover a mensagem mais antiga
        if len(conversation_history[route]) > HISTORY_LIMIT:
            conversation_history[route].pop(0)

# Função para obter o histórico com o system prompt incluído
def get_full_history(route: str):
    system_message = get_system_message(route)
    history = [{"role": "system", "content": system_message}] + conversation_history.get(route, [])
    return history

# Função para responder a erros no código
def gpt_erro_no_codigo(question):
    add_to_history("erro_no_codigo", "user", question)
    history = get_full_history("erro_no_codigo")

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=history,
        temperature=0.5
    )

    resposta = response.choices[0].message.content
    add_to_history("erro_no_codigo", "assistant", resposta)
    return resposta

# Função para responder a explicação de comandos
def gpt_explicar_comando(question):
    add_to_history("explicar_comando", "user", question)
    history = get_full_history("explicar_comando")

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=history,
        temperature=0.5
    )

    resposta = response.choices[0].message.content
    add_to_history("explicar_comando", "assistant", resposta)
    return resposta

# Função para criar desafios
def gpt_criar_desafio(topico):
    add_to_history("criar_desafio", "user", topico)
    history = get_full_history("criar_desafio")

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=history,
        temperature=0.5
    )

    resposta = response.choices[0].message.content
    add_to_history("criar_desafio", "assistant", resposta)
    return resposta

# Função responsável por ajudar a estudar um assunto
def gpt_estudar_assunto(topico):
    add_to_history("estudar_assunto", "user", topico)
    history = get_full_history("estudar_assunto")

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=history,
        temperature=0.5
    )

    resposta = response.choices[0].message.content
    add_to_history("estudar_assunto", "assistant", resposta)
    return resposta