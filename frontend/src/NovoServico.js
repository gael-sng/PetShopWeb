import React from 'react';
import { Redirect } from 'react-router-dom';
//pegar usuario logado do estado
class NovoServico extends React.Component{
	constructor(props){
		super(props);
		this.state = {name:'', serviceType: '', date: '', hour: '', submitted: false};
		this.handleChangeServiceType = this.handleChangeServiceType.bind(this);
		this.handleChangeDate = this.handleChangeDate.bind(this);
		this.handleChangeHour = this.handleChangeHour.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeServiceType(event){
		this.setState({serviceType: event.target.value});
	}

	handleChangeDate(event){
		this.setState({date: event.target.value});
	}

	handleChangeHour(event){
		this.setState({hour: event.target.value});
		var user = JSON.parse(localStorage.getItem("user"));

		if(user.logged){
			this.setState({name: user.name});
		}else{
			this.setState({name: "ERRO USUARIO NAO LOGADO MARCOU UM SERVIÇO"});
		}
	}

	handleSubmit(event){
		
		this.setState({submitted: true});
		var services;

		if(localStorage.getItem("services") == null){
			services = [];
		} else {
			services = JSON.parse(localStorage.getItem("services"));		
		}

		services.push(this.state);
		localStorage.setItem("services", JSON.stringify(services));		
	}

render(){
	if(!this.state.submitted){
		return(
			<div class="p-2 md-5">
				<h1>Agendar Serviço</h1>
				<form onSubmit={this.handleSubmit}>
					<div class="form-group">
						<label>Tipo do serviço:</label>
						<div class="form-check">
							<input class="form-check-input" type="radio" name="serviceType" value="Banho" onClick={this.handleChangeServiceType}/> 
							<label class="form-check-label">Banho</label>
						</div>
						<div class="form-check">				        
							<input class="form-check-input" type="radio" name="serviceType" value="Tosa" onClick={this.handleChangeServiceType}/> 
							<label class="form-check-label">Tosa</label>
						</div>
						<div class="form-check">
							<input class="form-check-input" type="radio" name="serviceType" value="Consulta" onClick={this.handleChangeServiceType}/> 
							<label class="form-check-label">Consulta</label>
						</div>
					</div>
					<div class="form-group">
						<label>Data:</label>
						<input class="form-control form-control-sm" type="date" value={this.state.date} onChange={this.handleChangeDate}/>
					</div>
					<div class="form-group">
						<label>Horário:</label>
						<input class="form-control form-control-sm" type="time" value={this.state.hour} onChange={this.handleChangeHour}/>
					</div>
					<div class="form-group">
						<button class="btn btn-sm purple-btn" type="submit">Agendar</button>
					</div>
				</form>
			</div>
		);
} else {
	return(
	<Redirect to="/painel/agenda"/>
	);
}
}
}

export { NovoServico };