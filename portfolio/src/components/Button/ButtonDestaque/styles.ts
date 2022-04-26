import styled from "styled-components";

export const Button = styled.button`
    margin-top: 24px;
    background: ${({theme}) => theme.colors.secundary};
    font-size: 1rem;
    font-weight: 400;
    color: ${({theme}) => theme.colors.text};
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 5px;
`;