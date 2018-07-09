import React from 'react';
import petShelter from './img/pet-shelter.svg'
import petsBath from './img/pets-bath.svg';
import petTrimmer from './img/pet-trimmer.svg';
import stethoscope from './img/stethoscope.svg';
import dogToy from './img/dog-toy.svg';

function Services(){
  return(
    <div>
      <main className="bd-masthead intro" id="content" role="main">
        <div className="container">
          <div className="row align-items-center">
            <div className="col p-2 p-md-5">
              <img className="img-fluid" src={petShelter} alt="icon"/>
            </div>
            <div className="col p-2 p-md-5">
              <h1>Pet Shop</h1>
              <p className="lead">
                Pensando no que ele precisa e tantos outros cachorrinhos e gatinhos, a loja foi projetada para atender as necessidades desses queridos peludos e peludinhos.
              </p>
              <p>  
                A satisfação da loja é oferecer produtos de ótima qualidade que atenda desde os mimos até as necessidades mais importante de nossos pets.
              </p>
            </div>
          </div>
        </div>
      </main>

      <div className="row masthead-followup row m-0 border border-white">
        <div className="col p-3 p-md-5 bg-light-green  border border-white">
          <img src={petsBath} className="icon" alt="icon"/>
          <h3>Banho</h3>
          <p>Em um ambiente climatizado e higienizado, nossos profissionais dedicam toda atenção aos animais a fim de fazer do banho uma experiência divertida.</p>
          <hr className="half-rule"/>
        </div>

        <div className="col p-3 p-md-5 bg-light-green  border border-white">
          <img src={petTrimmer} className="icon" alt="icon"/>
          <h3>Tosa</h3>
          <p>Nossos profissionais são aptos a realizar tosas na máquina e tesoura para todas as raças.</p>
          <hr className="half-rule"/>
        </div>

        <div className="col p-3 p-md-5 bg-light-green border border-white">
          <img src={stethoscope} className="icon" alt="icon"/>
          <h3>Atendimento Médico</h3>
          <p>Trabalhamos para a promoção de bem-estar e manutenção da qualidade de vida dos animais de estimação,  bem como proporcionar conforto e comodidade para o proprietário.</p>
          <hr className="half-rule"/>
        </div>
        
        <div className="col p-3 p-md-5 bg-light-green border border-white">
          <img src={dogToy} className="icon" alt="icon"/>
          <h3>Produtos</h3>
          <p>Assim como gostamos quando nos mimam, porque não mimar o animalzinho que amamos? Produtos para pet shop você encontra aqui.</p>
          <hr className="half-rule"/>
        </div>
      </div>
    </div>
  );
}

export default Services;
