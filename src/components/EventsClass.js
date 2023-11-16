import React, { Component } from "react";

export class EventsClass extends Component {
  clickHandler() {
    console.log("Clicked the class button");
  }
  render() {
    return (
      <div>
        <h1 className="intro">EventsClass</h1>
        <button onClick={this.clickHandler}>click me - class component</button>
      </div>
    );
  }
}

export default EventsClass;