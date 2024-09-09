import { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  font-size: 36px;
  padding: 20px;
  border: none;
  box-shadow: var(--shadow);
  -webkit-box-shadow: var(--shadow);
  -moz-box-shadow: var(--shadow);
  border-radius: 20px;
`;

const MainInput: FC = (p: InputHTMLAttributes<HTMLInputElement>) => {
  return <Input {...p} />;
};

export { MainInput };
