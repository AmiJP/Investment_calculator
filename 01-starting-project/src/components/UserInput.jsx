export const UserInput = ({ onChange, userInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            onChange={(e) => onChange("initialInvestment", e.target.value)}
            value={userInput.initialInvestment}
            required
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            onChange={(e) => onChange("annualInvestment", e.target.value)}
            value={userInput.annualInvestment}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            onChange={(e) => onChange("expectedReturn", e.target.value)}
            value={userInput.expectedReturn}
            required
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            onChange={(e) => onChange("duration", e.target.value)}
            value={userInput.duration}
            required
          />
        </p>
      </div>
    </section>
  );
};
