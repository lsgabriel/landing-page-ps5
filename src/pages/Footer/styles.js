import styled from 'styled-components';

export const Container = styled.footer`
    background-color: #111111;

    .links{
        text-align: center;padding-top:1rem;

        a{
            padding-inline: 2rem;color:#f7f7f7;text-decoration:none;margin-top:1.9rem;

            @media(max-width: 420px) { padding-inline: 0.5rem;}
        }
    }
`;