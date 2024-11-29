import UserInput from "./UserInput";

export default function UserInputs({
  onInitialInvestmentChange,
  onAnnualInvestmentChange,
  onExpectedReturnChange,
  onDurationChange,
}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          title="INITIAL INVESTMENT"
          onChange={onInitialInvestmentChange}
        />
        <UserInput
          title="ANNUAL INVESTMENT"
          onChange={onAnnualInvestmentChange}
        />
      </div>
      <div className="input-group">
        <UserInput 
          title="EXPECTED RETURN" 
          onChange={onExpectedReturnChange}
        />
        <UserInput 
          title="DURATION" 
          onChange={onDurationChange} 
        />
      </div>
    </section>
  );
}
