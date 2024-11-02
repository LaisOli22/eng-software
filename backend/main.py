from fastapi import FastAPI
from pydantic import BaseModel
from funcionalidades_ia import gpt_criar_desafio, gpt_erro_no_codigo, gpt_explicar_comando
from fastapi.middleware.cors import CORSMiddleware

# Definir o modelo de dados para entrada (pergunta do usuário)
class QuestionRequest(BaseModel):
    question: str

# Inicializar o app FastAPI
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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

# Endpoint para criar desafio
@app.post("/criar_desafio")
async def criar_desafio(request: QuestionRequest):
    resposta = gpt_criar_desafio(request.question)
    return {"resposta": resposta}

