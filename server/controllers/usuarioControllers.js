// IMPORTAÇÃO DO MODEL
const usuarioModels = require("../models/usuarioModels")

// EXPORTAR AS FUNÇÕES DO MODEL
module.exports = {
    // LOGIN
    login : (req,res) =>{
        // EXECUTAR A FUNÇÃO NO MODEL
        usuarioModels.login()

        // DIZ A RESPOSTA
        res.send("VOU CHAMAR O MODEL PRA LOGAR")
    },
    // CRUD
    // CREATE
    criarUsuario: (req,res) =>{
        usuarioModels.criarUsuario()
        res.send("Criei um usuário")
    },
    // READ
    listarUsuarios: (req,res) =>{
        usuarioModels.listarUsuarios()
        res.send("Mostre a lista de usuários")
    },
    // UPDATE
    atualizarUsuario: (req,res) =>{
        usuarioModels.atualizarUsuario()
        res.send("Atualizei um usuário")
    },
    // DELETE
    deletarUsuario: (req,res) =>{
        usuarioModels.deletarUsuario()
        res.send("Deletei um usuário")
    }
}
