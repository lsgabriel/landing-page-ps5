import React from "react";
import {Container} from './styles';

import Ps5 from '../../assets/ps5w.png';
import Wave from '../../assets/wave.png';
import Button from "../../components/Button";

const Header = () =>{
    return(
        <Container className="row">
            <div className="text col-md-7">
                <h1>Playstation 5</h1>
                <p>Play Has No Limits</p>
                
                <div className="btn-div">
                    <Button text="Comprar"/>
                </div>
            </div>

            <div className="image col-md-5">
                <img src={Ps5} alt="Controle de Videogame" />
            </div>

            <div className="wave-div">
                <img src={Wave}/>
            </div>
        </Container>
    );
}

export default Header;