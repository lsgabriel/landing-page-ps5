import styled from 'styled-components';

export const Container = styled.article`
    background-color: var(--secondary-color);height:100vh;
    display: flex;align-items:center;
    @media(max-width: 420px) { height:auto;}

    .text{
        padding:4rem;color:white;font-size:1.7rem;margin-top:1rem;
        
        p{
            width:90%;

            @media(max-width: 420px) { width:100%;}
        }
    }

    .image{
        margin-top: 5rem;
        @media(max-width: 420px) { margin-top: 0;}

        img{
            width:40vw;

            @media(max-width: 420px) { width:95%;}
        }
    }
`;