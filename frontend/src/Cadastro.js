import React from 'react';

const URL = "http://127.0.0.1:5984";

var xhr;
function testDB(){
	window.alert("Inicializando o db");
	xhr = new XMLHttpRequest();
	xhr.open('GET','http://localhost:5984/', false);
	xhr.onreadystatechange = function(){
		if (this.readyState == 4 && this.satatus == 200) {
			document.getElementById("testelegal").innerHTML = this.responseText;
		}
	};
	xhr.send();
	window.alert("resposta: " + xhr.responseText.toString());
}

function updateDB(dbName, docName, data) {
    var req = new XMLHttpRequest();
	window.alert("voufazer o req.open(" +"PUT" + URL + '/' + dbName + '/' + docName+ ')');
    req.open("PUT", URL + '/' + dbName + '/' + docName, true);
    req.setRequestHeader("Content-type", "application/json");

    req.send(JSON.stringify(data));
}


function getDB(dbName, docName, data) {
	window.alert("entrei no getDB");
    var req = new XMLHttpRequest();
	window.alert("fiz o req");
	window.alert("voufazer o req.open(" +"GET" + URL + '/' + dbName + '/' + docName + ')');
    req.open("GET", URL + '/' + dbName + '/' + docName, true);
	window.alert("fiz o open");
    req.setRequestHeader("Content-type", "application/json");
	window.alert("header");

    req.send(null);
	window.alert(req.responseText);
	window.alert("send, Vora retornar");
    return req.responseText; 
}


class Cadastro extends React.Component{

	constructor(props){
		super(props);
		if(localStorage.getItem("user") === null)
			//this.state = {id: 0, name: '', email: '', senha: '', endereço: '', telefone: '', logged: false};
			this.state = {id: 0, name: '', email: '', senha: '', endereço: '', telefone: '', isAdmin: false};
		else {
			let user = JSON.parse(localStorage.getItem("user"));
			this.state = {id: user.length, name: '', email: '', senha: '', endereco: '', telefone: '', isAdmin: false};
			//this.state = {id: user.length, name: '', email: '', senha: '', endereco: '', telefone: '', logged: false};

		}

		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangeSenha = this.handleChangeSenha.bind(this);
		this.handleChangeEndereco = this.handleChangeEndereco.bind(this);
		this.handleChangeTelefone = this.handleChangeTelefone.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		window.alert("Bora cadastrar");

	}

	handleChangeName(event){
		this.setState({name: event.target.value});
	}

	handleChangeEmail(event){
		this.setState({email: event.target.value});
	}

	handleChangeSenha(event){
		this.setState({senha: event.target.value});
	}

	handleChangeEndereco(event){
		this.setState({endereco: event.target.value});
	}

	handleChangeTelefone(event){
		this.setState({telefone: event.target.value});
	}

	handleSubmit(event){
		var user;
		if(localStorage.getItem("user")==null){
			user = [];
		}else{
			user = JSON.parse(localStorage.getItem("user"));
		}
		user.push(this.state);
		localStorage.setItem("user", JSON.stringify(user));

		window.alert("Cadastro feito com sucesso");
	}

	render(){
		return(
			<div className="row m-0 align-items-center bg-light-green border border-white">
				<div className="col p-2 p-md-5">
					<h1>Cadastro</h1>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label>Nome</label>
							<input className="form-control form-control-sm" value={this.state.name} onChange={this.handleChangeName}/>
						</div>
						<div className="form-group">
							<label>E-mail</label>
							<input className="form-control form-control-sm" value={this.state.email} onChange={this.handleChangeEmail}/>
						</div>
						<div className="form-group">
							<label>Senha</label>
							<input className="form-control form-control-sm" value={this.state.subject} onChange={this.handleChangeSenha}/>
						</div>
						<div className="form-group">
							<label>Endereço</label>
							<input className="form-control form-control-sm" value={this.state.subject} onChange={this.handleChangeEndereco}/>
						</div>
						<div className="form-group">
							<label>Telefone</label>
							<input className="form-control form-control-sm" value={this.state.subject} onChange={this.handleChangeTelefone}/>
						</div>
						<div className="form-group">
							<button className="btn btn-sm purple-btn" type="submit">Cadastrar</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Cadastro;