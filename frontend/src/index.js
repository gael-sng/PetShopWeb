import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Services from './Services';
import Contato from './Contato';
import Cadastro from './Cadastro';
import Painel from './Painel';
import Footer from './Footer';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './css/bootstrap.min.css';
import './css/style.css';

class Index extends React.Component{

	constructor(props){
		super(props);
		var users = JSON.parse(localStorage.getItem("user"));
		users[0] = {id: 0, name: 'Admin', email: 'a', senha: 'a', endereço: 'Alameda dos acajus 377', telefone: '38345678', isAdmin: true};
		localStorage.setItem("user", JSON.stringify(users));

		if(localStorage.getItem("loginState") === null){
			//this.state = {id: 0, name: '', email: '', senha: '', endereço: '', telefone: '', logged: false};
			this.state = {"ID":-1,"name":"","email":"","senha":"","loggedUser":false,"loggedAdmin":false};
			localStorage.setItem("loginState", JSON.stringify(this.state));
		}else{
			this.state = JSON.parse(localStorage.getItem("loginState"));
		}
	}

	render(){
	  return (
	    <div>
	      <Menu/>
	      <Switch>
	  		<Route exact path="/" component={Services}/>
	  		<Route path="/contato" component={Contato}/>
	  		<Route path="/cadastro" component={Cadastro}/>
	  		<Route path="/painel" component={Painel}/>
	      </Switch>
	      <Footer/>
	    </div>
	  );
	}

}

ReactDOM.render((
	<BrowserRouter>
		<Index />
	</BrowserRouter>
	), document.getElementById("root")
);    
