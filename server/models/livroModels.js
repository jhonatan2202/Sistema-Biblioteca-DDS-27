// IMPORTANDO AS CONFIGURAÇÕES DO BANCO
const db = require("../config/db")

// EXPORTAR AS FUNÇÕES DO MODEL
module.exports = {
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
        const sql = `SELECT * FROM tb_livros`
        // EXECUTA O SQL
        const [linhas] = await db.execute(sql)

        // RETORNA PARA O CONTROLLER O RESULTADO
        return linhas
    },
    // UPDATE
    atualizarLivro: async (id,titulo,autor,ano_publicacao,genero,esta_disponivel) =>{
        // VARIÁVEL PARA GUARDAR O COMANDO SQL
        const sql = `UPDATE tb_livros
                    SET titulo = ?,autor = ?,ano_publicacao = ?,genero = ?,esta_disponivel = ?
                    WHERE id_livro = ?`
        // EXECUTA O SQL
        const [resultado] = await db.execute(sql, [titulo,autor,ano_publicacao,genero,esta_disponivel,id])
        // RETORNA PRO CONTROLLER O RESULTADO
        return resultado.affectedRows
    },
    deletarLivro: async (id) =>{
        // VARIÁVEL PARA GUARDAR O COMANDO SQL
        const sql = `DELETE FROM tb_livros WHERE id_livro = ?`
        // EXECUTA O SQL
        const [resultado] = await db.execute(sql, [id])
        // RETORNA PRO CONTROLLER O RESULTADO
        return resultado.affectedRows
},
    // EDITAR
    buscarPorId: async (id) =>{
        // VARIÁVEL PARA GUARDAR O COMANDO SQL
        const sql = `SELECT * FROM tb_livros WHERE id_livro = ?`
        // EXECUTA O SQL
        const [resultado] = await db.execute(sql, [id])
        // RETORNA PRO CONTROLLER O RESULTADO
        return resultado[0]
    }
}