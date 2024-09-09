import { CalculatorContainer } from "./components/common/calculator-container/CalculatorContainer";
import { MainInput } from "./components/ui/main-input/MainInput";
import { ButtonsGrid } from "./components/common/buttons-grid/ButtonsGrid";
import { ExpressionValueContext } from "./context/ExpressionValueContext";
import { ChangeEventHandler, useReducer } from "react";

function App() {
  const solve = (expr: string) => {
    let solved: string;
    try {
      solved = eval(expr);
    } catch {
      solved = "Ошибка";
    }
    return solved;
  };

  const setIntoExpressionString = (v: string) => {
    const regex = /\d+/;
    if (regex.test(v.at(-1))) {
      return v;
    }

    return v.slice(0, v.length - 1);
  };

  const reduser = (state: string, action: { type: string; value: string }) => {
    switch (action.type) {
      case "set":
        return setIntoExpressionString(action.value);
      case "clr":
        return "";
      case "del":
        return state.slice(0, state.length - 1);
      case "addChar":
        return state + action.value;
      case "addOperator":
        return state + action.value;
      case "solve":
        return state + "=" + solve(state);
      default:
        throw new Error("Неизвестное действие");
    }
  };

  const [expression, dispatch] = useReducer(reduser, "");

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    dispatch({ type: "set", value: e.currentTarget.value });

  return (
    <>
      <CalculatorContainer>
        <MainInput onChange={onChange} value={expression} />
        <ExpressionValueContext.Provider
          value={{ expression: expression, dispatch: dispatch }}
        >
          <ButtonsGrid />
        </ExpressionValueContext.Provider>
      </CalculatorContainer>
    </>
  );
}

export default App;
