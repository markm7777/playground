
import React from 'react';
import './App.css';
import './DragAndDropFiles.css';
import ReactDOM from 'react-dom';
import ReactTreeApp from './ReactTreeApp';

import DialogContainer from './DialogContainer.js';
import DisplayCode from './DisplayCode.js'
import code from './code-playground.js';
import * as d3 from "d3";

////////////////////
// ************************ Drag and drop ***************** //
// let dropArea = document.getElementById("drop-area");

// // Prevent default drag behaviors
// ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
//   dropArea.addEventListener(eventName, preventDefaults, false)   
//   document.body.addEventListener(eventName, preventDefaults, false)
// });

// // Highlight drop area when item is dragged over it
// ['dragenter', 'dragover'].forEach(eventName => {
//   dropArea.addEventListener(eventName, highlight, false)
// });

// ['dragleave', 'drop'].forEach(eventName => {
//   dropArea.addEventListener(eventName, unhighlight, false)
// })

// // Handle dropped files
// dropArea.addEventListener('drop', handleDrop, false)

// function preventDefaults (e) {
//   e.preventDefault()
//   e.stopPropagation()
// }

// function highlight(e) {
//   dropArea.classList.add('highlight')
// }

// function unhighlight(e) {
//   dropArea.classList.remove('active')
// }

// function handleDrop(e) {
//   var dt = e.dataTransfer
//   var files = dt.files

//   handleFiles(files)
// }

// let uploadProgress = []
// let progressBar = document.getElementById('progress-bar')

// function initializeProgress(numFiles) {
//   progressBar.value = 0
//   uploadProgress = []

//   for(let i = numFiles; i > 0; i--) {
//     uploadProgress.push(0)
//   }
// }

// function updateProgress(fileNumber, percent) {
//   uploadProgress[fileNumber] = percent
//   let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
//   console.debug('update', fileNumber, percent, total)
//   progressBar.value = total
// }

// function handleFiles(files) {
//   files = [...files]
//   initializeProgress(files.length)
//   files.forEach(uploadFile)
//   files.forEach(previewFile)
// }

// function previewFile(file) {
//   let reader = new FileReader()
//   reader.readAsDataURL(file)
//   reader.onloadend = function() {
//     let img = document.createElement('img')
//     img.src = reader.result
//     document.getElementById('gallery').appendChild(img)
//   }
// }

// function uploadFile(file, i) {
//   var url = 'https://api.cloudinary.com/v1_1/joezimim007/image/upload'
//   var xhr = new XMLHttpRequest()
//   var formData = new FormData()
//   xhr.open('POST', url, true)
//   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

//   // Update progress (can be used to show progress indicator)
//   xhr.upload.addEventListener("progress", function(e) {
//     updateProgress(i, (e.loaded * 100.0 / e.total) || 100)
//   })

//   xhr.addEventListener('readystatechange', function(e) {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       updateProgress(i, 100) // <- Add this
//     }
//     else if (xhr.readyState == 4 && xhr.status != 200) {
//       // Error. Inform the user
//     }
//   })

//   formData.append('upload_preset', 'ujpu6gyk')
//   formData.append('file', file)
//   xhr.send(formData)
// }



////////////////////


class DragAndDrop extends React.Component {
  constructor(props) {
    super(props);
  };

  dragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()
    document.getElementById('drop-area').classList.add('highlight')
  
  };

  dragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    document.getElementById('drop-area').classList.add('highlight')
  
  }

  dragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    let classList = document.getElementById('drop-area').classList;
    document.getElementById('drop-area').classList.remove('highlight')
  
  }

  drop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let dt = e.dataTransfer;
    let files = dt.files;

    let reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onloadend = function() {
      let img = document.createElement('img')
      img.setAttribute('width', '50px');
      img.setAttribute('height', '50px');
      img.src = reader.result
      document.getElementById('drop-area').appendChild(img)
    }


    console.log('drop');
    document.getElementById('drop-area').classList.remove('highlight')
  }

  render() {
    return(
      <div id='mainDiv'>
        <div id='drop-area' className='' onDragEnter={this.dragEnter} onDragOver={this.dragOver} onDragLeave={this.dragLeave} onDrop={this.drop}>
        {/* <div id="gallery"></div> */}
        </div>
       </div>
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
          <span><button onClick={this.goBack}>Back</button><label style={{fontSize: '24pt', marginLeft: '50px', marginRight: '50px'}}>D3</label><button onClick={this.openDisplayCode}>Code</button></span>
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



