import React from "react";
import {Container} from './styles';

import Logo from '../../assets/logo.png';

const Footer = () =>{
    return(
        <Container>
            <div className="links">
                <a href="#">Termos de serviço</a>
                <a href="#">Política de privacidade</a>
                <a href="#">PlayStation Studios</a>
                <a href="#">PS Store</a>
                <a href="#">Suporte</a>
            </div>

            <div className="text-center mt-4">
                <img className="mb-3" width="63" src={Logo} />
            </div>
        </Container>
    );
}

export default Footer;