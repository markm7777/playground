
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ReactTreeVanillaApp from './ReactTreeVanillaApp';
import ReactTreeContextApp from './ReactTreeContextApp';
import ReactTreeReduxApp from './ReactTreeReduxApp';
import ReactTreeHooksApp from './ReactTreeHooksApp';
import HigherOrderFunctionApp from './HigherOrderFunctionApp.js';
import JavaScriptExercises from './JavaScriptExercises.js';
import MiscApp from './MiscApp';
import ReactTreeHooksAndContextApp from './ReactTreeHooksAndContextApp';
import DummyApp from './DummyApp.js';
import GiphyGetterApp from './GiphyGetterApp.js';

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
      exercises: JavaScriptExercises,
      misc: MiscApp,
      giphy: GiphyGetterApp,
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
              <button className='button' onClick={() => this.onClick('exercises')}>JavaScriptExercises</button>
            </li>
            <li>
              <button className='button' style={{marginTop: '0px'}} onClick={() => this.onClick('giphy')}>GiphyGetter</button>
            </li>
            <li>
              <button className='button' style={{marginTop: '0px'}} onClick={() => this.onClick('misc')}>Misc</button>
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
