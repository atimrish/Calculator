import { FC, ReactNode } from "react";
import styled from "styled-components";

const ButtonItem = styled.button`
    border-radius: 36px; 
    aspect-ratio: 1;
    border: none;
    box-shadow: var(--shadow);
`


interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

const Button: FC<IButton> = (p: IButton) => {
    return (
        <>
            <ButtonItem {...p}>{p.children}</ButtonItem>
        </>
    ) 
}

export { Button }
