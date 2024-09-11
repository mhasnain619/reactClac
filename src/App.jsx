import { useState } from "react"
import Header from "./components/Header"
import UserInputs from "./components/UserInputs"
import Results from "./components/Results"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expecteReturn: 6,
    duration: 10
  })
  const inputIsValid = userInput.duration >= 1
  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    })
  }

  return (
    <>
      <Header />
      <UserInputs userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (<p className="center">Please enter valid input duration data</p>)}
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App
