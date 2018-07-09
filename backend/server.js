db = null;
pdb = null;

//Pacote que cria o server
let express = require('express');
//Conversa o couch DB
let prom_nano = require('nano-promises');
let nano = require("nano")("http://localhost:5984");
//Belive
let cors = require("cors");
//Interpretar a requisição
let bodyParser = require("body-parser");




nano.dbcreate("data", (err, body) => {
	//se deu erro em criar o DB
	if(err){
		//cagou
		console.log("erro em criar o DB");
		return;
	}
	//se não due erro em criar 
	db = nano.use("data");
	pdb = prom_nano(nano).db.use;
})
