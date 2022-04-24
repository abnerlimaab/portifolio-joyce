import React from "react";
import { Container, MenuItem, MenuList } from "./styles";

interface Props {
    menuActive: 'Sobre' | 'Portfólio' | 'Contato';
}

export function NavBar({menuActive}: Props) {
    return (
        <Container>
            <MenuList>
                <MenuItem
                 isActive={menuActive === 'Sobre'}
                >Sobre</MenuItem>
                <MenuItem
                 isActive={menuActive === 'Portfólio'}
                >Portfólio</MenuItem>
                <MenuItem
                 isActive={menuActive === 'Contato'}
                >Contato</MenuItem>
            </MenuList>
        </Container>
    )
}