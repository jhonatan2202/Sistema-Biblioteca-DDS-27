// IMPORTANDO AS CONFIGURAÇÕES DO BANCO
const db = require("../config/db")

// EXPORTAR AS FUNÇÕES DO MODEL
module.exports = {
    // LOGIN
    login : () =>{
        console.log("LOGIN USUÁRIO FUNCIONANDO");
    },
    // CRUD
    // CREATE
    criarUsuario: () =>{
        console.log("CRIEI UM USUÁRIO");
    },
    // READ
    listarUsuarios: () =>{
        console.log("TOMA AI OS USUÁRIOS");
    },
    // UPDATE
    atualizarUsuario: () =>{
        console.log("ATUALIZEI UM USUÁRIOS");
    },
    // DELETE
    deletarUsuario: () =>{
        console.log("APAGAR UM USUÁRIO");
    }
}