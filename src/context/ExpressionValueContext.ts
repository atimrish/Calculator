import { createContext, Dispatch } from "react";

type ExpressionDispatch = Dispatch<{type: string, value?: string}>

interface IExpressionContext {
    expression: string;
    dispatch: ExpressionDispatch | null;
}

const ExpressionValueContext:React.Context<IExpressionContext> = createContext({expression: '', dispatch: null})

export { ExpressionValueContext }
