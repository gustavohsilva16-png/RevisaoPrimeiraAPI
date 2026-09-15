/*CRUD
CREATE
READ
UPDATE
DELETE*/

/*Para baixar cors e express:

npm i express cors*/
const express = require("express");
const cors = require("cors");

/*require é a ferramenta de importação*/

//import express from "express";
//import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
//{
    //"nome": "Pedro",
    //"curso": "Desenvolvimento de sistema"
//}

let ALUNOS =[

    {id: 1, nome:"Alice", curso: "Desenvolvimento de Sistemas"},
    {id: 2, nome:"Brenda", curso: "Redes de computadores"},
    {id: 3, nome:"Demi", curso: "Administração"},
    {id: 4, nome:"Dime", curso: "Desenvolvimento de Sistemas"}
];

app.get("/", (req, res) =>{
    /*req res é uma abreviação*/
    res.json({
        mensagem: "API alunos funcionando!"
    });
});

const PORTA = 3000;

app.listen(PORTA, () => {
    console.log(`Servidor iniciado com sucesso!!`);
    console.log(`http://localhost:${`${PORTA}`}`)
})