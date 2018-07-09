import React from 'react';
import catfood from './img/catfood.jpg';
import cattoy from './img/cattoy_mice.jpg';
import cathouse from './img/cathouse.jpg';
import dogfood from './img/dogfood.jpg';
import { Redirect, NavLink } from 'react-router-dom';

class Compras extends React.Component{

	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleSubmit(event){
		localStorage.removeItem("compra");
	}

	render(){
		if(localStorage.getItem("compra") == null){
			return(	
				<div>
					<h1>Compras</h1>
					<p>Nenhuma compra realizada.</p>
			    <p><NavLink to="/painel/compras/novo">Realizar compra</NavLink></p>
				</div>
			);
		} else {

			var compras = JSON.parse(localStorage.getItem("compra"));
			return printPurchase(compras)
		}		
	}
}

function printPurchase(compras){
	
	return (
		<div>
			<p><NavLink to="/painel/compras/novo">Realizar compra</NavLink></p>
			{compras.map(element => { 
				return(
				  <div>
				    
				    <hr style={{padding: 0, marginTop: "5px", marginBottom: "0.5px"}}/>
				    <hr style={{padding: 0, marginTop: 0, marginBottom: "5px"}}/>
						
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Brinquedo de Gato</h5>
								<p className='default'>{element.brinquedoGato}</p>
							</div>
						</div>

						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Casa de Gato</h5>
								<p className='default'>{element.casaGato}</p>
							</div>
						</div>

						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Comida de Cachorro</h5>
								<p className='default'>{element.comidaCachorro}</p>
							</div>
						</div>

						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Comida de Gato</h5>
								<p className='default'>{element.comidaGato}</p>
							</div>
						</div>
				  </div>
				)
			})
		}
		</div>
	)
}

class NovaCompra extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			comidaGato: '0', 
			brinquedoGato: '0', 
			casaGato: '0', 
			comidaCachorro: '0'
		};

		this.handleChangeComidaGato = this.handleChangeComidaGato.bind(this);
		this.handleChangeBrinquedoGato = this.handleChangeBrinquedoGato.bind(this);
		this.handleChangeCasaGato = this.handleChangeCasaGato.bind(this);
		this.handleChangeComidaCachorro = this.handleChangeComidaCachorro.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeComidaGato(event){
		this.setState({comidaGato: event.target.value});
	}

	handleChangeBrinquedoGato(event){
		this.setState({brinquedoGato: event.target.value});
	}

	handleChangeCasaGato(event){
		this.setState({casaGato: event.target.value});
	}

	handleChangeComidaCachorro(event){
		this.setState({comidaCachorro: event.target.value});
	}

	handleSubmit(event){
		this.setState({submitted: true});

		let compras = localStorage.getItem("compra")

		// If no purchase has been made, create an array, else just receive it
		compras = compras ? JSON.parse(compras) : []

		// Add new compra object to array
		compras.push(this.state)

		// Update compra value in database
		localStorage.setItem("compra", JSON.stringify(compras));
	}

	render(){
		// if(localStorage.getItem("compra") == null){
			return(
				<div className="p-2 md-5">
					<h1>Nova Compra</h1>

					      <div className="row masthead-followup row m-0 border border-white">
					        <div className="col p-3 p-md-5 border border-white">
						          <h3>Comida para gatos</h3>
						          <img src={catfood} alt="Comida para gato"/>
						          <p>Comida para gatos whiskas sabor carne 10Kg.</p>
						          <p>R$110</p>
								      <hr className="half-rule"/>
											<div className="form-group">
												<label>Quantidade</label>
									      <input className="form-control form-control-sm" type="number" min="0" value={this.state.comidaGato} onChange={this.handleChangeComidaGato}/>
											</div>
						      </div>

						        <div className="col p-3 p-md-5 bg-light-green  border border-white">
						          <h3>Brinquedo para gatos</h3>
						          <img src={cattoy} alt="Brinquedo para gatos"/>
						          <p>Brinquedo para gatos com catnip.</p>
						          <p>R$5</p>
						          <hr className="half-rule"/>
									<div className="form-group">
										<label>Quantidade</label>
							            <input className="form-control form-control-sm" type="number" min="0" value={this.state.brinquedoGato} onChange={this.handleChangeBrinquedoGato}/>
									</div>
						        </div>

						        <div className="col p-3 p-md-5 bg-light-green border border-white">
						          <h3>Casa para gatos</h3>
						          <img src={cathouse} alt="Casa para gatos"/>
						          <p>Casa com 2 andares e arranhador para gatos.</p>
						          <p>R$199,90</p>
						          <hr className="half-rule"/>
									<div className="form-group">
										<label>Quantidade</label>
							            <input className="form-control form-control-sm" type="number" min="0" value={this.state.casaGato} onChange={this.handleChangeCasaGato}/>
									</div>
						        </div>
						        
						        <div className="col p-3 p-md-5 bg-light-green border border-white">
							        <h3>Comida para cachorros</h3>
							        <img src={dogfood} alt="Comida para cachorro"/>
							        <p>Comida para cachorros Pedigree sabor frango com vegetais 10Kg.</p>
						            <p>R$80</p>
							        <hr className="half-rule"/>
									<div className="form-group">
										<label>Quantidade</label>
						            	<input className="form-control form-control-sm" type="number" min="0" value={this.state.comidaCachorro} onChange={this.handleChangeComidaCachorro}/>
									</div>
						        </div>
					      </div>
				        <div className="row">
							<div className="form-group col p-3">
				        <button className="btn btn-sm purple-btn" type="submit" onClick={this.handleSubmit}><NavLink to="/painel/compras">Comprar</NavLink></button>
							</div>
						</div>
				</div>
			);
		// } else {
		// 	return(
		// 		<Redirect to="/painel/compras"/>
		// 	);
		// }
	}
}

export { NovaCompra, Compras };