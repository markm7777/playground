import React from 'react';
import ReactDOM from 'react-dom';
import ReactTreeApp from './ReactTreeApp';

class DummyApp extends React.Component {
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
        <div style={{textAlign: 'center', backgroundColor: 'lightGreen', paddingBottom: '15px'}}>
          <span><button onClick={this.goBack}>Back</button><label style={{fontSize: '24pt', marginLeft: '50px', marginRight: '50px'}}>Dummy</label><button onClick={this.openDisplayCode}>Code</button></span>
        </div>
     </div>
    )
  }
}

export default DummyApp;
