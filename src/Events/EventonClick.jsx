import React, { useState }  from "react";

function EventonClick(){
// Target ----------------------------------
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
        console.log(event.target.value)
    };
// Type ------------------------------------
    const handleEvent = (event) => {
        event.stopPropagation(); // this will stop the event propagating further
        console.log(`Event type: ${event.type}`);
        handleClick();
    };
// Prevent Default
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submission prevented");
    };


    const handleClick = () => {
        alert('Button Clicked!');
    };
    return(
        <form onSubmit={handleSubmit}>
        <div>
            <input type="text" onChange={handleChange}/>
            <button onClick = {handleEvent} >Click Me!</button>
        </div>
        <button type="submit">Submit</button>
        </form>
    );
}

export default EventonClick;