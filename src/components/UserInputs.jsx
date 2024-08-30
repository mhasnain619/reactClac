import React, { useState } from 'react'

const UserInputs = () => {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expecteReturn: 6,
        duration: 10
    })


    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        })
    }
    return (
        <section id='user-input'>
            <div className='input-gorup'>
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={userInput.initialInvestment} onChange={(event) => handleChange('initialInvestment', event.target.value)} required />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" value={userInput.annualInvestment} onChange={(event) => handleChange('annualInvestment', event.target.value)} required />
                </p>
            </div>
            <div className='input-gorup'>
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={userInput.expecteReturn} onChange={(event) => handleChange('expecteReturn', event.target.value)} required />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={userInput.duration} onChange={(event) => handleChange('duration', event.target.value)} required />
                </p>
            </div>
        </section>
    )
}

export default UserInputs
