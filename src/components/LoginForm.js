import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      usernameValue: '',
      passwordValue: '',
      onSubmit: props.onSubmit
    };
  }


  updatePassword = (event) => {
    this.setState({
      ...this.state,
      passwordValue: event.target.value
    })
  }
  updateUsername = (event) => {
    this.setState({
      ...this.state,
      usernameValue: event.target.value
    })
  }

  formSubmit = (event) => {
    // debugger
    event.preventDefault()
    // if (!this.state.usernameValue || !this.state.passwordValue){
    //   event.preventDefault()
    // } else {
    //   this.state.onSubmit()
    // }
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.updateUsername} value={this.state.usernameValue}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.updatePassword} value={this.state.passwordValue}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
