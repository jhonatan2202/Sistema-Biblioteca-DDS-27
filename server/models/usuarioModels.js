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
    criarUsuario: async (nome,email,senha,perfil) =>{
        // VARIÁVEL PARA GUARDAR O COMANDO SQL
        const sql = ` INSERT INTO tb_usuarios(nome,email,senha,perfil)
                      VALUES(?,?,?,?)`
        // EXECUTA O SQL
        const [resultado] = await db.execute(sql,[nome,email,senha,perfil])

        // RETORNA PARA O CONTROLLER O RESULTADO
        return resultado.insertId


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