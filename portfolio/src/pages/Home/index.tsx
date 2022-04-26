import React, { useEffect } from "react";
import { ButtonDestaque } from "../../components/Button/ButtonDestaque";
import { Habilidades } from "../../components/Habilidades";
import { NavBar } from "../../components/NavBar";
import { 
    Apresentacao, 
    Descricao,
    Profile,
    Photo,
    Titulo,
    Container,
    CirculoTop,
    CirculoButton,
    Orbita
 } from "./styles";

import profile from "../../assets/images/profile.jpg";

export function Home() {
  const titulo = "Eu sou Joyce Amorim";
  const habilidades = ["POWER BI", "PYTHON", "EXCEL"];
  const descricao =
    "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";

  return (
    <Container>
      <NavBar menuActive="Sobre" />

      <Apresentacao>
        <Titulo>{titulo}</Titulo>

        <Habilidades habilidades={habilidades} />

        <Descricao>{descricao}</Descricao>

        <ButtonDestaque>Explore meu Trabalho</ButtonDestaque>
      </Apresentacao>

      <Profile>
        <Photo src={profile} alt="Minha foto de perfil" />

        <Orbita >
            <CirculoTop />
            <CirculoButton />
        </Orbita>
      </Profile>
    </Container>
  );
}
