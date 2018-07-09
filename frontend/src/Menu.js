import React from 'react';
import Login from './Login';
import { NavLink } from 'react-router-dom';

function Menu(){
	return(
		<div>
			<nav className="navbar navbar-expand-lg menu">
				PET SHOP
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink to="/" className="nav-link link-menu">Início</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/contato" className="nav-link link-menu">Contato</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/cadastro" className="nav-link link-menu">Cadastro</NavLink>
					</li>
				</ul>
				<Login/>
			</nav> 
		</div>
		)		
};

export default Menu;