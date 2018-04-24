import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value:'',
      remainingChars: props.maxChars
    };
  }

  changeValue = (event) => {
    this.setState({
      value: event.target.value,
      remainingChars: this.state.remainingChars - 1
    })
  }

  render() {
    return (
      <div>
        <strong>{this.state.remainingChars}</strong>
        <input type="text" 
          value={this.state.value}
          onChange={this.changeValue}/>
      </div>
    );
  }
}

export default TwitterMessage;
