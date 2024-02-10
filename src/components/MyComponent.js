// class component
// function compnent
import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Nguyen Van A",
    address: "Da Nang",
    age: 20,
  };
  render() {
    return (
      <div>
        My name is {this.state.name} Im from {this.state.address}
      </div>
    );
  }
}

export default MyComponent;
