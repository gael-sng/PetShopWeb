import React from 'react';

function Mensagens(){

	if(localStorage.getItem("messages") === null){
		return(
			<div>
				<h1>Mensagens</h1>
				<p>Não há mensagens disponíveis.</p>
			</div>
		);
	} else {

		var messages = JSON.parse(localStorage.getItem("messages"));
		var allMessages = [];

		for(let i=0; i<messages.length; i++){
			allMessages.push(printMessage(JSON.stringify(messages[i])));
		}

		return(
			<div>
				<h1>Mensagens</h1>
				{allMessages}
			</div>
		);
	}
}

function printMessage(message){

	message = JSON.parse(message);

	return(
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">{message.subject}</h5>
				<p>{message.name} ({message.email})</p>
				<p>{message.body}</p>
			</div>
		</div>
	);

}

export { Mensagens };