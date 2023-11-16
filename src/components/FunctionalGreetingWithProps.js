import React from "react";

const FunctionalGreetingWithProps = (props) => {
console.log(props);

    return <h1><span className="intro">FunctionalGreetingWithProps!</span><br></br> Hello, {props.name}, I see you're {props.age} years old; {props.greeting}</h1>;
}


export default FunctionalGreetingWithProps;
