import { Header } from "./components/Header";
import { Result } from "./components/Result";
import { UserInput } from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <div>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Result input={userInput} />}
    </div>
  );
}

export default App;
