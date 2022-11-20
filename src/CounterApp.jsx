import { useState } from 'react';
import PropsTypes from 'prop-types';


export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value )

    const handleClick = () => setCounter( (c) => c + 1 )
    const handleSubstract = () => setCounter( (c) => c - 1 )
    const handleReset = () => setCounter( value )

    return (
        <>
            <h1>Counter App</h1>
            <h2> { counter } </h2>
            <button onClick={handleClick}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
    
}

CounterApp.PropsTypes = {
    value: PropsTypes.number.isRequired
}