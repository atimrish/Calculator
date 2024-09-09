import { FC, useContext } from "react";
import styled from "styled-components";
import { Button } from "../../ui/button/Button";
import { ExpressionValueContext } from "../../../context/ExpressionValueContext";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 28px;
  margin-top: 30px;

  & > :last-child {
    grid-column: 3 / 5;
    aspect-ratio: auto;
    background-color: #e2adcb;
  }
`;

const ButtonsGrid: FC = () => {
  const { dispatch } = useContext(ExpressionValueContext);

  const clear = () => dispatch?.({ type: "clr" });

  const del = () => dispatch?.({ type: "del" });

  const addChar = (char: string) =>
    dispatch?.({ type: "addChar", value: char });

  const addOperator = (operator: string) =>
    dispatch?.({ type: "addOperator", value: operator });

  const solve = () => dispatch?.({ type: "solve" });

  return (
    <GridContainer>
      <Button onClick={clear}>clr</Button>
      <Button onClick={del}>DEL</Button>
      <Button onClick={() => addOperator("%")}>%</Button>
      <Button onClick={() => addOperator("/")}>/</Button>
      <Button onClick={() => addChar("7")}>7</Button>
      <Button onClick={() => addChar("8")}>8</Button>
      <Button onClick={() => addChar("9")}>9</Button>
      <Button onClick={() => addOperator("*")}>*</Button>
      <Button onClick={() => addChar("4")}>4</Button>
      <Button onClick={() => addChar("5")}>5</Button>
      <Button onClick={() => addChar("6")}>6</Button>
      <Button onClick={() => addOperator("-")}>-</Button>
      <Button onClick={() => addChar("1")}>1</Button>
      <Button onClick={() => addChar("2")}>2</Button>
      <Button onClick={() => addChar("3")}>3</Button>
      <Button onClick={() => addOperator("+")}>+</Button>
      <Button>.</Button>
      <Button onClick={() => addChar("0")}>0</Button>
      <Button onClick={solve}>=</Button>
    </GridContainer>
  );
};

export { ButtonsGrid };
