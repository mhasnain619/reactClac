// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment = 0,
  annualInvestment = 0,
  expectedReturn = 0,
  duration = 0,
}) {
  // Ensure all input values are correctly converted to numbers
  const initialInvestmentNum = Number(initialInvestment);
  const annualInvestmentNum = Number(annualInvestment);
  const expectedReturnNum = Number(expectedReturn);
  const durationNum = Number(duration);

  // Check if any of the inputs are NaN (not a number)
  if (isNaN(initialInvestmentNum) || isNaN(annualInvestmentNum) || isNaN(expectedReturnNum) || isNaN(durationNum)) {
    throw new Error("Invalid input: All inputs should be valid numbers.");
  }

  const annualData = [];
  let investmentValue = initialInvestmentNum; // Initialize with the initial investment

  for (let i = 0; i < durationNum; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturnNum / 100);
    investmentValue += interestEarnedInYear + annualInvestmentNum;
    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestmentNum,
    });
  }

  return annualData;
}




// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
