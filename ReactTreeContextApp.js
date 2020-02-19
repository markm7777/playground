
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ReactTreeApp from './ReactTreeApp';
import {Line, LineTo, SteppedLineTo} from 'react-lineto';


const userContext = React.createContext();

//does NOT use context
function GrandChild1(props) {
  return (
    <div id='grandchild21Node'  className='G1' style={{backgroundColor: 'lightgreen'}}>
      <div className='content'>
        <div className='titleRow'>
          {props.name}
        </div>
        <br/>
        <div className='buttonRow'>
          <button onClick={props.onClick}>Click</button>
        </div>
        <div className='valueRow'>
          <p>{props.value}</p>
        </div>
      </div>
    </div>
  )
}

function GrandChild2(props) {
  return (
    <userContext.Consumer>
      {(data) => {
        return (
          <div id='grandchild22Node'  className='G2'>
            <div className='content'>
              <div className='titleRow'>
              {props.name}<b style={{color: 'red', paddingLeft: '5px'}}>(ctx)</b>
              </div>
              <br/>
              <div className='buttonRow'>
                <button onClick={data.update}>Click</button>
              </div>
              <div className='valueRow'>
                <p>{data.count}</p>
              </div>
            </div>
          </div>
        )
      }}
    </userContext.Consumer>
  )
}


function Child1(props) {
  return (
    <userContext.Consumer>
      {(data) => {
        return (
          <div id='child1Node'  className='C1'>
            <div className='content'>
              <div className='titleRow'>
                {props.name}<b style={{color: 'red', paddingLeft: '5px'}}>(ctx)</b>
              </div>
              <br/>
              <div className='buttonRow'>
                <button onClick={data.update}>Click</button>
              </div>
              <div className='valueRow'>
                <p>{data.count}</p>
              </div>
            </div>
          </div>
        )
      }}
    </userContext.Consumer>
  )
}

class Child2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.myFunction = this.myFunction.bind(this);
  }

  myFunction() {
    this.setState((prev) => {
      return {count: prev.count + 1}; 
    });
  }

  handleClick() {
    setTimeout(this.myFunction, 300)
  }

  render() {
    return (  
      <userContext.Consumer>
        {(data) => {
          return (
            <>
              <div id='child2Node'  className='C2'>
                <div className='content'>
                  <div className='titleRow'>
                    {this.props.name}<b style={{color: 'red', paddingLeft: '5px'}}>(state/ctx)</b>
                  </div>
                  <br/>
                  <div className='buttonRow'>
                    <button onClick={data.update}>Click</button>
                  </div>
                  <div className='valueRow'>
                    <p>{data.count}</p>
                  </div>
                </div>
              </div>
              <GrandChild1 name={'Grandchild1'} onClick={this.handleClick} value={this.state.count}></GrandChild1>
              <GrandChild2 name={'Grandchild2'}></GrandChild2>
            </>  
          )
        }}
      </userContext.Consumer>
    )  
  }
}

function Context(props) {

  return (
    <div id='contextNode' className='CON'>
      <div className='content'>
        <div className='titleRow'>
          {props.name}
        </div>
        <div className='titleRow'>
          createContext()
        </div>
        <div className='titleRow'>
          Provider/Consumer
        </div>
        <br/>
      </div>
    </div>
  )
}


class Parent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      update: () => {
        this.setState((prev) => {
          return {count: prev.count + 1}; 
        })
      }
    }
  }

//TODO - why is 'this' lost below? 
  // myFunction() {
  //   this.setState((prev) => {
  //     return {count: prev.count + 1}; 
  //   });
  // }

  // handleClick() {
  //   setTimeout(this.myFunction, 300)
  // }


  render() {
    return (
      <>
        <userContext.Provider value={this.state}>
          <userContext.Consumer>
            {(data) => {
              return (
                <>
                  <div id='parentNode' className='P'>
                    <div className='content'>
                      <div className='titleRow'>
                        {this.props.name}
                      </div>
                      <div className='titleRow'>
                        <b style={{color: 'red', paddingLeft: '5px'}}>(state(provider)/ctx)</b>
                      </div>
                      <br/>
                      <div className='buttonRow'>
                        <button onClick={data.update}>Click</button>
                      </div>
                      <div className='valueRow'>
                        <p>{data.count}</p>
                      </div>
                    </div>
                  </div>
                  <Context name={'context'}></Context>
                  <Child1 name={'Child1'}></Child1>
                  <Child2 name={'Child2'}></Child2>
                  <SteppedLineTo from="P" to="C2" borderColor="#000" borderStyle="solid" borderWidth={1} fromAnchor="bottom center" toAnchor="top center" delay='0'/>
                  <SteppedLineTo from="P" to="C1" borderColor="#000" borderStyle="solid" borderWidth={1} fromAnchor="bottom center" toAnchor="top center" delay='0'/>
                  <SteppedLineTo from="C2" to="G1" borderColor="#000" borderStyle="solid" borderWidth={1} fromAnchor="bottom center" toAnchor="top center" delay='0'/>
                  <SteppedLineTo from="C2" to="G2" borderColor="#000" borderStyle="solid" borderWidth={1} fromAnchor="bottom center" toAnchor="top center" delay='0'/>
                </>
              )
            }}
          </userContext.Consumer>
        </userContext.Provider>   
      </>
    )
  }
}

class ReactTreeContextApp extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    ReactDOM.render(<ReactTreeApp/>, document.getElementById('root'));
  }

  render() {
    return (
      <div style={{height: '100%', position: 'absolute', width: '100%', border: '3px solid white'}}>
        <span style={{marginLeft: '50px'}} onClick={this.goBack}><button>Back</button><label style={{fontSize: '24pt', marginLeft: '200px'}}>Context</label></span>
        <Parent name={'Parent'}></Parent>
      </div>
    )
  }
}



export default ReactTreeContextApp;
