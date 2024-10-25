from fastapi import FastAPI
from pydantic import BaseModel
from funcionalidades_ia import gpt_erro_no_codigo, gpt_explicar_comando

# Definir o modelo de dados para entrada (pergunta do usuário)
class QuestionRequest(BaseModel):
    question: str

# Inicializar o app FastAPI
app = FastAPI()

# Endpoint para erros no código
@app.post("/erro_no_codigo")
async def erro_no_codigo(request: QuestionRequest):
    resposta = gpt_erro_no_codigo(request.question)
    return {"resposta": resposta}

# Endpoint para explicar comando ou função
@app.post("/explicar_comando")
async def explicar_comando(request: QuestionRequest):
    resposta = gpt_explicar_comando(request.question)
    return {"resposta": resposta}

