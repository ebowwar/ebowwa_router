import React, { useState, useEffect } from 'react';

const MyPage: React.FC = () => {
    // State variable to demonstrate useState
    const [counter, setCounter] = useState(0);

    // Example of useEffect
    useEffect(() => {
        // This code runs after the component mounts
        console.log("Component mounted");

        // This function runs when the component unmounts
        return () => {
            console.log("Component unmounted");
        }
    }, []); // Empty array means this runs once, when the component mounts

    // Function to increment the counter
    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    // Basic styling object
    const style = {
        container: {
            padding: '20px',
            textAlign: 'center' as const, // TypeScript requires 'as const' for non-string values
        },
        button: {
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
        },
    };

    return (
        <div style={style.container}>
            <h1>Welcome to MyPage</h1>
            <p>This is a simple React TypeScript page.</p>
            <p>Counter: {counter}</p>
            <button style={style.button} onClick={incrementCounter}>
                Increment Counter
            </button>
        </div>
    );
};

export default MyPage;
