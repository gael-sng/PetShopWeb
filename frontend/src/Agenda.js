import React from 'react';
import { NavLink } from 'react-router-dom';

class Agenda extends React.Component{

	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event){
		localStorage.removeItem("servico");
	}

	render(){
		if(localStorage.getItem("services") == null){
			return(	
				<div>
					<h1>Agenda</h1>					
					<p>Nenhum serviço agendado.</p>
			    	<p>
			    		<NavLink to="/painel/agenda/novo">Agendar serviço</NavLink>
					</p>
				</div>
			);
		} else {

			var services = JSON.parse(localStorage.getItem("services"));
			var allServices = [];

			for(let i=0; i<services.length; i++){
				allServices.push(printService(JSON.stringify(services[i])));
			}

			return (
				<div>
					<h1>Agenda</h1>
					{allServices}
					<div>
		    			<button className="btn btn-sm purple-btn sidebar-menu">
		    				<NavLink to="/painel/agenda/novo">Agendar serviço</NavLink>
		    			</button>
	    			</div>
	    		</div>
			);
		}		
	}
}

function printService(service){
	
	service = JSON.parse(service);

	return(
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">Cliente: {service.name}</h5>
				<p>{service.serviceType}</p>
				<p>Data: {service.date}</p>
				<p>Horário: {service.hour}</p>
			</div>
		</div>
	);
}

export { Agenda };