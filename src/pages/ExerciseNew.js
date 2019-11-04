import React from "react";

class ExerciseNew extends React.Component {
  // Forma 1

  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   console.log(this);
  // }

  // Forma 2

  handleClick = () => {
    console.log("Clicked");
  };

  render() {
    return <button onClick={this.handleClick}>Send</button>;
  }
}

export default ExerciseNew;
