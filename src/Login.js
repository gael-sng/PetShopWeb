import React from 'react';
import { NavLink } from 'react-router-dom';
import Painel from './Painel';

class Login extends React.Component{

	constructor(props){
		super(props);
		this.user = JSON.parse(localStorage.getItem("user"));
		this.admin = JSON.parse(localStorage.getItem("admin"));
		this.state = {};
		this.state = JSON.parse(localStorage.getItem("loginState"));
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangeSenha = this.handleChangeSenha.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		console.log(this.state);
		console.log(JSON.stringify(this.state));
	}

	handleChangeEmail(event){
		this.setState({email: event.target.value});
	}

	handleChangeSenha(event){
		this.setState({senha: event.target.value});
	}

	handleSubmit(event){
		var users = JSON.parse(localStorage.getItem("user"));
		var find = false
		var loginState = JSON.parse(localStorage.getItem("loginState"));
		for(let i=0; i < users.length; i++){
			//procurando no banco de dados o usuario que esta tentando logar agora
			if(users[i].email === this.state.email && users[i].senha === this.state.senha){
				if(users[i].isAdmin){
					this.state.loggedUser = false;
					//this.setState({loggedUser:false});
					this.state.loggedAdmin = true;
					//this.setState({loggedAdmin:true});
				}else{
					this.state.loggedUser = true;
					//this.setState({loggedUser:true});
					this.state.loggedAdmin = false;
					//this.setState({loggedAdmin:false});
				}
				this.state.name = users[i].name;
				localStorage.setItem("loginState", JSON.stringify(this.state));
				window.alert(JSON.stringify(this.state));
				find = true;
				i=users.length;//stop
			}
		}
		if(!find)window.alert("Login inválido.");
	}

	handleLogout(event){
		// Sign out user
		if(this.state.loggedUser){
			this.state.loggedUser = false;

		// Sign out admin
		} else {
			this.state.loggedAdmin = false;
		}
		this.state.name = "";
		localStorage.setItem("loginState", JSON.stringify(this.state));

	}

	render(){
		if(this.state.loggedUser){
			return(
				<div className="dropdown purple-btn">
					<button className="btn btn-sm purple-btn dropdown-toggle" type="button" data-toggle="dropdown">
						{this.state.name}
					</button>
					<div className="dropdown-menu purple-btn dropdown-menu-right">
						<NavLink className="dropdown-item btn-sm purple-btn" to="/painel">Painel</NavLink>
						<NavLink className="dropdown-item btn-sm purple-btn" to="/painel/agenda">Agendar Serviços</NavLink>
						<div className="dropdown-divider"></div>
						<form onSubmit={this.handleLogout}>
							<button className="dropdown-item btn-sm purple-btn" type="submit">Sair</button>
						</form>
					</div>
				</div>			
				);
		} else if(this.state.loggedAdmin){
			return(
				<div className="dropdown purple-btn">
					<button className="btn btn-sm purple-btn dropdown-toggle" type="button" data-toggle="dropdown">
						{this.state.name}
					</button>
					<div className="dropdown-menu purple-btn dropdown-menu-right">
						<NavLink className="dropdown-item btn-sm purple-btn" to="/painel">Painel</NavLink>
						<NavLink className="dropdown-item btn-sm purple-btn" to="/painel/gerenciar-produtos">Gerenciar Produtos</NavLink>
						<NavLink className="dropdown-item btn-sm purple-btn" to="/painel/agenda">Agenda</NavLink>
						<NavLink className="dropdown-item btn-sm purple-btn" to="/painel/mensagens">Mensagens</NavLink>
						<div className="dropdown-divider"></div>
						<form onSubmit={this.handleLogout}>
							<button className="dropdown-item btn-sm purple-btn" type="submit">Sair</button>
						</form>
					</div>
				</div>			
				);
		} else {
			return(
				<form className="form-inline" onSubmit={this.handleSubmit}>
					<div className="form-group mx-sm-2">
						<input className="form-control form-control-sm" value={this.state.email} onChange={this.handleChangeEmail} placeholder="Login"/>
					</div>
					<div className="form-group mx-sm-2">
						<input className="form-control form-control-sm" value={this.state.senha} onChange={this.handleChangeSenha} type="password" placeholder="Senha"/>
					</div>
					<div className="form-group mx-sm-2">
						<button className="btn btn-sm purple-btn" type="submit">Entrar</button>
					</div>
				</form>		
				);
		}
	}	
}

export default Login;