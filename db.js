const mysql = require("mysql2/promise");


const conexao = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "senai2026",
    database: "Turmads1b",
    port:3306,
});

module.exports = conexao;