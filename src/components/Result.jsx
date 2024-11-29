import { calculateInvestmentResults, formatter } from "../util/investment";

const HEADERS = [
  "Year",
  "Investment Value",
  "Interest (Year)",
  "Total Interest",
  "Interested Capital",
];

export default function Result({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const data = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            {HEADERS.map((item, idx) => (
              <th key={idx}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => {
            const totalInterest = calculateTotalInterest(
              row,
              initialInvestment
            );

            return (
              <tr key={idx}>
                <td>{row.year}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(row.valueEndOfYear - totalInterest)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function calculateTotalInterest(yearData, initialInvestment) {
  return (
    yearData.valueEndOfYear -
    yearData.annualInvestment * yearData.year -
    initialInvestment
  );
}
