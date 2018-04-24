import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text:''
    };
  }

  changeText = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  isValidPoem(){
    let lines = this.state.text.split('\n')
    if (lines.length !== 3){
      return false
    }
    if (lines[0].trim().split(' ').length !== 5){
      return false
    } else if (lines[1].trim().split(' ').length !== 3){
      return false
    } else if (lines[2].trim().split(' ').length !== 5){
      return false
    }
    return true
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.changeText} value={this.state.text}/>
        {this.isValidPoem() ? '' : <div id="poem-validation-error" style={{ color: "red" }}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}

export default PoemWriter;
