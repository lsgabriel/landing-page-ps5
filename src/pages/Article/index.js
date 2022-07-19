import React from "react";
import {Container} from './styles';
import Button from "../../components/Button";
import Ps5 from '../../assets/ps5b.png';

const Article = () =>{
    return(
        <Container className="row">
           <div className="text col-md-7">
                <p>Aproveite o carregamento extremamente rápido com o <span style={{fontWeight:600}}>SSD</span> de altíssima velocidade, uma imersão mais profunda com suporte a feedback tátil1, gatilhos adaptáveis1 e áudio em 3D*, além de uma geração inédita de jogos incríveis para PlayStation.</p>
                <Button bg="#0753FC" textColor="#F7F7F7" text="Saiba Mais"/>
           </div>

           <div className="image col-md-5">
                <img src={Ps5} alt="Controle de Videogame" />
           </div>
        </Container>
    );
}

export default Article;