
import React from 'react';
import './App.css';
import {Line, LineTo, SteppedLineTo} from 'react-lineto';
import ReactDOM from 'react-dom';
import ReactTreeApp from './ReactTreeApp';
import DialogContainer from './DialogContainer.js';
import DisplayCode from './DisplayCode.js'
import code from './code-ReactTreeVanillaApp.js';


function GrandChild1(props) {
  return (
    <div id='grandchild21Node' className='G1'>
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
    <div id='grandchild22Node' className='G2'>
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

function Child1(props) {
  return (
    <div id='child1Node' className="C1" >
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

function Child2(props) {
  return (  
    <>
      <div id='child2Node' className="C2" >
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
      <GrandChild1 name={'Grandchild1'} onClick={props.onClick} value={props.value}></GrandChild1>
      <GrandChild2 name={'Grandchild2'} onClick={props.onClick} value={props.value}></GrandChild2>
    </>
  )  
}


class Parent extends React.Component {

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
      <>
        <div id='parentNode' className='P' >
          <div className='content'>
            <div className='titleRow'>
              {this.props.name}<b style={{color: 'red', paddingLeft: '5px'}}>(state)</b>
            </div>
            <br/>
            <div className='buttonRow'>
              <button onClick={this.handleClick}>Click</button>
            </div>
            <div className='valueRow'>
              <p>{this.state.count}</p>
            </div>
          </div>
        </div>
        <Child1 name={'Child1'} onClick={this.handleClick} value={this.state.count}></Child1>
        <Child2 name={'Child2'} onClick={this.handleClick} value={this.state.count}></Child2>
        <SteppedLineTo from="P" to="C2" borderColor="#000" borderStyle="solid" borderWidth={1} fromAnchor="bottom center" toAnchor="top center" delay='0'/>
        <SteppedLineTo from="P" to="C1" borderColor="#000" borderStyle="solid" borderWidth={1} fromAnchor="bottom center" toAnchor="top center" delay='0'/>
        <SteppedLineTo from="C2" to="G1" borderColor="#000" borderStyle="solid" borderWidth={1} fromAnchor="bottom center" toAnchor="top center" delay='0'/>
        <SteppedLineTo from="C2" to="G2" borderColor="#000" borderStyle="solid" borderWidth={1} fromAnchor="bottom center" toAnchor="top center" delay='0'/>
      </>
    )
  }
}

class ReactTreeVanillaApp extends React.Component {
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
    return (
      <div style={{height: '100%', position: 'absolute', width: '100%', border: '3px solid white'}}>
        <div style={{textAlign: 'center', backgroundColor: 'lightGreen', paddingTop: '15px', paddingBottom: '15px'}}>
          <span><button onClick={this.goBack}>Back</button><label style={{fontSize: '24pt', marginLeft: '50px', marginRight: '50px'}}>Vanilla</label><button onClick={this.openDisplayCode}>Code</button></span>
        </div>
        <Parent className='parent' name={'Parent'}></Parent>
        <DialogContainer show={this.state.showCode} onCancel={this.onCancelDisplayCode} dialogContent={<DisplayCode 
          code={code} onCancel={this.onCancelLogout}/>}
        width='1000px' height='700px' title={'ReactTreeVanillaApp.js'}></DialogContainer>
      </div>
    )
  }
}

export default ReactTreeVanillaApp;
