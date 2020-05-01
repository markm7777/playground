
let code = `



import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ReactTreeApp from './ReactTreeApp';

import DialogContainer from './DialogContainer.js';
import DisplayCode from './DisplayCode.js'
import code from './code-GiphyGetterApp.js';


class Giphy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '', 
      quantity: 1,
      widthAndHeight: 200,
      height: 200,
      images: []
    };
    this.apikey = 'wiqQ9XrBQa6g4PW28ZkNYVDmSlSjx4v5';
  }

  onChangeSearch = (e) => {
    this.setState({search: e.target.value});
  }

  onChangeQty = (e) => {
    this.setState({quantity: e.target.value});
  }

  onChangeWidthAndHeight = (e) => {
    this.setState({widthAndHeight: e.target.value});
  }

  onFetch = () => {
    let url = ${`https://api.giphy.com/v1/gifs/search?q=${`this.state.search`}&api_key=${`this.apikey`}&limit=${`this.state.quantity`}`};
    let tempImages = [];
    fetch(url)
    .then(res => {
      if (res.status === 200) {
        return res.json()
      }
    })
    .then(json => {
      json.data.map((imageObj) => {
          tempImages.push(imageObj.images.original.url);
          this.setState({images: tempImages});
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <div id='searchDiv'>  
          <label>Search: </label>
          <input id='searchInput' onChange={this.onChangeSearch} value={this.state.search}></input>
          <label>How many?: </label>
          <input id='quantityInput' onChange={this.onChangeQty} value={this.state.quantity}></input>
          <label>Width/Height: </label>
          <input id='quantityInput' onChange={this.onChangeWidthAndHeight} value={this.state.widthAndHeight}></input>
          <button id='goButton' onClick={this.onFetch}>Go Get Giphy!</button>
        </div>
        <div id="imageDiv">
          {this.state.images.map((image, index) => {
            return (
            <img key={index} id={'img'} src={image} alt={'nope'} width={this.state.widthAndHeight} height={this.state.widthAndHeight}></img>  
            )
          })}
        </div>
      </div>
    )
  }
}

class GiphyGetterApp extends React.Component {
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
        <div style={{textAlign: 'center', backgroundColor: 'lightGreen', paddingTop: '15px', paddingBottom: '15px'}}>
          <span><button onClick={this.goBack}>Back</button><label style={{fontSize: '24pt', marginLeft: '50px', marginRight: '50px'}}>GiphyGetter</label><button onClick={this.openDisplayCode}>Code</button></span>
        </div>
        <DialogContainer show={this.state.showCode} onCancel={this.onCancelDisplayCode} dialogContent={<DisplayCode 
          code={code} onCancel={this.onCancelLogout}/>}
          width='1000px' height='700px' title={'GiphyGetterApp.js'}>
        </DialogContainer>

        <Giphy></Giphy>

     </div>
    )
  }
}


export default GiphyGetterApp;

`
export default code;