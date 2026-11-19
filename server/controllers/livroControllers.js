// IMPORTAÇÃO DO MODEL
const livroModels = require("../models/livroModels")

// EXPORTAR AS FUNÇÕES DO MODEL
module.exports = {
    // // LOGIN
    // login : (req,res) =>{
    //     // EXECUTAR A FUNÇÃO NO MODEL
    //     usuarioModels.login()

    //     // DIZ A RESPOSTA
    //     res.send("VOU CHAMAR O MODEL PRA LOGAR")
    // },
    // CRUD
    // CREATE
    criarL: async (req,res) =>{
        try{
            // COLETA AS INFORMAÇÕES DO BODY DA REQUISIÇÃO
            const { titulo,ano_publicacao,esta_disponivel,autor,genero} = req.body
        
            // PASSA AS INFORMAÇÕES PARA O MODEL
            await livroModels.criarLivro(titulo,ano_publicacao,esta_disponivel,autor,genero)
        
            // REDIRECIONA PARA A PÁGINA DE LISTA DE USUÁRIO
            res.redirect("/usuarios")
        
        
            }
            catch(erro){
            // MOSTRA O ERRO NO TERMINAL
            console.log(erro)
            // RENDERIZA A PÁGINA DE ERRO, MOSTRANDO PRO USUÁRIO UMA MENSAGEM
            res.render("erro", {erro, mensagem: "Erro ao postar livro"})
            }
    },
//     // READ
//     listarUsuarios: (req,res) =>{
//         usuarioModels.listarUsuarios()
//         res.send("Mostre a lista de usuários")
//     },
//     // UPDATE
//     atualizarUsuario: (req,res) =>{
//         usuarioModels.atualizarUsuario()
//         res.send("Atualizei um usuário")
//     },
//     // DELETE
//     deletarUsuario: (req,res) =>{
//         usuarioModels.deletarUsuario()
//         res.send("Deletei um usuário")
//     }
}
