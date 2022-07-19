import React from "react";
import {Container} from './styles';

import SpiderMan from '../../assets/spiderMan.png';
import Button from "../../components/Button";

const Section = () =>{
    return(
        <Container>
            <div className="text">
                <h1>Reproduza jogos do PS5 e do PS4 em Blu-ray Disc. </h1>
                <p>Você também pode baixar jogos do PS5 e do PS4 digitais a partir da PlayStation® Store.</p>
                <Button bg="#0753FC" textColor="#F7F7F7" text="Saiba Mais"/>
            </div>

            <div className="image" style={{ backgroundImage: `url(${SpiderMan})` }}>
            </div>
        </Container>
    );
}

export default Section;