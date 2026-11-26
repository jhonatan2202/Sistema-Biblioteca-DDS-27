// IMPORTAÇÃO DO MODEL
const livroModels = require("../models/livroModels")

// EXPORTAR AS FUNÇÕES DO MODEL
module.exports = {
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
    // UPDATE
    atualizarLivro: (req,res) =>{
        livroModels.atualizarLivro()
        res.send("Atualizei um Livro")
    },
    deletarLivro: async (req,res) =>{
        try{
            // PEGAR O ID, VINDO DA URL, ATRAVÉS DOS PARÂMETROS 
            const idDaUrl = req.params.id

            // MANDA PRO MODEL O ID PARA ELE FAZER O SERVIÇO
            await livroModels.deletarLivro(idDaUrl)

            // REDIRECIONA PRA LISTA DE USUÁRIOS
            res.redirect("/livro") 
        }
        catch(erro){
            console.log(erro);
            res.render("erro", {erro,mensagem: "Erro ao deletar o livro"})
        }
    },
    // EDITAR
        renderizarEditar: async (req,res) =>{
            try{
                // PEGAR O ID, VINDO DA URL, ATRAVÉS DOS PARÂMETROS 
                const idDaUrl = req.params.id
    
                // CHAMA O MODEL, PARA COLETAR AS INFORMAÇÕES DO USUÁRIO
                const livroEditado = await livroModels.buscarPorId(idDaUrl)
    
                // RENDERIZA A PAGINA DE EDIAR, PASSANDO AS INFORMAÇÕES DO USUÁRIO
                res.render("livro/editar", {livroEditado})
            }
            catch(erro){
                console.log(erro);
                res.render("erro", {erro,mensagem: "Erro ao buscar o livro"})
            }
        },
        editar: async (req,res) =>{
            try{
            // PEGAR O ID, VINDO DA URL, ATRAVÉS DOS PARÂMETROS 
            const idDaUrl = req.params.id
    
            // COLETA AS INFORMAÇÕES DO BODY DA REQUISIÇÃO
            const { titulo,autor,ano_publicacao,genero,esta_disponivel} = req.body
    
            // PASSA AS INFORMAÇÕES PARA O MODEL
            await livroModels.atualizarLivro(idDaUrl,titulo,autor,ano_publicacao,genero,esta_disponivel)
    
            // REDIRECIONA PARA A PÁGINA DE LISTA DE USUÁRIO
            res.redirect("/livro")
            }
            catch(erro){
                console.log(erro);
                res.render("erro", {erro,mensagem: "Erro ao editar o livro"})
            }
        }
}
