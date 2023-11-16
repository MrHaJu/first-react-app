import React from "react";

function ConditionalRenderingFunctional (props) {
    return (
        <div>
            <h1 className="intro">ConditionalRenderingFunctional</h1>
            <h1>{props.connected ? 'Connected' : 'Not Connected'}</h1>
        </div>
    )
}

export default ConditionalRenderingFunctional