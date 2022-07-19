import React from "react";
import {Container} from './styles';

const Button = (props) =>{
    return(
        <Container style={{backgroundColor:props.bg,color:props.textColor}}>
            {props.text}
        </Container>
    );
}

export default Button;