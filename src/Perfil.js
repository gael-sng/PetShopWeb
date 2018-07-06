import React from 'react';

class Perfil extends React.Component{

	constructor(props, message){
		super(props);
		window.alert(message);
		this.message = JSON.parse(message);
	}

	render(){
		return(
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{this.message.subject}</h5>
					<p>{this.message.name} ({this.message.email})</p>
					<p>{this.message.body}</p>
				</div>
			</div>
		);
	}

}

export { Perfil };