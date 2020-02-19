
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ReactTreeVanillaApp from './ReactTreeVanillaApp';
import ReactTreeContextApp from './ReactTreeContextApp';
import ReactTreeReduxApp from './ReactTreeReduxApp';
import ReactTreeHooksApp from './ReactTreeHooksApp';
import PlaygroundApp from './PlaygroundApp';
import ReactTreeHooksAndContextApp from './ReactTreeHooksAndContextApp';


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
      play: PlaygroundApp,
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
            <button className='button' onClick={() => this.onClick('redux')}>Redux</button>
          </li>
          <li>
            <button className='button' style={{marginTop: '50px'}} onClick={() => this.onClick('hooks')}>Hooks</button>
          </li>
          <li>
            <button className='button' style={{marginTop: '50px'}} onClick={() => this.onClick('hookscontext')}>Context+Hooks</button>
          </li>
          <li>
            <button className='button' style={{marginTop: '50px'}} onClick={() => this.onClick('play')}>Playground</button>
          </li>

        </ul>
      </>
    )
  }
}



export default ReactTreeApp;
