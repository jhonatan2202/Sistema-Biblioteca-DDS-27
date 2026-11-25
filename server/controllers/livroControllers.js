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
            const {titulo,autor,ano_publicacao,genero,esta_disponivel} = req.body
        
            // PASSA AS INFORMAÇÕES PARA O MODEL
            await livroModels.criarLivro(titulo,autor,ano_publicacao,genero,esta_disponivel)
        
            // REDIRECIONA PARA A PÁGINA DE LISTA DE USUÁRIO
            res.redirect("/livro")
        
        
            }
            catch(erro){
            // MOSTRA O ERRO NO TERMINAL
            console.log(erro)
            // RENDERIZA A PÁGINA DE ERRO, MOSTRANDO PRO USUÁRIO UMA MENSAGEM
            res.render("erro", {erro, mensagem: "Erro ao postar livro"})
            }
    },
    // READ
    listar: async (req,res) =>{
        try{
            // EXECUTAR O MODEL
            const listaLivros = await livroModels.listarLivros()
            // RENDERIZA A TELA DE LISTA, PASSANDO O QUE O MODEL TE MANDOU
            res.render('livro/listar', { listaLivros })
        }
        catch(erro){
            console.log(erro);
            res.render("erro", {erro,mensagem: "Erro ao listar os livros"})
        }
    },
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
