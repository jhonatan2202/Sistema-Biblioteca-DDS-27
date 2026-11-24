// IMPORTAÇÃO DO MODEL
const usuarioModels = require("../models/usuarioModels")

// EXPORTAR AS FUNÇÕES DO MODEL
module.exports = {
    // LOGIN
    login: async (req,res) =>{
        try{
            // COLETA AS INFORMAÇÕES DO BODY DA REQUISIÇÃO
            const { email,senha} = req.body

            // PASSA AS INFORMAÇÕES PARA O MODEL
            const usuarioLogado = await usuarioModels.login(email, senha)

            // VALIDAÇÃO DO USUÁRIO, SENDO FALSO, RETORNA A PÁGINA DE ERRO
            if(!usuarioLogado){
                return res.render("erro", {erro, mensagem: "Credenciais inválidas"})
            }

            // GUARDA O USUÁRIO NA SESSÃO
            req.session.usuario = usuarioLogado

            // ATIVA A FUNÇÃO DE SALVAR, E GARANTE QUE TERÁ UMA SESSION
            req.session.save( (erro) =>{
                // SE DEU ERRO AO SALVAR INFORMA
                if(erro){
                    return res.render("erro", {erro, mensagem: "Erro ao criar sessão"})
                }

                // SE DEU CERTO REDIRECIONA
                return res.redirect("/usuarios")
            })
        }
        catch(erro){
            // MOSTRA O ERRO NO TERMINAL
            console.log(erro)
            // RENDERIZA A PÁGINA DE ERRO, MOSTRANDO PRO USUÁRIO UMA MENSAGEM
            res.render("erro", {erro, mensagem: "Erro ao logar"})
        }
    },
    // CRUD
    // CREATE
    criar: async (req,res) =>{
        try{
            // COLETA AS INFORMAÇÕES DO BODY DA REQUISIÇÃO
            const { nome,email,senha,perfil} = req.body

            // PASSA AS INFORMAÇÕES PARA O MODEL
            await usuarioModels.criarUsuario(nome,email,senha,perfil)

            // REDIRECIONA PARA A PÁGINA DE LISTA DE USUÁRIO
            res.redirect("/usuarios")


        }
        catch(erro){
            // MOSTRA O ERRO NO TERMINAL
            console.log(erro)
            // RENDERIZA A PÁGINA DE ERRO, MOSTRANDO PRO USUÁRIO UMA MENSAGEM
            res.render("erro", {erro, mensagem: "Erro ao criar o usuário"})
        }

    },
    // READ
    listar: async (req,res) =>{
        try{
            // EXECUTAR O MODEL
            const listaUsuarios = await usuarioModels.listarUsuarios()
            // RENDERIZA A TELA DE LISTA, PASSANDO O QUE O MODEL TE MANDOU
            res.render('usuarios/listar', { listaUsuarios })
        }
        catch(erro){
            console.log(erro);
            res.render("erro", {erro,mensagem: "Erro ao listar os usuários"})
        }
    },
    // UPDATE
    atualizarUsuario: (req,res) =>{
        usuarioModels.atualizarUsuario()
        res.send("Atualizei um usuário")
    },
    // DELETE
    deletarUsuario: async (req,res) =>{
        try{
            // PEGAR O ID, VINDO DA URL, ATRAVÉS DOS PARÂMETROS 
            const idDaUrl = req.params.id

            // MANDA PRO MODEL O ID PARA ELE FAZER O SERVIÇO
            await usuarioModels.deletarUsuario(idDaUrl)

            // REDIRECIONA PRA LISTA DE USUÁRIOS
            res.redirect("/usuarios") 
        }
        catch(erro){
            console.log(erro);
            res.render("erro", {erro,mensagem: "Erro ao deletar o usuário"})
        }
    }
}
