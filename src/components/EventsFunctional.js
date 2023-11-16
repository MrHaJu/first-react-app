import React from 'react'

function EventsFunctional() {
    function clickHandler(){
        console.log("Clicked the functional button")
    }
    return (
        <div>
            <h1 className="intro"> EventsFunctional</h1>
            <button onClick={clickHandler}>click me - functional component</button>
        </div>
    )
}

export default EventsFunctional