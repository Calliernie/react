import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  // eslint-disable-next-line react/require-render-return
  render() {
    //short circuit operator approach to rendering
    return this.state.isLoggedIn && <div>Welcome Ernest</div>;

    //ternary operator approach to rendering
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Ernest</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    //if else approach to rendering
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Ernest</div>;
    // } else {
    //   // eslint-disable-next-line no-unused-vars
    //   message = <div>Welcome Guest</div>;
    // }

    //second if else approach to rendering
    // return <div>{message}</div>;
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Ernest</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Ernest</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
