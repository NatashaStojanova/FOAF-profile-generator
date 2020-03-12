import React from 'react'

const Button = (props) => {
    return (
        <button className="button" onClick={props.onFormSubmit}>
            Submit
        </button>
    );

}
export default Button;