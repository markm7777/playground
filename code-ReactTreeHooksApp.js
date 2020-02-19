let code = `
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ReactTreeApp from './ReactTreeApp';
import {Line, LineTo, SteppedLineTo} from 'react-lineto';
import {useState,  useEffect, useContext, createContext} from 'react';

// HOOKS 
// using useState hook to hold state in 'Parent' and changed all class components to function components
// prop drilling is still used

//TODO above:
// add context or useContext hook?   

function GrandChild1(props) {
  return (
    <div id='grandchild21Node' className='G1'>
      <div className='content'>
        <div className='titleRow'>
          {props.name}
        </div>
        <br/>
        <div className='buttonRow'>
          <button onClick={() => props.incrementCount(props.count + 1)}>Click</button>
        </div>
        <div className='valueRow'>
          <p>{props.count}</p>
        </div>
      </div>
    </div>
  )
}

function GrandChild2(props) {
  return (
    <div id='grandchild22Node' className='G2'>
      <div className='content'>
        <div className='titleRow'>
          {props.name}
        </div>
        <br/>
        <div className='buttonRow'>
        <button onClick={() => props.incrementCount(props.count + 1)}>Click</button>
        </div>
        <div className='valueRow'>
          <p>{props.count}</p>
        </div>

      </div>
    </div>
  )
}

function Child1(props) {
  return (
    <div id='child1Node' className='C1'>
      <div className='content'>
        <div className='titleRow'>
          {props.name}
        </div>
        <br/>
        <div className='buttonRow'>
          <button onClick={() => props.incrementCount(props.count + 1)}>Click</button>
        </div>
        <div className='valueRow'>
          <p>{props.count}</p>
        </div>
      </div>
    </div>
  )
}

function Child2(props) {
  return (  
    <>
      <div id='child2Node' className='C2'>
        <div className='content'>
          <div className='titleRow'>
            {props.name}
          </div>
          <br/>
          <div className='buttonRow'>
            <button onClick={() => props.incrementCount(props.count + 1)}>Click</button>
          </div>
          <div className='valueRow'>
            <p>{props.count}</p>
          </div>
        </div>
      </div>
      <GrandChild1 name={'Grandchild1'} incrementCount={props.incrementCount} count={props.count}></GrandChild1>
      <GrandChild2 name={'Grandchild2'} incrementCount={props.incrementCount} count={props.count}></GrandChild2>
    </>
  )  
}

function Parent(props) {
  const [count, setCount] = useState(0);
  return (
      <>
        <div id='parentNode' className='P'>
          <div className='content'>
            <div className='titleRow'>
              {props.name}<b style={{color: 'red', paddingLeft: '5px'}}>(useState)</b>
            </div>
            <br/>
            <div className='buttonRow'>
              <button onClick={() => setCount(count + 1)}>Click</button>
            </div>
            <div className='valueRow'>
              <p>{count}</p>
            </div>
          </div>
        </div>
        <Child1 name={'Child1'} incrementCount={setCount} count={count}></Child1>
        <Child2 name={'Child2'} incrementCount={setCount} count={count}></Child2>
        <SteppedLineTo from="P" to="C2" borderColor="#000" borderStyle="solid" borderWidth={1} fromAnchor="bottom center" toAnchor="top center" delay='0'/>
        <SteppedLineTo from="P" to="C1" borderColor="#000" borderStyle="solid" borderWidth={1} fromAnchor="bottom center" toAnchor="top center" delay='0'/>
        <SteppedLineTo from="C2" to="G1" borderColor="#000" borderStyle="solid" borderWidth={1} fromAnchor="bottom center" toAnchor="top center" delay='0'/>
        <SteppedLineTo from="C2" to="G2" borderColor="#000" borderStyle="solid" borderWidth={1} fromAnchor="bottom center" toAnchor="top center" delay='0'/>
      </>
  )
}

class ReactTreeHooksApp extends React.Component {
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
        <span style={{marginLeft: '50px'}}><button  onClick={this.goBack}>Back</button><label style={{fontSize: '24pt', marginLeft: '200px'}}>Hooks</label></span>
        <Parent name={'Parent'}></Parent>
      </div>
    )
  }
}

export default ReactTreeHooksApp;
`
export default code;
