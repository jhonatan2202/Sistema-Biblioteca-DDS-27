// IMPORTAÇÃO DO MÓDULO DO EXPRESS
const express = require("express")
const app = express()

// MODULO DO NODE PARA LIDAR COM CAMINHO DE ARQUIVOS
const path = require("path")

// IMPORTAR O MÓDULO DO DOTENV, LÊ O ARQUIVO .ENV, E JÁ CONFIGURA O BANCO
require('dotenv').config()

// DEFINE A PORTA DO SERVIDOR 
const port = process.env.PORT || 5000

// CONFIGURAR O EJS COMO TEMPLATE ENGINE
// define o ejs como engine do front - interpreta as paginas
app.set("view engine", "ejs")
//APONTAR PARA O EJS ONDE ESTAO AS PAGINAS
app.set("views", path.join(__dirname,"../client/views") )

// MIDDLEWARE PARA ENTENDER O JSON
// LÊ OS DADOS
app.use(express.json())
// ********** DUVIDA
app.use(express.urlencoded({extended:true}))

// CRIAÇÃO DAS ROTAS

// IMPORTAR AS ROTAS DE USUÁRIO E LIVRO
const usuarioRoutes = require("./router/usuarioRoutes.js")
app.use("/usuarios", usuarioRoutes)

const livroRoutes = require("./router/livroRoutes.js")
app.use("/livro", livroRoutes)

// ROTAS PÚBLICAS
app.get("/", (req, res) => {
    res.render('index')
})

app.get("/login", (req, res) => {
 res.render('login')
})

// TRAZ AS CONFIGURAÇÕES DO BANCO
const pool = require("./config/db.js");


// FORÇA A CONEXÃO COM O BANCO

(
    async () =>{
        try{
            await pool.getConnection()
            console.log("Banco foi conectado 😃");
            // SE O BANCO SUBIU, SOBRE O BACKEND

            // FUNÇÃO PARA SUBIR O SERVIDOR
            app.listen(port, () =>{
                console.log(`Servidor na porta: ${port}`);
                console.log(`Link: http://localhost:${port}`);
            })
        }
        catch(erro){
            console.log("erro ao conectar ao banco");
            process.exit(1)
             //SE DE ERRO ENCERRA A TENTATIVA
        }
    }
)()