import { FC, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 424px;
    height: 680px;
    background-color: #f9f9f9;
    border-radius: 48px;
    padding: 74px 26px 26px 26px;
    
`

interface ICalculatorContainer {
    children: ReactNode
}

const CalculatorContainer: FC<ICalculatorContainer> = (p: ICalculatorContainer) => {
    return (
        <>
            <Container>
                {p.children}
            </Container>
        </>
    )
}

export { CalculatorContainer }
