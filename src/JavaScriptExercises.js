import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ReactTreeApp from './ReactTreeApp';

import DialogContainer from './DialogContainer.js';
import DisplayCode from './DisplayCode.js'
import code from './code-JavaScriptExercises.js';

let git = true;


function RemoveDuplicatesFromArray(props) {
  let result = '';
  result = [...new Set(props.arr)]; //method #1
  result = props.arr.filter((item, index) => {return props.arr.indexOf(item) === index}); //method #2

  return (
    <>
      <p id='exerciseDescription'>1. Remove Duplicates From Array ([{props.arr.toString()}]) </p>
      <p className='details'>Method #1: [...new Set(arr)]</p>
      <p className='details'>Method #2: arr.filter((item, index) => arr.indexOf(item) === index)</p>
      <p className='details result'>Result: [{result.toString()}]</p>

    </>
  )
}

function ReplaceValueInArray(props) {
  let originalArr = [...props.arr];
  let index = props.arr.indexOf(props.from);
  props.arr[index] = props.to;

  return (
    <>
      <p id='exerciseDescription'>2. Replace Value In Array ([{originalArr.toString()}], {props.from}, {props.to}) </p>
      <p className='details'>arr[arr.indexOf('banana')] = 'turnip'</p>
      <p className='details result'>Result: [{props.arr.toString()}]</p>
    </>
  )
} 

function MapArrayWithoutMap() {
  var friends = [
    { name: 'John', age: 22 },
    { name: 'Peter', age: 23 },
    { name: 'Mark', age: 24 },
    { name: 'Maria', age: 22 },
    { name: 'Monica', age: 21 },
    { name: 'Martha', age: 19 },
  ]
  let originalArr = Array.from(friends, (item) => {
    return ('{ name: ' + item.name + ', ' + 'age: ' + item.age + '}')
  })
  let result = Array.from(friends, ({name}) => name);

  return (
    <>
      <p id='exerciseDescription'>3. Map Array Without Map ([{originalArr.toString()}])</p>
      <p className='details'>Array.from(friends, (name) => name)</p>
      <p className='details result'>Result: [{result.toString()}]</p>
    </>
  )
} 

function EmptyArray(props) {
  let originalArr = [...props.arr];
  props.arr.length = 0;

  return (
    <>
      <p id='exerciseDescription'>4. Empty Array ([{originalArr.toString()}])</p>
      <p className='details'>Just set length to 0 </p>
      <p className='details result'>Result: [{props.arr}]</p>
    </>
  )
} 

function ConvertArrayToObject(props) {

  let result = {...props.arr};

  return (
    <>
      <p id='exerciseDescription'>5. Convert Array To Object ([{props.arr.toString()}])</p>
      <p className='details'>...props.arr</p>
      <p className='details result'>Result: {Object.values(result).toString()}</p>
    </>

  )
}

function FillArrayWithData() {
  let arr = new Array(10).fill('7');
  
  return (
    <>
      <p id='exerciseDescription'>6. Fill Array With Data</p>
      <p className='details'>new Array(10).fill('7')</p>
      <p className='details result'>Result: {arr.toString()}</p>
    </>
  )
}

function MergeArrays(props) {
  //Method #1
//  let mergedArr = props.arr1.concat(props.arr2);
  //Method #2
  let mergedArr = [...props.arr1, ...props.arr2];

  return (
    <>
      <p id='exerciseDescription'>7. Merge Arrays ([{props.arr1.toString()}], [{props.arr2.toString()}])</p>
      <p className='details'>Method #1: arr1.concat(arr2)</p>
      <p className='details'>Method #2: newArr = [...arr1, ...arr2]</p>
      <p className='details result'>Result: [{mergedArr.toString()}]</p>
    </>
    )
}

function IntersectionOfTwoArrays(props) {
  let result = props.arr1.filter((x) => {
    return props.arr2.indexOf(x) !== -1;
  })

  return (
    <>
        <p id='exerciseDescription'>8. Intersection Of Two Arrays ([{props.arr1.toString()}],[{props.arr2.toString()}])</p>
        <p className='details result'>Result: [{result.toString()}]</p>
    </>
    )
}

function RemoveFalsyValuesFromArray(props) {
  return (
    <div>
      <p id='exerciseDescription'>9. Remove Falsy Values From Array ([{props.arr.toString()}])</p>
      <p className='details'>arr.filter(Boolean)</p>
      <p className='details result'>Result: [{props.arr.filter(Boolean).toString()}]</p>
    </div>
  )
}

function GetRandomValueFromArray (props) {
  let result = props.arr[Math.floor(Math.random() * props.arr.length)]
  return (
    <>
      <p id='exerciseDescription'>10. Get Random Value From Array ([{props.arr.toString()}])</p>
      <p className='details result'>Result: {result}</p>
    </>
    )
}

function GetHammingDistance(props) {

  let count = 0;
 

  if ((props.x >= 0 && props.x < 231) && (props.y >= 0 && props.y < 231)) { 
    let x2 = (('00000000' + props.x.toString(2)).substr(-8));
    let y2 = (('00000000' + props.y.toString(2)).substr(-8));
    let x2Arr = [...x2];
    let y2Arr = [...y2];
    
    console.log(x2Arr);
    console.log(y2Arr);

    x2Arr.map((item, index) => {
        if (item != y2Arr[index]) {
            count ++;
        }
    })
  }

  return (
    <>
      <p id='exerciseDescription'>11. Get Hamming distance between two integers ({props.x}, {props.y})</p>
      <p className='details'>The Hamming distance between two integers is the number of positions at which the corresponding bits are different</p>
      <p className='details'>1 (0 0 0 1)</p>
      <p className='details'>4 (0 1 0 0)</p>
      <p className='details'>Result: 2</p>
      <p className='details result'>Result: {count}</p>
    </>
    )
}  

