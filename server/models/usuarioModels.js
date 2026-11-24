// IMPORTANDO AS CONFIGURAÇÕES DO BANCO
const db = require("../config/db")

// EXPORTAR AS FUNÇÕES DO MODEL
module.exports = {
    // LOGIN
    login : async (email,senha) =>{
        // VARIAVEL PARA GUARDA SQL
        const sql = `SELECT * FROM tb_usuarios 
                     WHERE email = ? AND senha = ? `
        // EXECUTAR SQL
        const [resultado] = await db.execute(sql, [email, senha])
        // RETORNAR PRO CONTROLLER O RESULTADO
        return resultado[0] || null

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
    listarUsuarios: async () =>{
        // VARIAVEL PARA GUARDAR O COMANDO SQL
        const sql = `SELECT * FROM tb_usuarios`
        // EXECUTA O SQL
        const [linhas] = await db.execute(sql)

        // RETORNA PARA O CONTROLLER O RESULTADO
        return linhas
    },
    // UPDATE
    atualizarUsuario: async (id,nome,email,senha,perfil) =>{
        // VARIÁVEL PARA GUARDAR O COMANDO SQL
        const sql = `UPDATE tb_usuarios
                    SET nome = ?,email = ?,senha = ?,perfil = ?
                    WHERE id_usuario = ?`
        // EXECUTA O SQL
        const [resultado] = await db.execute(sql, [nome,email,senha,perfil,id])
        // RETORNA PRO CONTROLLER O RESULTADO
        return resultado.affectedRows
    },
    // DELETE
    deletarUsuario: async (id) =>{
        // VARIÁVEL PARA GUARDAR O COMANDO SQL
        const sql = `DELETE FROM tb_usuarios WHERE id_usuario = ?`
        // EXECUTA O SQL
        const [resultado] = await db.execute(sql, [id])
        // RETORNA PRO CONTROLLER O RESULTADO
        return resultado.affectedRows
    },
    // EDITAR
    buscarPorId: async (id) =>{
        // VARIÁVEL PARA GUARDAR O COMANDO SQL
        const sql = `SELECT * FROM tb_usuarios WHERE id_usuario = ?`
        // EXECUTA O SQL
        const [resultado] = await db.execute(sql, [id])
        // RETORNA PRO CONTROLLER O RESULTADO
        return resultado[0]
    }
}