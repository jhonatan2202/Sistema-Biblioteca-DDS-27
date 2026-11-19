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

// // MANDAR AS INFORMAÇÕES DE CADASTRO PARA O CONTROLLER
// router.post("/cadastrar",usuarioControllers.criar)

// router.get("/listar", (req,res) =>{
//     res.render("usuarios/listar")
// })

// router.get("/editar", (req,res) =>{
//     res.render("usuarios/editar")
// })

// router.get("/", (req,res)=>{
//     res.send("MOSTRANDO A LISTA DE USUÁRIOS")
// })


// EXPORTAR O ROUTER
module.exports = router