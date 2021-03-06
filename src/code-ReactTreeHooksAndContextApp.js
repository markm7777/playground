let code = `
import React, {useContext} from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ReactTreeApp from './ReactTreeApp';
import {Line, LineTo, SteppedLineTo} from 'react-lineto';
import DialogContainer from './DialogContainer.js';
import DisplayCode from './DisplayCode.js'
import code from './code-ReactTreeHooksAndContextApp.js';


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
  const data = useContext(userContext);

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
}

function Child1(props) {
  const data = useContext(userContext);
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

  //this doesn't work in classes
  //const data = useContext(userContext);
  
  //should use this, but it doesn't work - yet
  //static contextType = userContext

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
          Provider
        </div>
        <div className='titleRow'>
          Consumer/useContext
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

  //this doesn't work in classes
  //const data = useContext(userContext);
  
  //should use this, but it doesn't work - yet
  //static contextType = userContext

  render() {
    return (
      <>
        <userContext.Provider value={this.state}>
          <userContext.Consumer>
            {(data) => {
              return (
                <>
                  {console.log(this.context)}
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

class ReactTreeHooksAndContextApp extends React.Component {
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
        <span style={{marginLeft: '50px'}}><button onClick={this.goBack}>Back</button><button onClick={this.openDisplayCode}>Code</button><label style={{fontSize: '24pt', marginLeft: '200px'}}>Hooks + Context</label></span>
        <Parent name={'Parent'}></Parent>
        <DialogContainer show={this.state.showCode} onCancel={this.onCancelDisplayCode} dialogContent={<DisplayCode 
          code={code} onCancel={this.onCancelLogout}/>}
        width='1000px' height='700px' title={'ReactTreeHooksAndContextApp.js'}></DialogContainer>
      </div>
    )
  }
}



export default ReactTreeHooksAndContextApp;
`
export default code;
