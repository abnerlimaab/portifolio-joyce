import React, { ButtonHTMLAttributes } from "react";
import { Button } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {};

export function ButtonDestaque ({children, ...rest}: Props) {
    return (
        <Button {...rest}>
            {children}
        </Button>
    );
};