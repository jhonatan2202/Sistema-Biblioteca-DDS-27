// IMPORTAÇÃO DO MÓDULO DO EXPRESS
const express = require("express")
const router = express.Router()

// IMPORTAR O CONTROLLER DO USUÁRIO
const usuarioControllers = require("../controllers/usuarioControllers")

// ROTAS DO USUÁRIO
// LOGIN
router.get("/login", usuarioControllers.login)

// CRUD
// MOSTRA A PÁGINA DE CRIAR USUÁRIOS
router.get("/cadastrar", (req,res) =>{
    res.render("usuarios/cadastrar")
})

router.get("/listar", (req,res) =>{
    res.render("usuarios/listar")
})

router.get("/editar", (req,res) =>{
    res.render("usuarios/editar")
})

router.get("/", (req,res)=>{
    res.send("MOSTRANDO A LISTA DE USUÁRIOS")
})


// EXPORTAR O ROUTER
module.exports = router