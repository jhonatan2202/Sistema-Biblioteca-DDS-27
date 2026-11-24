// IMPORTAÇÃO DO MÓDULO DO EXPRESS
const express = require("express")
const router = express.Router()

// IMPORTAR O CONTROLLER DO USUÁRIO
const usuarioControllers = require("../controllers/usuarioControllers")

// ROTAS DO USUÁRIO
// LOGIN
router.post("/login", usuarioControllers.login)

// CRUD
// MOSTRA A PÁGINA DE CRIAR USUÁRIOS
router.get("/cadastrar", (req,res) =>{
    res.render("usuarios/cadastrar")
})
// MANDAR AS INFORMAÇÕES DE CADASTRO PARA O CONTROLLER
router.post("/cadastrar",usuarioControllers.criar)

router.get("/editar", (req,res) =>{
    res.render("usuarios/editar")
})

router.get("/listar",usuarioControllers.listar)

router.get("/",usuarioControllers.listar)

// ROTA DE DELETAR UM USUÁRIO
router.post("/deletar/:id", usuarioControllers.deletarUsuario)




// EXPORTAR O ROUTER
module.exports = router