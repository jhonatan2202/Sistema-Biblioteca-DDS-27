// IMPORTANDO AS CONFIGURAÇÕES DO BANCO
const db = require("../config/db")

// EXPORTAR AS FUNÇÕES DO MODEL
module.exports = {
    // LOGIN
    // login : () =>{
    //     console.log("LOGIN USUÁRIO FUNCIONANDO");
    // },
    // CRUD
    // CREATE
    criarLivro: async (titulo,autor,ano_publicacao,genero,esta_disponivel) =>{
        // VARIÁVEL PARA GUARDAR O COMANDO SQL
        const sql = ` INSERT INTO tb_livros(titulo,autor,ano_publicacao,genero,esta_disponivel)
                      VALUES(?,?,?,?,?)`
        // EXECUTA O SQL
        const [resultado] = await db.execute(sql,[titulo,autor,ano_publicacao,genero,esta_disponivel])

        // RETORNA PARA O CONTROLLER O RESULTADO
        return resultado.insertId
        
    },
    // READ
    listarLivros: async () =>{
        // VARIAVEL PARA GUARDAR O COMANDO SQL
        const sql = `SELECT * FROM tb_usuarios`
        // EXECUTA O SQL
        const [linhas] = await db.execute(sql)

        // RETORNA PARA O CONTROLLER O RESULTADO
        return linhas
    },
    // // UPDATE
    // atualizarUsuario: () =>{
    //     console.log("ATUALIZEI UM USUÁRIOS");
    // },
    // // DELETE
    // deletarUsuario: () =>{
    //     console.log("APAGAR UM USUÁRIO");
    // }
}