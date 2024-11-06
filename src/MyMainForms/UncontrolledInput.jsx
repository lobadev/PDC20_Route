import React, {useRef} from "react";

const UnControlledInput = () => {
    const phoneref = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Phone Number: ${PhoneRef.current.value}');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                ref={phoneref}
                placeholder="Enter your phone name"
            />

            <button type="submit">Submit</button>
        </form>
    )
}

export default UnControlledInput;