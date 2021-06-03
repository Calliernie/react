import React, { PureComponent } from "react";

export class PureComp extends PureComponent {
  render() {
    console.log("Regular Component Render"); 
    return <div>Pure Component</div>;
  }
}

export default PureComp;
