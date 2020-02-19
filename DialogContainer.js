import React from 'react';
import './DialogContainer.css';

class DialogContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <React.Fragment>
        <div id='containerBackground'>       
          <div id='containerContent' style={{width: this.props.width, height: this.props.height}}>
            <div id='containerContentTitle'>
              <span id='title'>{this.props.title}</span>
              <span>  </span>
              <div id='cancelX'> 
                <button onClick={this.props.onCancel}>X</button>
              </div>
            </div>
            <div id='containerContentCustom'>
              {this.props.dialogContent}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DialogContainer;