function NimGame(props) {

  let canIWin = ((props.n % 4) != 0); //if n is evenly divisible by 4 - you will lose

  return (
    <>
      <p id='exerciseDescription'>12. Nim Game ({props.n})</p>
      <p className='details'>You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones.</p>
      <p className='details'>The one who removes the last stone will be the winner.</p>
      <p className='details'>You will take the first turn to remove the stones.</p>
      <p className='details'>Ex. If n=4, you can't win.</p>
      <p className='details result'>Result: {canIWin.toString()}</p>
    </>
    )

}  


function ReverseArray(props) {
  // let loopCount = Math.floor(props.arr.length / 2);
  // let result = props.arr.slice();

  // for(let i = 0; i < loopCount; i ++) {
  //   let temp = result[i];
  //   result[i] = result[result.length - 1 - i];
  //   result[result.length - 1 - i] = temp;   
  // }
  // let result = props.arr.reverse();
  let result = props.arr.slice().reverse();

  return (
    <>
      <p id='exerciseDescription'>12. Reverse Array</p>
      <p className='details'>The old fashioned way - looping and swapping.</p>
      <p className='details'>Or the new fashioned way - let newArr = arr.reverse().</p>
      <p className='details'>Or the don't modify the original way - let newArr = [...arr].reverse().</p>
      <p className='details'>Or the don't modify the original way - let newArr = colors.slice().reverse().</p>
      <p className='details result'>Result: [{result.toString()}]</p>
    </>
  )
}

function LastIndexOf(props) {
  let result = props.arr.lastIndexOf(props.val);

  return (
    <>
      <p id='exerciseDescription'>13. Last Index Of ([{props.arr.toString()}], {props.val})</p>
      <p className='details result'>Result: [{result.toString()}]</p>
    </>
    )
}

function SumAllValuesInArray(props) {
  let result = props.arr.reduce((x,y) => x + y);
  return (
    <>
      <p id='exerciseDescription'>14. Sum All Values In Array ([{props.arr.toString()}])</p>
      <p className='details'>arr.reduce((x,y) => x + y)</p>
      <p className='details result'>Result: {result.toString()}</p>
    </>
    )
}


class JavaScriptExercises extends React.Component {
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
      <div id='mainContainer'>
      {/* <div style={{height: '100%', position: 'absolute', width: '100%', marginLeft: '20px', backgroundColor: '#333333', color: 'white'}}> */}
        <div id='exercisesTitleDiv'>
          <span><button onClick={this.goBack}>Back</button><label style={{fontSize: '24pt', marginLeft: '50px', marginRight: '50px'}}>JavaScriptExercises</label><button onClick={this.openDisplayCode}>Code</button></span>
        </div>

        <div id='exercisesMainDiv'>
          <div className='exerciseDiv'>
            <RemoveDuplicatesFromArray arr={[2,3,1,4,3,6,2,9]}></RemoveDuplicatesFromArray>
          </div>  

          <div className='exerciseDiv'>
            <ReplaceValueInArray arr={['apple', 'orange', 'banana', 'peach' ]} from={'banana'} to={'turnip'}></ReplaceValueInArray>
          </div>

          <div className='exerciseDiv'>
            <MapArrayWithoutMap></MapArrayWithoutMap>
          </div>
          <div className='exerciseDiv'>
            <EmptyArray arr={[1,2,3,4]}></EmptyArray>
          </div>
          <div className='exerciseDiv'>
            <ConvertArrayToObject arr={[1,2,3,4]}></ConvertArrayToObject>
          </div>

          <div className='exerciseDiv'>
            <FillArrayWithData></FillArrayWithData>
          </div>

          <div className='exerciseDiv'>
            <MergeArrays arr1={[1,2,3,4]} arr2={[5,6,7,8]}></MergeArrays>
          </div>

          <div className='exerciseDiv'>
            <IntersectionOfTwoArrays arr1={['a','b','c','d']} arr2={['d','e','f','g','b']}></IntersectionOfTwoArrays>
          </div>

          <div className='exerciseDiv'>
            <RemoveFalsyValuesFromArray arr={[0, 'blue', '', NaN, 9, true, undefined, 'white', false]}></RemoveFalsyValuesFromArray>
          </div>

          <div className='exerciseDiv'>
            <GetRandomValueFromArray arr={['a', 'b', 'c', 'd', 'e', 'f']}></GetRandomValueFromArray>
          </div>

          <div className='exerciseDiv'>
            <GetHammingDistance x={13} y={8}></GetHammingDistance>
          </div>
          
          <div className='exerciseDiv'>
            <NimGame n={2}></NimGame>
          </div>

          <div className='exerciseDiv'>
            <ReverseArray arr={['1', '2', '3', '4']}></ReverseArray>
          </div>

          <div className='exerciseDiv'>
            <LastIndexOf arr={[1, 5, 2, 6, 3, 5, 2, 3, 6, 5, 2, 7]} val={5}></LastIndexOf>
          </div>

          <div className='exerciseDiv'>
            <SumAllValuesInArray arr={[1, 5, 2, 6, 3, 5, 2, 3, 6, 5, 2, 7]}></SumAllValuesInArray>
          </div>

        </div>

        <DialogContainer show={this.state.showCode} onCancel={this.onCancelDisplayCode} dialogContent={<DisplayCode 
          code={code} onCancel={this.onCancelLogout}/>}
          width='1000px' height='700px' title={'JavaScriptExercises.js'}>
        </DialogContainer>
      </div>
    )
  }
}

export default JavaScriptExercises;