import React, {useState} from "react";

const BasicForms = () => {
    const[name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Name: ${name}`);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange} placeholder="Enter your name"/>
            <button type="submit">Submit</button>
            {name && <p>Your name is: {name}</p>}
        </form>

        
    );
}

export default BasicForms;