import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ReactTreeApp from './ReactTreeApp';
import { bounce, shake, hinge } from 'react-animations';
import styled, {keyframes} from 'styled-components';

const Bounce = styled.div`animation: 1S ${keyframes`${bounce}`} infinite`;
const Shake = styled.div`animation: 2S ${keyframes`${shake}`} infinite`;
const Hinge = styled.div`animation: 4S ${keyframes`${hinge}`} infinite`;

function HingeText(props) {
  return (
    <div style={{marginLeft: '500px', marginTop: '250px', width: '150px', border: '3px solid black'}}>
        <Hinge>
          <div style={{fontSize:'48pt'}}>{props.children}</div>
        </Hinge>
    </div>
  )
}

class PlaygroundApp extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    ReactDOM.render(<ReactTreeApp/>, document.getElementById('root'));
  }

  render() {
    return (
      <div style={{height: '100%', position: 'absolute', width: '100%'}}>
        <span style={{marginLeft: '50px'}} onClick={this.goBack}><button>Back</button><label style={{fontSize: '24pt', marginLeft: '200px'}}>Playground!</label></span>
        <HingeText>
          Hello
        </HingeText>
     </div>
    )
  }
}

export default PlaygroundApp;
