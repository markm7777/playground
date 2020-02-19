


//
// NOT USED!
//


//import React from 'react';

// class InputComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.onPaste = this.onPaste.bind(this);
//     this.state = {
//       userName: ''
//     }
//   }

//   handleInputChange(event) {
//     this.setState({userName: event.target.value});
//   }

//   onPaste(e) {
//     e.preventDefault();
//     console.log("You pasted. Don't do that!");
//   }

//   render() {
//     return (
//       <input type="text" value={this.state.userName} onPaste={this.onPaste} onChange={this.handleInputChange}  />
//     )
//   }
// }

// const userContext = React.createContext()

// class Main2 extends React.Component {
//   render() {
//     return (

//       <userContext.Consumer>
//         {(data) => {
//         // {({user, sayHello}) => {
//           return (
//             <>
//           <p>{data.user}</p>
//             <button onClick={data.sayHello}>Hi</button>    
//             </>
//           );
//         }}
//       </userContext.Consumer>
//     );
//   }
// }


// class Main extends React.Component {
  

//   render() {
//     return (
//       <Main2></Main2>
//     );
//   }
// }


// class App extends React.Component {



//   constructor(props) {
//     super(props);
//     this.sayHello = this.sayHello.bind(this);
//     this.change = this.change.bind(this);
//     this.state = {
//       user: 'Bobo',
//       sayHello: this.sayHello
//     }
//   }

//   sayHello() {
//     console.log('hey, hi, hello, what up');
//   }

//   change() {
//     this.setState({user: 'toto'});
//   }

//   render() {
//     return (
//       <userContext.Provider value={this.state}>
//           <Main/>
//           <button onClick={this.change}>Change</button>
//       </userContext.Provider>
//     );
//   }
// }

// export default App;


// class Cat extends React.Component {
//   render() {
//     const mouse = this.props.mouse;
//     return (
//       <img src="/cat.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
//     );
//   }
// }

// class Mouse extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleMouseMove = this.handleMouseMove.bind(this);
//     this.state = { x: 0, y: 0 };
//   }

//   handleMouseMove(event) {
//     this.setState({
//       x: event.clientX,
//       y: event.clientY
//     });
//   }

//   render() {
//     return (
//       <div style={{ border: '3px solid red', height: '100%', width: '100%'}} onMouseMove={this.handleMouseMove}>
//         {this.props.render(this.state)}

//         {/* <h1>Move the mouse around!</h1>
//         <p>The current mouse position is ({this.state.x}, {this.state.y})</p> */}
//       </div>
//     );
//   }
// }

// class MouseTracker extends React.Component {
//   render() {
//     return (
//       <div style={{ border: '3px solid green', height: '100%', width: '100%'}}>
//         <h1>Move the mouse around!</h1>
//         <Mouse render={mouse => (
//         // <p>The current mouse position is ({mouse.x}, {mouse.y})</p>
//         <p><Cat mouse={mouse} /></p>
//         )}/>
//       </div>
//     );
//   }
// }


// class App extends React.Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <MouseTracker></MouseTracker>
//     )
//   }
// }

// import React, { useState, useEffect } from 'react';

// function Example() {
//   const [count, setStuff] = useState(0);

//   //Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });

//   function onClick() {
//     setStuff(count + 1);
//   }

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={onClick}>
//         Click me
//       </button>
//       <svg>
//         <line strokeWidth="1px" stroke="#000000"  x1="0" y1="0" x2="100" y2="100" id="mySVG"/>
//       </svg>

//     </div>
//   );
// }

import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ReactTreeVanillaApp from './ReactTreeVanillaApp';
import ReactTreeContextApp from './ReactTreeContextApp';
import ReactTreeReduxApp from './ReactTreeReduxApp';
import ReactTreeHooksApp from './ReactTreeHooksApp';
import ReactTreeHooksAndContextApp from './ReactTreeHooksAndContextApp';

