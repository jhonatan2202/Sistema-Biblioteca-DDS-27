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
    criarLivro: async (titulo,ano_publicacao,esta_disponivel,autor,genero) =>{
        // VARIÁVEL PARA GUARDAR O COMANDO SQL
        const sqlL = ` INSERT INTO tb_livros(titulo,ano_publicacao,esta_disponivel,autor,genero)
                      VALUES(?,?,?,?,?)`
        // EXECUTA O SQL
        const [resultadoL] = await db.execute(sqlL,[titulo,ano_publicacao,esta_disponivel,autor,genero])

        // RETORNA PARA O CONTROLLER O RESULTADO
        return resultadoL.insertId
        
    },
    // // READ
    // listarUsuarios: () =>{
    //     console.log("TOMA AI OS USUÁRIOS");
    // },
    // // UPDATE
    // atualizarUsuario: () =>{
    //     console.log("ATUALIZEI UM USUÁRIOS");
    // },
    // // DELETE
    // deletarUsuario: () =>{
    //     console.log("APAGAR UM USUÁRIO");
    // }
}