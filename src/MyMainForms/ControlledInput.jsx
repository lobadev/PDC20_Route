import React, {useState} from 'react';

const ControlledInput = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.targetvalue);
        console.log("Current email:", e.target.value);
    }

    return (
        <input type='email' value={email} onChange={handleChange} placeholder='Enter your email'/>
    );
}

export default ControlledInput;