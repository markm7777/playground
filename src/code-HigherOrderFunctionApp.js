let code = `

import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ReactTreeApp from './ReactTreeApp';

const memoize = (originalFunction) => {
  const cache = {};

  return function(num) {
    if (cache[num] !== undefined) {
      return cache[num] + ' [cache]';
    }
    else {
      const output = originalFunction(num);
      cache[num] = output;
      return output;
    }
  }
}

class Memioze extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      input: 0
    }
    this.theFunction = 0;// = memoize(props.func);
  }

  componentDidMount() {
    this.theFunction = memoize(this.props.func);
  }

  handleClick = () => {
    this.setState({result: this.theFunction(this.state.input)})
  }

  onInputChange = (e) => {
    this.setState({input: e.target.value})
  }

  render() {
    return (
      <>
        <h3>Memioze</h3>
        <div style={{marginBottom: '10px'}}>
          <label>Function: </label>
          <label>{this.props.func.toString()}</label>
        </div>
        <label>Input value (num): </label>
        <input style={{marginRight: '10px'}} onChange={this.onInputChange} value={this.state.input}></input>
        <button style={{marginRight: '10px'}} onClick={this.handleClick}>Calculate</button>
        <label>Result: </label>
        <span>{this.state.result}</span>
      </>
    )
  }
}


class HigherOrderFunctionApp extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.openDisplayCode = this.openDisplayCode.bind(this);
    this.onCancelDisplayCode = this.onCancelDisplayCode.bind(this);
    this.state = {
      showCode: false
    }
  }

  goBack() {
    ReactDOM.render(<ReactTreeApp/>, document.getElementById('root'));
  }

  openDisplayCode() {
    this.setState({showCode: true});
  }

  onCancelDisplayCode() {
    this.setState({showCode: false});
  }

  render() {
    let array = ['a','b','c'];

    return (
      <div style={{height: '100%', position: 'absolute', width: '100%', marginLeft: '20px'}}>
        <div style={{textAlign: 'center', backgroundColor: 'lightGreen', paddingBottom: '15px'}}>
          <span><button onClick={this.goBack}>Back</button><label style={{fontSize: '24pt', marginLeft: '50px', marginRight: '50px'}}>Playground!</label><button onClick={this.openDisplayCode}>Code</button></span>
        </div>
        <Memioze func={(num) => num * 3}></Memioze>  
      </div>
    )
  }
}

export default HigherOrderFunctionApp;
`
export default code;

