const express = require("express");
const router = express.Router();
const Question = require("../models/question");

//Criar uma nova pergunta e resposta
router.post("/", async (req, res) => {
  try {
    const { question, answer } = req.body;

    const newQuestion = new Question({
      question,
      answer,
    });

    const savedQuestion = await newQuestion.save();
    res.json(savedQuestion);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar pergunta" });
  }
});

//Listar todas as perguntas
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: "Erro ao listar perguntas" });
  }
});

//Obter uma pergunta por ID
router.get("/:id", async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ error: "Pergunta não encontrada" });
    }
    res.json(question);
  } catch (err) {
    res.status(500).json({ error: "Erro ao obter a pergunta" });
  }
});

//Atualizar uma pergunta e resposta
router.put("/:id", async (req, res) => {
  try {
    const { question, answer } = req.body;
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      { question, answer },
      { new: true }
    );
    res.json(updatedQuestion);
  } catch (err) {
    res.status(500).json({ error: "Erro ao atualizar a pergunta" });
  }
});

//Deletar uma pergunta por ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
    if (!deletedQuestion) {
      return res.status(404).json({ error: "Pergunta não encontrada" });
    }
    res.json({ message: "Pergunta removida" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao deletar a pergunta" });
  }
});

module.exports = router;
