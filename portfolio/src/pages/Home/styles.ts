import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    padding-top: 60px;
`;

export const Apresentacao = styled.article`
    display: flex;
    flex-direction: column;
    max-width: 60vw;
    box-sizing: border-box;
    padding: 0 100px 0 150px;
`;

export const Titulo = styled.h3`
    font-size: 3.25rem;
    font-weight: bold;
    margin-top: 60px;
`;

export const Descricao = styled.p`
    margin-top: 24px;
    color: ${({theme}) => theme.colors.text_dark};
    line-height: 1.5rem;
`;

export const Profile = styled.figure`
    position: relative;
    max-width: 40vw;
    box-sizing: border-box;
`;

export const Circulo = styled.div`
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 50%;
    position: absolute;
`;

export const CirculoTop = styled(Circulo)`
    height: 342px;
    width: 372px;
    left: 150px;
    top: -25px;
    box-sizing: border-box;
`;

export const CirculoButton = styled(Circulo)`
    height: 217px;
    width: 237px;
    bottom: -60px;
    left: -20px;
    box-sizing: border-box;
`;

export const Photo = styled.img`
    width: 430px;
    height: 430px;
    position: absolute;
    border-radius: 50%;
    border: 10px solid ${({theme}) => theme.colors.primary};
    z-index: 100;

    animation: colorize 5s steps(60, end) 0s infinite alternate-reverse;

    @keyframes colorize {
        100% {
            border: 10px solid ${({theme}) => theme.colors.tertiary};
        };
    }
`;

export const Orbita = styled.div`
    width: 430px;
    height: 430px;
    position: absolute;
    border-radius: 50%;
    box-sizing: border-box;
    z-index: -1;
    animation: orbitar 20s linear 1s infinite;
    
    @keyframes orbitar {
        100% {
            transform: rotate(360deg);
        }
    }

`;