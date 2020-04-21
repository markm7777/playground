
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ReactTreeApp from './ReactTreeApp';
import {Line, LineTo, SteppedLineTo} from 'react-lineto';
import { connect } from 'react-redux';
import { incrementAction } from './actions';
import { decrementAction } from './actions';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reducer from './reducers.js';

import DialogContainer from './DialogContainer.js';
import DisplayCode from './DisplayCode.js'
import code from './code-ReactTreeReduxApp.js';


const store = createStore(reducer);

function GrandChild1(props) {
  return (
    <div id='grandchild21Node' className='G1'>
      <div className='content'>
        <div className='titleRow'>
          {props.name}<b style={{color: 'red', paddingLeft: '5px'}}>(rdx)</b>
        </div>
        <br/>
        <div className='buttonRow'>
          <button onClick={props.increment}>Click</button>
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
          {props.name}<b style={{color: 'red', paddingLeft: '5px'}}>(rdx)</b>
        </div>
        <br/>
        <div className='buttonRow'>
          <button onClick={props.increment}>Click</button>
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
          {props.name}<b style={{color: 'red', paddingLeft: '5px'}}>(rdx)</b>
        </div>
        <br/>
        <div className='buttonRow'>
          <button onClick={props.increment}>Click</button>
        </div>
        <div className='valueRow'>
          <p>{props.count}</p>
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
  
  render() {
    return (  
      <>
        <div id='child2Node' className='C2' style={{backgroundColor: 'lightgreen'}}>
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
        <GrandChild1 name={'Grandchild1'}></GrandChild1>
        <GrandChild2 name={'Grandchild2'}></GrandChild2>
      </>
    )  
  }
}

function Redux(props) {

  return (
    <div id='reduxNode' className='RED'>
      <div className='content'>
        <div className='titleRow'>
          {props.name}
        </div>
        <div className='titleRow'>
          actions/reducers
        </div>
        <div className='titleRow'>
          connect
        </div>
        <div className='titleRow'>
          mapStateToProps
        </div>
        <div className='titleRow'>
          mapDispatchToProps
        </div>
        <br/>
      </div>
    </div>
  )
}

function Parent(props) {
  return (
    <>
      <div id='parentNode' className='P'>
        <div className='content'>
          <div className='titleRow'>
            {props.name}<b style={{color: 'red', paddingLeft: '5px'}}>(rdx)</b>
          </div>
          <br/>
          <div className='buttonRow'>
            <button onClick={props.increment}>Click</button>
          </div>
          <div className='valueRow'>
            <p>{props.count}</p>
          </div>
        </div>
      </div>
      <Redux name={'redux'}></Redux>
      <Child1 name={'Child1'}></Child1>
      <Child2 name={'Child2'}></Child2>
      {/* <Child1 name={'Child1'} onClick={this.handleClick} value={this.state.count}></Child1>
      <Child2 name={'Child2'} onClick={this.handleClick} value={this.state.count}></Child2> */}
      <SteppedLineTo from="P" to="C2" borderColor="#000" borderStyle="solid" borderWidth={1} fromAnchor="bottom center" toAnchor="top center" delay='0'/>
      <SteppedLineTo from="P" to="C1" borderColor="#000" borderStyle="solid" borderWidth={1} fromAnchor="bottom center" toAnchor="top center" delay='0'/>
      <SteppedLineTo from="C2" to="G1" borderColor="#000" borderStyle="solid" borderWidth={1} fromAnchor="bottom center" toAnchor="top center" delay='0'/>
      <SteppedLineTo from="C2" to="G2" borderColor="#000" borderStyle="solid" borderWidth={1} fromAnchor="bottom center" toAnchor="top center" delay='0'/>

    </>
  )
}

class ReactTreeReduxApp extends React.Component {
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
      <Provider store={store}>
        <div style={{height: '100%', position: 'absolute', width: '100%', border: '3px solid white'}}>
        <div style={{textAlign: 'center', backgroundColor: 'lightGreen', paddingBottom: '15px'}}>
          <span><button onClick={this.goBack}>Back</button><label style={{fontSize: '24pt', marginLeft: '50px', marginRight: '50px'}}>Redux</label><button onClick={this.openDisplayCode}>Code</button></span>
        </div>

        <Parent name={'Parent'}></Parent>
        <DialogContainer show={this.state.showCode} onCancel={this.onCancelDisplayCode} dialogContent={<DisplayCode 
          code={code} onCancel={this.onCancelLogout}/>}
        width='1000px' height='700px' title={'ReactTreeReduxApp.js'}></DialogContainer>
        </div>
      </Provider>
    )
  }
}

const mapStateToProps_Parent = (state, ownProps) => ({
  count: state.count,
  name: ownProps.name
})
const mapDispatchToProps_Parent = (dispatch) => ({
  increment: () => {dispatch(incrementAction())},
  decrement: () => {dispatch(decrementAction())}
})
Parent = connect(
  mapStateToProps_Parent,
  mapDispatchToProps_Parent
)(Parent)


const mapStateToProps_Child1 = (state, ownProps) => ({
  count: state.count,
  name: ownProps.name
})
const mapDispatchToProps_Child1 = (dispatch) => ({
  increment: () => {dispatch(incrementAction())},
  decrement: () => {dispatch(decrementAction())}
})
Child1 = connect(
  mapStateToProps_Child1,
  mapDispatchToProps_Child1
)(Child1)

const mapStateToProps_Child2 = (state, ownProps) => ({
  count: state.count,
  name: ownProps.name
})
const mapDispatchToProps_Child2 = (dispatch) => ({
  increment: () => {dispatch(incrementAction())},
  decrement: () => {dispatch(decrementAction())}
})
// Child2 = connect(
//   mapStateToProps_Child2,
//   mapDispatchToProps_Child2
// )(Child2)


const mapStateToProps_GrandChild1 = (state, ownProps) => ({
  count: state.count,
  name: ownProps.name
})
const mapDispatchToProps_GrandChild1 = (dispatch) => ({
  increment: () => {dispatch(incrementAction())},
  decrement: () => {dispatch(decrementAction())}
})
GrandChild1 = connect(
  mapStateToProps_GrandChild1,
  mapDispatchToProps_GrandChild1
)(GrandChild1)

const mapStateToProps_GrandChild2 = (state, ownProps) => ({
  count: state.count,
  name: ownProps.name
})
const mapDispatchToProps_GrandChild2 = (dispatch) => ({
  increment: () => {dispatch(incrementAction())},
  decrement: () => {dispatch(decrementAction())}
})
GrandChild2 = connect(
  mapStateToProps_GrandChild2,
  mapDispatchToProps_GrandChild2
)(GrandChild2)


export default ReactTreeReduxApp;
