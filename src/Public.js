import React, {Component} from 'react';


class Public extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {value: 0};
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    this.setState({value: this.state.value+1})
    if(this.state.value===10) {
      return (
        alert('count 10!') &&
        this.setState({value: 0})
      )
    }
  }
  render() {
    return (
      <>
        <div>{this.state.value}</div>
        <button onClick={this.handleSubmit}>
          Counter
        </button>
      </>
    );
  }
}

export default Public;