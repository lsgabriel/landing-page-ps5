import styled from 'styled-components';

export const Container = styled.header`
    background-color: var(--primary-color); color:#F7F7F7;
    @media(max-width: 420px) {height:94vh;}

    .text{
        display: flex;justify-content:center;flex-direction:column;height:45vh;

        h1{
            font-size: 4.4rem; font-weight: 600; margin-left: 2rem; margin-top: 11rem;

            @media(max-width: 420px) {
                font-size: 3rem;margin-top: 3rem;margin-left: 0; 
            }
        }

        p{
            font-size: 2rem;margin-left: 2rem;

            @media(max-width: 420px) {
                margin-left: 0; 
            }
        }

        .btn-div{
            margin-left: 2rem;

            @media(max-width: 420px) { margin-left: 0; }
        }
    }

    .image{
        display: flex;align-items:center;justify-content:center;height:85vh;
        @media(max-width: 420px) {justify-content:flex-start;height:40vh;}

        img{
            width: 85%;transform: rotate(-5deg);

            @media(max-width: 420px) {width:75%;margin:0 2.2rem;}
        }
    }

    .wave-div{
        margin-top:0.5rem;

        img{
            width:100vw;height:5em;
            @media(max-width: 420px) {height:10vh;}
        }
    }
`;