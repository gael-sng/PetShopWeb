import React from 'react';

class Contato extends React.Component{

	constructor(props){
		super(props);
		
		if(localStorage.getItem("messages") === null)
			this.state = {id: 0, name: '', email: '', subject: '', body: ''};
		else {
			let messages = JSON.parse(localStorage.getItem("messages"));
			this.state = {id: messages.length, name: '', email: '', subject: '', body: ''};
		}

		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangeSubject = this.handleChangeSubject.bind(this);
		this.handleChangeBody = this.handleChangeBody.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeName(event){
		this.setState({name: event.target.value});
	}

	handleChangeEmail(event){
		this.setState({email: event.target.value});
	}

	handleChangeSubject(event){
		this.setState({subject: event.target.value});
	}

	handleChangeBody(event){
		this.setState({body: event.target.value});
	}

	handleSubmit(event){

		var messages;

		if(localStorage.getItem("messages") === null){
			messages = [];
		} else {
			messages = JSON.parse(localStorage.getItem("messages"));
		} 

		messages.push(this.state);
		localStorage.setItem("messages", JSON.stringify(messages));

		window.alert("Mensagem enviada com sucesso");
	}

	render(){
		return(
			<div className="row m-0 align-items-center bg-light-green border border-white">
				<div className="col p-2 p-md-5">
					<h1>Contato</h1>
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
							<label>Assunto</label>
							<input className="form-control form-control-sm" value={this.state.subject} onChange={this.handleChangeSubject}/>
						</div>
						<div className="form-group">
							<label>Mensagem</label>
							<textarea className="form-control" rows="5" value={this.state.body} onChange={this.handleChangeBody}></textarea>
						</div>
						<div className="form-group">
							<button class="btn btn-sm purple-btn" type="submit">Enviar</button>
						</div>
					</form>
				</div>
			</div>
			);
	}
}

export default Contato;