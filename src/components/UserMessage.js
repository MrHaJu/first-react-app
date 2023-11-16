import React from 'react'

function UserMessage(props) {
    return (
        <div>{
            props.isLoggedin ? (
                <div>
                    <p>Welcome to the site! Please complete the steps below:</p>
                    <ol>
                        <li>Confirm your Email</li>
                        <li>Complete your profile</li>
                        <li>Subscribe to our newsletter</li>
                    </ol>
                </div>
            ) : (
                <p>Please sign in</p>
            )
        }</div>
    )
}

export default UserMessage


