import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ReactTreeApp from './ReactTreeApp';

import DialogContainer from './DialogContainer.js';
import DisplayCode from './DisplayCode.js'
import code from './code-JavaScriptExercises.js';



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

function GetRandomValueFromArray () {
  return (
    <div id='exerciseDescription'>10. Get Random Value From Array</div>
  )
}

function ReverseArray() {
  return (
    <div id='exerciseDescription'>11. Reverse Array</div>
  )
}

function LastIndexOf() {
  return (
    <div id='exerciseDescription'>12. Last Index Of</div>
  )
}

function SumAllValuesInArray() {
  return (
    <div id='exerciseDescription'>13. Sum All Values In Array</div>
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
            <GetRandomValueFromArray></GetRandomValueFromArray>
          </div>

          <div className='exerciseDiv'>
            <ReverseArray></ReverseArray>
          </div>

          <div className='exerciseDiv'>
            <LastIndexOf></LastIndexOf>
          </div>

          <div className='exerciseDiv'>
            <SumAllValuesInArray></SumAllValuesInArray>
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