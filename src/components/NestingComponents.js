import React, { Component } from "react";
import UserMessage from "./UserMessage";
import UserData from "./UserData";

class NestingComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            isLoggedIn: false,
        }
    }

    handleSignIn = () => {
        this.setState({
            isLoggedIn: true
        })
        console.log(this)
    }

    handleSignOut = () => {
        this.setState({
            isLoggedIn: false
        })
        console.log(this)
    }
    render() {
        return(
            <div>
                <h1 className="intro">NestingComponents</h1>
                <UserData isLoaded={this.state.isLoaded} />
                <UserMessage 
                isLoggedIn={this.state.isLoggedIn}
                handleSignIn={this.handleSignIn} 
                handleSignOut={this.handleSignOut}
                
                />
            </div>
        )
    }
}

export default NestingComponents