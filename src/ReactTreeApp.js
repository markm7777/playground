
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
import D3Example from './D3Example.js';
import D3Playground from './D3Playground.js';
import D3WeatherApp from './D3Weather.js';
import DragAndDropApp from './DragAndDropApp.js';
import DragAndDropFiles from './DragAndDropFiles.js';

import DummyApp from './DummyApp.js';
import GiphyGetterApp from './GiphyGetterApp.js';

let git = true;

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
      draganddrop: DragAndDropApp,
      draganddropfiles: DragAndDropFiles,
      d3: D3Example,
      d3playground: D3Playground,
      d32: D3WeatherApp,
      dummy: DummyApp
    };
    const DynamicComponent = componentsMap[type];
    ReactDOM.render(<DynamicComponent/>, document.getElementById('root'));
  }

  render() {
    return (
      <div id='mainContainer'>
        <h1 style={{marginLeft: '50px', marginTop: '10px',  marginBottom: '10px', padding: '0px'}}>React/Javascript Playground</h1>
        <h2 style={{marginLeft: '50px', marginTop: '10px'}}>State Management Options, Hooks, D3, Drag and Drop, Misc.</h2>
        <div id='mainSubContainer'>
          <ul id='mainMenu'>
            <div style={{backgroundColor: 'lightgreen', paddingTop: '5px', paddingLeft: '5px', paddingRight: '5px', paddingBottom: '0px', marginTop: '-5px'}}>
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
                <button className='button' style={{marginTop: '0px', marginBottom: '5px'}} onClick={() => this.onClick('hookscontext')}>Context+Hooks</button>
              </li>
            </div>
            <li>
              <button className='button' style={{marginTop: '15px'}} onClick={() => this.onClick('draganddrop')}>DragAndDrop</button>
            </li>
            {git !== true ? (
            <li>
              <button className='button' style={{marginTop: '0px'}} onClick={() => this.onClick('draganddropfiles')}>DragAndDropFiles</button>
            </li>
            ) : ''}
            </ul>
          <ul id='mainMenu'>
            <li>
              <button className='button' onClick={() => this.onClick('hof')}>HigherOrderFunction</button>
            </li>
            {/* {git !== true ? ( */}
             <li>
              <button className='button' onClick={() => this.onClick('exercises')}>JavaScriptExercises</button>
            </li>
            {/* ) : ''} */}

            <li>
              <button className='button' style={{marginTop: '0px'}} onClick={() => this.onClick('giphy')}>GiphyGetter</button>
            </li>
            <li>
              <button className='button' style={{marginTop: '0px'}} onClick={() => this.onClick('misc')}>Misc</button>
            </li>
            <li>
              <button className='button' style={{marginTop: '0px'}} onClick={() => this.onClick('d3')}>D3</button>
            </li>
            <li>
              <button className='button' style={{marginTop: '0px'}} onClick={() => this.onClick('d3playground')}>D3-Playground</button>
            </li>
            <li>
              <button className='button' style={{marginTop: '0px'}} onClick={() => this.onClick('d32')}>D3-Weather</button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}



export default ReactTreeApp;