// function GrandChild1(props) {
//   return (
//     <div id='grandchild21Node'>
//       <div className='content'>
//         <div className='titleRow'>
//           {props.name}
//         </div>
//         <br/>
//         <div className='buttonRow'>
//           <button onClick={props.onClick}>Click</button>
//         </div>
//         <div className='valueRow'>
//           <p>{props.value}</p>
//         </div>

//       </div>
//     </div>
//   )
// }

// function GrandChild2(props) {
//   return (
//     <div id='grandchild22Node'>
//       <div className='content'>
//         <div className='titleRow'>
//           {props.name}
//         </div>
//         <br/>
//         <div className='buttonRow'>
//           <button onClick={props.onClick}>Click</button>
//         </div>
//         <div className='valueRow'>
//           <p>{props.value}</p>
//         </div>

//       </div>
//     </div>
//   )
// }

// function Child1(props) {
//   return (
//     <div id='child1Node'>
//       <div className='content'>
//         <div className='titleRow'>
//           {props.name}
//         </div>
//         <br/>
//         <div className='buttonRow'>
//           <button onClick={props.onClick}>Click</button>
//         </div>
//         <div className='valueRow'>
//           <p>{props.value}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// function Child2(props) {
//   return (  
//     <>
//       <div id='child2Node'>
//         <div className='content'>
//           <div className='titleRow'>
//             {props.name}
//           </div>
//           <br/>
//           <div className='buttonRow'>
//             <button onClick={props.onClick}>Click</button>
//           </div>
//           <div className='valueRow'>
//             <p>{props.value}</p>
//           </div>
//         </div>
//       </div>
//       <GrandChild1 name={'Grandchild1'} onClick={props.onClick} value={props.value}></GrandChild1>
//       <GrandChild2 name={'Grandchild2'} onClick={props.onClick} value={props.value}></GrandChild2>
//     </>
//   )  
// }


// class Parent extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     }
//     this.handleClick = this.handleClick.bind(this);
//     this.myFunction = this.myFunction.bind(this);
//   }

//   myFunction() {
//     this.setState((prev) => {
//       return {count: prev.count + 1}; 
//     });
//   }

//   handleClick() {
//     setTimeout(this.myFunction, 300)
//   }

//   render() {
//     return (
//       <>
//         <div id='parentNode'>
//           <div className='content'>
//             <div className='titleRow'>
//               {this.props.name}<b style={{color: 'red', paddingLeft: '5px'}}>(state)</b>
//             </div>
//             <br/>
//             <div className='buttonRow'>
//               <button onClick={this.handleClick}>Click</button>
//             </div>
//             <div className='valueRow'>
//               <p>{this.state.count}</p>
//             </div>
//           </div>
//         </div>
//         <Child1 name={'Child1'} onClick={this.handleClick} value={this.state.count}></Child1>
//         <Child2 name={'Child2'} onClick={this.handleClick} value={this.state.count}></Child2>
//       </>
//     )
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(type) {
    const componentsMap = {
      vanilla: ReactTreeVanillaApp,
      context: ReactTreeContextApp,
      hooks: ReactTreeContextApp,
      redux: ReactTreeContextApp,
      hookscontext: ReactTreeHooksAndContextApp
    };
    const DynamicComponent = componentsMap[type];
    ReactDOM.render(<DynamicComponent/>, document.getElementById('root'));
  }

  render() {
    return (
      <>
        <h1 style={{marginLeft: '50px'}}>React State Management Options (and Hooks):</h1>
        <ul id='mainMenu'>
          <li>
            <button className='button' onClick={() => this.onClick('vanilla')}>Vanilla</button>
          </li>
          <li>
            <button className='button' onClick={() => this.onClick('context')}>Context</button>
          </li>
          <li>
            <button className='button' onClick={() => this.onClick('context')}>Redux</button>
          </li>
          <li>
            <button className='button' style={{marginTop: '50px'}} onClick={() => this.onClick('context')}>Hooks</button>
          </li>
          <li>
            <button className='button' onClick={() => this.onClick('hookscontext')}>Hooks+</button>
          </li>
        </ul>
      </>
    )
  }
}



export default App;
