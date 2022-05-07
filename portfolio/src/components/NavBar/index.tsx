import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, MenuItem, MenuList } from "./styles";

interface Props {
  menuActive: string;
}

export function NavBar({ menuActive }: Props) {
  const navigate = useNavigate();

  function handleNavigate(uri: string) {
    navigate(uri);
  }

  return (
    <Container>
      <MenuList>
        <MenuItem
          onClick={() => handleNavigate("/")}
          isActive={menuActive === "sobre"}
        >
          Sobre
        </MenuItem>
        <MenuItem
          onClick={() => handleNavigate("/portfolio")}
          isActive={menuActive === "portfolio"}
        >
          Portfólio
        </MenuItem>
        <MenuItem
          onClick={() => handleNavigate("/contato")}
          isActive={menuActive === "contato"}
        >
          Contato
        </MenuItem>
      </MenuList>
    </Container>
  );
}
