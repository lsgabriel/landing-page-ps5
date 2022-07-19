import styled from 'styled-components';

export const Container = styled.section`
    background-color: #F7F7F7;

    .text{
        width:70%;background-color:#F7F7F7;
        margin-block: 2.5rem;margin-inline: auto;

        h1{
            font-weight: 600;font-size:2.5rem;
            @media(max-width: 420px) { font-size:2rem; }
        }

        p{
            font-size: 1.6rem;color:var(--gray);
        }
    }

    .image{
        background-size:cover;height:50vh;margin:0 auto;
        @media(max-width: 420px) {height:30vh;}
    }

`;