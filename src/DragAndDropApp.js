import React from 'react';
import './App.css';
import './DragAndDrop.css';
import ReactDOM from 'react-dom';
import ReactTreeApp from './ReactTreeApp';

import DialogContainer from './DialogContainer.js';
import DisplayCode from './DisplayCode.js';
import code from './code-DragAndDropApp.js';


function Task(props) {

  const onDragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData('data', target.id);
    e.dataTransfer.setData('containerId', props.dropId)
  }

  const onMouseOver = (e) => {
    e.target.style.cursor='pointer';
  }

  const onDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'none';

  }

  return(
    <>
      <div id={props.id} className={'task'} draggable={'true'} onDragStart={onDragStart} onMouseOver={onMouseOver} onDragOver={onDragOver} >
        {/* <img id={props.id} draggable={'true'} onDragStart={onDragStart} onMouseOver={onMouseOver} src={process.env.PUBLIC_URL + props.src} alt="Pineapple" style={{width:'200px', height:'200px', display: 'inline-block'}}></img> */}
        <img id={props.id} src={process.env.PUBLIC_URL + props.src} alt="Pineapple" style={{width:'200px', height:'200px', display: 'inline-block'}}></img>
      </div>
    </>
  )
}

function DragDropBox(props) {
  let dropId = null;

  const drop = (e) => {
    e.preventDefault();

    const data = e.dataTransfer.getData('data');
    const element = document.getElementById(data);
    element.style.display =  'block';

    // if (e.target.getAttribute('draggable') == 'true') {//if dropping on already dropped element - drop on element's parent
    //   e.target.parentElement.appendChild(element);
    // }
    // else {
    //   e.target.appendChild(element);
    // }  
    document.getElementById(dropId).appendChild(element);
    console.log('>' + dropId);

  }

  const dragOver = (e) => {
    e.preventDefault();

  }

  const onDragEnter = (e) => {
    if (e.target.className == 'dropzone') {
      dropId = e.target.id;
      console.log(dropId);
    }
  }

   return(
    <div id={props.id} className={props.className} onDragEnter={onDragEnter} onDrop={drop} onDragOver={(e) => dragOver(e)}>
      {props.tasksArr.map((item) => {return (<Task key={item.id} dropId={props.id} id={item.id} src={item.src}></Task>)})}
      {/* {React.Children.map(props.children, (item) => {return (<Task dropId={item.id} id={item.id} name={item.id} src={item.src}></Task>)})} */}
      
    </div>
  )

}

let tasksArr = [
  {
    id: 'shed',
    src: '/images/shed1.jpg'
  },
  {
    id: 'sv650',
    src: '/images/sv650.jpg'
  }
]

class DragAndDrop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id='mainDiv'>

        {/* <Board id='board1' className='board'>
          <Card id={'card1'} className={'card'} draggable={'true'}>
          </Card>            
          <Card id={'card2'} className={'card'} draggable={'true'}>
          </Card>            
        </Board>  
        <Board id='board2' className='board'>
          <Card id='card3' className='card' draggable='true'>
          </Card>            
        </Board>   */}

        <DragDropBox id={'completed'} className={'dropzone'} tasksArr={tasksArr}>
        </DragDropBox>

        <DragDropBox id={'todos'} className={'dropzone'} tasksArr={[]}>
        </DragDropBox>

      </div>
    )
  }
}

class DragAndDropApp extends React.Component {
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
          <span><button onClick={this.goBack}>Back</button><label style={{fontSize: '24pt', marginLeft: '50px', marginRight: '50px'}}>Drag and Drop</label><button onClick={this.openDisplayCode}>Code</button></span>
        </div>
        <DialogContainer show={this.state.showCode} onCancel={this.onCancelDisplayCode} dialogContent={<DisplayCode 
          code={code} onCancel={this.onCancelLogout}/>}
          width='1000px' height='700px' title={'DragAndDropApp.js'}>
        </DialogContainer>

        <div style={{height: '90%', position: 'absolute', width: '100%'}}>
          <DragAndDrop></DragAndDrop>
        </div>    

     </div>
    )
  }
}

export default DragAndDropApp;