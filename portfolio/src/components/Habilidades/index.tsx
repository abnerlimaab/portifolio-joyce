import React from "react";
import { Container, TagInitial, TagNext } from "./styles";

interface Props {
    habilidades: string[];
}

export function Habilidades({habilidades}: Props) {
    return (
        <Container>
            {habilidades.map((habilidade, index) => (
                index === 0 
                ? 
                <TagInitial>{habilidade}</TagInitial> 
                :
                <TagNext>{habilidade}</TagNext>
            ))}
        </Container>
    );
};