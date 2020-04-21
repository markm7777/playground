
let code = `
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ReactTreeApp from './ReactTreeApp';
import { bounce, shake, hinge } from 'react-animations';
import styled, {keyframes} from 'styled-components';
import DialogContainer from './DialogContainer';
import './DialogContainer.css';


function HingeText(props) {

  return (
    <div style={{marginLeft: '500px', marginTop: '250px', width: '150px', border: '3px solid black'}}>
        <pre>
          <code>
            {code}
          </code>
        </pre>
    </div>
  )
}

function Dummy() {
  return (
    <pre>
      <code>
    <div>{code}</div>
      </code>
    </pre>
  )
}



class PlaygroundApp extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.goCode = this.goCode.bind(this);
    this.onCancelLogout = this.onCancelLogout.bind(this);
    this.state = {
      showCode: false
    }
  }

  goBack() {
    ReactDOM.render(<ReactTreeApp/>, document.getElementById('root'));
  }

  goCode() {
    this.setState({showCode: true});
  }

  onCancelLogout() {
    this.setState({showCode: false});
  }


  render() {
    return (
      <div style={{height: '100%', position: 'absolute', width: '100%'}}>
        <span style={{marginLeft: '50px'}}><button onClick={this.goBack}>Back</button><button onClick={this.goCode}>Code</button><label style={{fontSize: '24pt', marginLeft: '200px'}}>Playground!</label></span>
        <HingeText>
          Hello
        </HingeText>
      
        <DialogContainer show={this.state.showCode} onCancel={this.onCancelLogout} dialogContent={<Dummy 
          onCancel={this.onCancelLogout}/>}
          width='1000px' height='1000px' title={'Code'}></DialogContainer>


     </div>
    )
  }
}

export default PlaygroundApp;
`
export default code;