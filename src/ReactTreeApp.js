
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ReactTreeVanillaApp from './ReactTreeVanillaApp';
import ReactTreeContextApp from './ReactTreeContextApp';
import ReactTreeReduxApp from './ReactTreeReduxApp';
import ReactTreeHooksApp from './ReactTreeHooksApp';
import HigherOrderFunctionApp from './HigherOrderFunctionApp.js';
import PlaygroundApp from './PlaygroundApp';
import ReactTreeHooksAndContextApp from './ReactTreeHooksAndContextApp';
import DummyApp from './DummyApp.js';

class ReactTreeApp extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(type) {
    const componentsMap = {
      vanilla: ReactTreeVanillaApp,
      context: ReactTreeContextApp,
      hooks: ReactTreeHooksApp,
      redux: ReactTreeReduxApp,
      hof: HigherOrderFunctionApp,
      play: PlaygroundApp,
      hookscontext: ReactTreeHooksAndContextApp,
      dummy: DummyApp
    };
    const DynamicComponent = componentsMap[type];
    ReactDOM.render(<DynamicComponent/>, document.getElementById('root'));
  }

  render() {
    return (
      <div id='mainContainer'>
        <h1 style={{marginLeft: '50px'}}>React - State Management Options, Hooks, Misc.</h1>
        <div id='mainSubContainer'>
          <ul id='mainMenu'>
            <li>
              <button className='button' onClick={() => this.onClick('vanilla')}>Vanilla</button>
            </li>
            <li>
              <button className='button' onClick={() => this.onClick('context')}>Context</button>
            </li>
            <li>
              <button className='button' onClick={() => this.onClick('redux')}>Redux</button>
            </li>
            <li>
              <button className='button' style={{marginTop: '0px'}} onClick={() => this.onClick('hooks')}>Hooks</button>
            </li>
            <li>
              <button className='button' style={{marginTop: '0px'}} onClick={() => this.onClick('hookscontext')}>Context+Hooks</button>
            </li>
          </ul>
          <ul id='mainMenu'>
            <li>
              <button className='button' onClick={() => this.onClick('hof')}>HigherOrderFunction</button>
            </li>
            <li>
              <button className='button' style={{marginTop: '0px'}} onClick={() => this.onClick('play')}>Playground</button>
            </li>
            <li>
              <button className='button' onClick={() => this.onClick('dummy')}>?</button>
            </li>
            <li>
              <button className='button' onClick={() => this.onClick('dummy')}>?</button>
            </li>
            <li>
              <button className='button' style={{marginTop: '0px'}} onClick={() => this.onClick('dummy')}>?</button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}



export default ReactTreeApp;
