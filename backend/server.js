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
let body_parser = require("body-parser");


nano.db.create("data", (err, body) => {
	console.log("Criando o DB");
	//se deu erro em criar o DB
	if(err.statusCode == 412){
		console.log("DB ja existe");
	}
	if(err.statusCode != 412){
		//cagou
		console.log("erro em criar o DB");
		throw err.Error;
	}
	//se não due erro em criar 
	db = nano.use("data");
	pdb = prom_nano(nano).db.use("data");
})

var server = express();
server.use(cors());
server.use(body_parser.json());


function listDB(req, res){
	console.log("ENTREI NO LSIT");
	console.log("--Get:[" + req.originalUrl + "]");
	let doc = req.params.doc;
	list = [];

	db.get(doc, function(err, body){
		//se deu erro
		if(err){
			let ERRO = "Erro no listDB:" + err;
			console.log(ERRO);
			//retornar  um json descrito o erro
			res.end(JSON.stringify({
				ok:false,
				msg: ERRO
			}))
			return;
		}
		//percorrendo o vetor que esta dentro do doc
		console.log("Retorno do get:" + body);
		for(let i in body.users){
			console.log("body[" + i + "]:" + JSON.stringify(body.users[i], null,4));
			list.push(JSON.stringify(body.users[i]));
		}
		//retornando o resultado
		res.end(JSON.stringify({
			ok:true,
			msg: "SUCESSO",
			retorno: list
		}))
	})
}

function getDB(req, res){
	console.log("Entrei no getDB");
	console.log("--Get:[" + req.originalUrl + "]");
	res.end("maracutaia");
/*
	let id = req.params.id;
	let doc = req.params.doc;

	db.get(doc,(err,body) => {
		data = JSON.parse(body);
		users = JSON.parse(body.users);
		for (var i = 0; i < users.length; i++) {
			if(users[i].email == id){
				console.log(users[i]);
			}
		}
	})*/
}


function postDB(req, res){
	console.log("entrei no postDB");
	console.log("--Get:[" + req.originalUrl + "]");
	return null;

}

function updateDB(req, res){
	console.log("entrei no updateDB");
	console.log("--Get:[" + req.originalUrl + "]");
	return null;

}

function deleteDB(req, res){
	console.log("--Get:[" + req.originalUrl + "]");
	return null;

}

server.get("/get/:doc", listDB);
server.get("/get/:doc/:id", getDB);
server.post("/add/:doc/:id",postDB);
server.put("/update/:doc/:id",updateDB);
server.delete("/dxelete/:doc/:id", deleteDB);

console.log("Criando o server");
let SERVER = server.listen(8080, function(){
	console.log("host: "+SERVER.address().address +
	 			" port: " + SERVER.address().port);
})
