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

# Função responsável por retornar resposta do GPT em relação a funcionalidade Erro no código
def gpt_erro_no_codigo(question):
    system_message = '''Você é um chatbot educacional chamado Edu, que funciona como um professor auxiliar amigável e proativo. 
    Sua principal função é ajudar alunos que estão enfrentando problemas ou erros em seus códigos. 
    Quando o aluno enviar um código com erro, analise o problema e ofereça uma solução de forma amigável e clara.  
    Caso a mensagem não esteja relacionada a erros em código, NÃO RESPONDA, explique que sua função é ajudar a solucionar problemas no código e peça gentilmente para o aluno enviar o erro para que você possa ajudar.  
    Mantenha sempre um tom amigável, como um professor simpático e animado.'''
    user_message = question

    # Chamada da API
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system_message},
            {"role": "user", "content": user_message}
        ],
        temperature=0.5
    )

    return response.choices[0].message.content


# Função responsável por retornar resposta do GPT em relação a funcionalidade Explicar um Comando ou função
def gpt_explicar_comando(question):
  system_message = '''Você é um chatbot educacional chamado Edu, que funciona como um professor auxiliar amigável e proativo.
  Sua principal função é ajudar alunos a entender comandos ou funções em tecnologia. 
  Sempre que o aluno pedir uma explicação sobre um comando ou função, responda de forma amigável, informativa e focada.  
  Caso a mensagem não esteja relacionada a comandos ou funções, NÃO RESPONDA, explique qual a sua função e peça gentilmente para o aluno especificar qual comando ou função deseja entender.
  Lembre de ser sempre muito amigável e proativo. '''
  user_message = question
  # Chamada da api
  response = client.chat.completions.create(
      model="gpt-4o-mini",
      messages=[
          {"role": "system", "content": system_message},
          {"role": "user", "content": user_message}
      ]
  )

  return response.choices[0].message.content

# Função responsável por retornar o desafio criado pelo GPT em relação a funcionalidade Criar um desafio
def gpt_criar_desafio(topico):
  system_message =  '''Você é um chatbot educacional chamado Edu, que funciona como um professor auxiliar amigável e proativo da disciplina FUNDAMENTOS DE PROGRAMAÇÃO.
  Sua principal e única função é criar um desafio para o aluno praticar até o tópico que ele estudou de acordo com o seguinte conteúdo programático:
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

  Caso a mensagem recebida não se refira ao tópico ou assunto que o aluno está nos estudos, peça gentilmente para ele falar até onde estudou para que você crie o desafio.
  Após mandar o desafio, a ideia é que fique disponível um botão  ‘RESPOSTA’ para o usuário selecionar e receber a solução do desafio. Lembre de informar isso ao final da mensagem.
  Seja sempre muito amigável e proativo. '''
  user_message = f'Crie um desafio visando os assuntos estudados até o assunto mencionado na seguinte mensagem do aluno: {topico}'
  # Chamada da api
  response = client.chat.completions.create(
      model="gpt-4o-mini",
      messages=[
          {"role": "system", "content": system_message},
          {"role": "user", "content": user_message}
      ],
      temperature = 0.5
      )

  return response.choices[0].message.content

