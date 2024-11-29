import { useState } from "react";
import Result from "./components/Result";
import UserInputs from "./components/UserInputs";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  function handleInitialInvestmentChange(event) {
    setInitialInvestment(+event.target.value);
  }

  function handleAnnualInvestmentChange(event) {
    setAnnualInvestment(+event.target.value);
  }

  function handleExpectedReturnChange(event) {
    setExpectedReturn(+event.target.value);
  }

  function handleDurationChange(event) {
    setDuration(+event.target.value);
  }

  const isValidInput = duration >= 1;

  return (
    <>
      <UserInputs
        onInitialInvestmentChange={handleInitialInvestmentChange}
        onAnnualInvestmentChange={handleAnnualInvestmentChange}
        onExpectedReturnChange={handleExpectedReturnChange}
        onDurationChange={handleDurationChange}
      />
      {!isValidInput && (
        <p className="center">Please enter a duration greater than zero</p>
      )}
      {isValidInput && (
        <Result
          initialInvestment={initialInvestment}
          annualInvestment={annualInvestment}
          expectedReturn={expectedReturn}
          duration={duration}
        />
      )}
    </>
  );
}

export default App;
