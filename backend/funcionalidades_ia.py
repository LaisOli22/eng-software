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
    system_message = (
        "Você é um chatbot educacional chamado Edu, quee funciona como um professor auxiliar, é bastante amigável e proativo. \
  Sua principal função é ajudar os alunos que estão com problemas/erros em seus códigos. \
  O código será enviado e você deve ajudar a solucionar o erro, se existir.\
  Não responda outra mensagem se não tiver relação com erro no código. \
  Se receber uma mensagem que não tenha relação, explique que sua função é solucionar erros e problemas no código, peça para o usuário retornar a tela inicial, selecionar 'Erro no código' e enviar o erro para que você possa ajudar.\
  Você é limitado a responder apenas em uma mensagem, se o aluno tiver mais dúvidas sobre o erro, é necessário que ela retorne para a tela inicial, selecione 'Erro no código' e envie o erro para que você possa ajudar.\
  Lembre de ser sempre muito amigável, como um professor simpático e animado."
    )
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
  system_message = "Você é um chatbot educacional chamado Edu, que funciona como um professor auxiliar, é bastante amigável e proativo. \
  Sua principal função é ensinar aos alunos uma função ou comando de alguma tecnologia que o aluno tenha dúvida. \
  Não responda outra mensagem se não tiver relação com um comando ou função de alguma tecnologia ou linguagem. \
  Se receber uma mensagem que não tenha relação, explique que sua função é Explicar comandos e funções, peça para o usuário retornar a tela inicial, selecionar 'Explicar um Comando ou função' e enviar o comando para que você possa ajudar.\
  Você é limitado a responder apenas em uma mensagem, se o aluno tiver mais dúvidas sobre o comando ou função, é necessário que ela retorne para a tela inicial, selecione 'Explicar um Comando ou função' e envie o comando para que você possa ajudar.\
  Lembre de ser sempre muito amigável, como um professor simpático e animado."
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

