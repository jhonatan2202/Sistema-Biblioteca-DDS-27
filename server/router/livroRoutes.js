// IMPORTAÇÃO DO MÓDULO DO EXPRESS
const express = require("express")
const router = express.Router()

// IMPORTAR O CONTROLLER DO USUÁRIO
const livroControllers = require("../controllers/livroControllers")

// CRUD

// MOSTRA A PÁGINA DE CADASTRAR LIVRO
router.get("/cadastro", (req,res) =>{
    res.render("livro/cadastro")
})
// MANDAR AS INFORMAÇÕES DE CADASTRO PARA O CONTROLLER
router.post("/cadastro",livroControllers.criarL)


// MOSTRA A ROTA DE EDITAR USUÁRIO
router.get("/editar/:id", livroControllers.renderizarEditar)
// MANDAR AS INFORMAÇÕES DE CADASTRO PARA O CONTROLLER
router.post("/editar/:id", livroControllers.editar)


// MOSTRA A ROTA DE LISTAR LIVROS
router.get("/",livroControllers.listar)

// ROTA DE DELETAR UM LIVRO
router.post("/deletar/:id", livroControllers.deletarLivro)


// EXPORTAR O ROUTER
module.exports = router