import React from 'react';

const welcome = (props) => {
    return (
        <div>
            <h1>Welcome to the counter system,, {props.name} </h1>
            <p>Please press increment or decrement Button</p>
        </div>
    );
};

export default welcome;