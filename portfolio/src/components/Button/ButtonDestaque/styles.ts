import styled from "styled-components";

export const Button = styled.button`
    margin-top: 24px;
    font-size: 1rem;
    font-weight: 400;
    background: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.text};
    text-shadow: 10px solid black;
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 5px;

    animation: colorizeBackground 5s steps(60, end) 0s infinite alternate-reverse;

    @keyframes colorizeBackground {
        100% {
            background: ${({theme}) => theme.colors.tertiary};
        };
    }
`;