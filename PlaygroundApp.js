import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ReactTreeApp from './ReactTreeApp';
import { bounce, shake, hinge } from 'react-animations';
import styled, {keyframes} from 'styled-components';

import DialogContainer from './DialogContainer.js';
import DisplayCode from './DisplayCode.js'
import code from './code-playground.js';

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
      <div style={{height: '100%', position: 'absolute', width: '100%'}}>
        <div style={{textAlign: 'center', backgroundColor: 'lightGreen', paddingBottom: '15px'}}>
          <span><button onClick={this.goBack}>Back</button><label style={{fontSize: '24pt', marginLeft: '50px', marginRight: '50px'}}>Playground!</label><button onClick={this.openDisplayCode}>Code</button></span>
        </div>
        <HingeText>
          Hello
        </HingeText>
        <DialogContainer show={this.state.showCode} onCancel={this.onCancelDisplayCode} dialogContent={<DisplayCode 
          code={code} onCancel={this.onCancelLogout}/>}
        width='1000px' height='700px' title={'PlaygroundApp.js'}></DialogContainer>
     </div>
    )
  }
}

export default PlaygroundApp;
