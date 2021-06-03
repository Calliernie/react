import React, { Component, PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ernest",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Ernest" });
    }, 2000);
  }

  render() {
    console.log("Parent Component Render");
    return (
      <div>
        Parent Component
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponent;
