import styled from "styled-components";

interface MenuItemProps {
    isActive: boolean;
}

export const Container = styled.nav`
    position: fixed;
    top: 56px;
    right: 100px;
`;

export const MenuList = styled.ul`
    display: flex;
    flex-direction: row;
`;

export const MenuItem = styled.li<MenuItemProps>`
    color: ${({theme, isActive}) => isActive ? theme.colors.secundary : theme.colors.text};
    font-size: 16px;
    margin-right: 27px;
`;