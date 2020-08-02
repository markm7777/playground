let code = `
import React from 'react';
import './App.css';
import './DragAndDropFiles.css';
import ReactDOM from 'react-dom';
import ReactTreeApp from './ReactTreeApp';

import DialogContainer from './DialogContainer.js';
import DisplayCode from './DisplayCode.js'
import code from './code-playground.js';
import * as d3 from "d3";

function mapRange(in_min, in_max, out_min, out_max) {

  let func = function(value) {
    let mappedValue = (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    return (mappedValue);
   }
  return func;
}

const ProgressBar = (props) => {
  return(
    <div id='progressBar' style={{width: props.completed}}></div>
  )
}

class DragAndDrop extends React.Component {
  constructor(props) {
    super(props);
    this.uploadFilesXHR = this.uploadFilesXHR.bind(this);
    this.previewFile = this.previewFile.bind(this);
    this.files = [];
    this.state = {
      completed: 0,
      result: '',
      disabled: true
    }
    this.mapValueFunc = mapRange(0, 100, 0, 200); 
  };

  dragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.dropArea.classList.add('highlight');
  };

  dragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.dropArea.classList.add('highlight');
  }

  dragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.dropArea.classList.remove('highlight');
  }

  drop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let dt = e.dataTransfer;

    if (this.files.length == 0) {
      this.setState({completed: 0, result: '', disabled: false})
    }

    [...dt.files].map((item) => {this.previewFile(item)});
    this.files = this.files.concat([...dt.files]);
    this.dropArea.classList.remove('highlight');
  }

  removePreviews(files) {
    // setTimeout(() => {
      files.map((item) => {
        this.dropArea.removeChild(document.getElementById(item.id));
      })
    // }, 300)
  }

  uploadFilesXHR() {
    if (this.files.length > 0) {
      var xhr = new XMLHttpRequest()
      var formData = new FormData()
      xhr.open('POST', '/upload', true)
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

      xhr.upload.addEventListener("progress", (e) => {
        console.log(e.loaded);
        this.setState({completed: (e.loaded * 100.0 / e.total) || 100 })
      })

      xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          this.setState({result: ${`${`this.files.length`} file(s) uploaded to server`, `disabled: true`})
          this.removePreviews(this.files);
          this.files = [];
        }
        else if (xhr.readyState == 4 && xhr.status != 200) {
          this.setState({result: 'Error uploading file(s)'})
        }
      })

      for (let i = 0; i < this.files.length; i++) {
        formData.append('files', this.files[i])
      }    

      xhr.send(formData);
    }
  }
 
  previewFile = (file) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      let img = document.createElement('img')
      img.setAttribute('width', '50px');
      img.setAttribute('height', '50px');
      img.style.padding = '5px';
      img.setAttribute('id', file.originalFilename);
      img.src = reader.result;
      this.dropArea.appendChild(img);
    }
  }

  render() {
    return(
      <>
        <div id='mainDiv'>
          <div id='drop-area' className='drop-area' onDragEnter={this.dragEnter} onDragOver={this.dragOver} onDragLeave={this.dragLeave} onDrop={this.drop}
            ref={div => {this.dropArea = div}} >     

            <div id="background" style={{opacity: 0.5, fontSize: '32pt',textAlign: 'center', lineHeight: '200px'}}>
              --drop files here--
            </div>


          </div>
          <div id='buttonDiv'>  
            <button disabled={this.state.disabled} onClick={this.uploadFilesXHR}>Upload File(s)</button>
          </div>
          <div id='pbDiv'>
            <ProgressBar style={{marginLeft: '10px'}} completed={this.mapValueFunc(this.state.completed)}></ProgressBar>
          </div>
          <div id='progressDiv'>
            <label>{this.state.completed.toFixed(0)}%</label>
          </div>
          <div id='completedDiv'>
            <label>{this.state.result}</label>
          </div>
        </div>
      </>
    )
  }
}

class DragAndDropFiles extends React.Component {
    constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.openDisplayCode = this.openDisplayCode.bind(this);
    this.onCancelDisplayCode = this.onCancelDisplayCode.bind(this);
    this.state = {
      showCode: false
    };
  }

  componentDidMount() {
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
    // let screenWidth = window.screen.width;
    // let screenHeight = window.screen.height;

    return (
      <div style={{height: '100%', position: 'absolute', width: '100%'}}>
        <div style={{height: '5%', textAlign: 'center', backgroundColor: 'lightGreen', paddingTop: '15px', paddingBottom: '15px'}}>
          <span><button onClick={this.goBack}>Back</button><label style={{fontSize: '24pt', marginLeft: '50px', marginRight: '50px'}}>File Uploader</label><button onClick={this.openDisplayCode}>Code</button></span>
        </div>
        <DialogContainer show={this.state.showCode} onCancel={this.onCancelDisplayCode} dialogContent={<DisplayCode 
          code={code} onCancel={this.onCancelLogout}/>}
          width='1000px' height='700px' title={'D3Example.js'}>
        </DialogContainer>

        <div style={{height: '90%', position: 'absolute', width: '100%'}}>
          <DragAndDrop></DragAndDrop>
        </div>    

     </div>
    )
  }
}

export default DragAndDropFiles;
`
export default code


