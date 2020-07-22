let code = `

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

//////////////////////////////////////////////////////////////////////////

class LinkedListNode {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  add(data) {
    let newNode = new LinkedListNode(data)  

    if (this.head === null) {
      this.head = newNode;
    }
    else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}  

function CreateLinkedLists(list1Arr, list2Arr) {
  let lists = {
    list1: null,
    list2: null
  }
  if (list1Arr !== null) {
    lists.list1 = new LinkedList();
    list1Arr.map((x) => lists.list1.add(x))
  }
  if (list2Arr !== null) {
    lists.list2 = new LinkedList();
    list2Arr.map((x) => lists.list2.add(x))
  }
  return lists;
}

function AssembleResult(result) {
  let arr = [];
  let currentNode = result;
  while(currentNode !== null) {
    arr.push(currentNode.data);
    currentNode = currentNode.next;
  }
  return arr;
}

function MergeLinkedLists(props) {    
  let resultHead = null;

  if ((props.list1Arr.length == 0) && (props.list1Arr.length == 0)) {
    return;
  }

  let lists = CreateLinkedLists(props.list1Arr, props.list2Arr);
  let currentNode = null; //cNx in diagram
  let otherNode = null;  //oNx in diagram

  if (lists.list1.head.data <= lists.list2.head.data) { 
    currentNode = lists.list1.head;
    otherNode = lists.list2.head
  }
  else {
    currentNode = lists.list2.head;
    otherNode = lists.list1.head;
  }
  resultHead = currentNode;

  while (currentNode.next !== null) {
    if (otherNode.data <= currentNode.next.data) {
      //save my next, change my next. go to my new next
      let tempNode = currentNode.next;
      currentNode.next = otherNode;
      otherNode = tempNode;
      currentNode = currentNode.next;
    }
    else {
      //go to my next
      currentNode = currentNode.next;
    }
  }
  currentNode.next = otherNode;

  return (
    <>
      <p id='exerciseDescription'>15. MergeLinkedLists ([{props.list1Arr.toString()}], [{props.list2Arr.toString()}])</p>
      {/* <p className='details result'>Result: {JSON.stringify(lists)}</p> */}
      <p className='details result'>Result: {AssembleResult(resultHead).toString()}</p>
    </>
  )
}


function CreateCycleList(arr) {
  let lists = CreateLinkedLists(arr, null);
  let currentNode = lists.list1.head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  currentNode.next = lists.list1.head;
  return lists.list1.head;
}


function CreateMergedLists(arr1, arr2) {
  let lists = CreateLinkedLists(arr1, arr2);

  let currentNode1 = lists.list1.head;
  if (currentNode1.next !== null) {
    currentNode1 = currentNode1.next;
  }

  let currentNode2 = lists.list2.head;
  if (currentNode2.next !== null) {
    currentNode2 = currentNode2.next;
  }
  currentNode2.next = currentNode1;

  return lists;  
}

function CycleDetection(props) {    
  let cycle = false;

  let list = CreateCycleList(props.arr);
  let cache = [];
  let currentNode = list;
  cache.push(currentNode);
  while ((currentNode.next !== null) && (!cache.includes(currentNode.next))) {
    currentNode = currentNode.next;
    cache.push(currentNode);
  }
  if (cache.includes(currentNode.next)) {
    cycle = true;
  }
  

  return (
    <>
      <p id='exerciseDescription'>16. CycleDetection ([{props.arr.toString()}])</p>
      {/* <p className='details result'>Result: {JSON.stringify(lists)}</p> */}
      <p className='details result'>Result: {cycle.toString()}</p>
    </>
  )
}

function DeleteDuplicates(props) {
  let lists = CreateLinkedLists(props.arr, null);

  let currentNode = lists.list1.head;
  while (currentNode.next !== null) {

    if (currentNode.next.data === currentNode.data) {
      let tempNode = currentNode.next;

      while ((tempNode.next !== null) && (tempNode.next.data == tempNode.data)) {  
        tempNode = tempNode.next;
      }
      currentNode.next = tempNode.next !== null ? tempNode.next : null;
    }
    else {
      currentNode = currentNode.next;
    }
  }

  return (
    <>
      <p id='exerciseDescription'>17. DeleteDuplicates ([{props.arr.toString()}])</p>
      {/* <p className='details result'>Result: {JSON.stringify(lists)}</p> */}
      <p className='details result'>Result: {AssembleResult(lists.list1.head).toString()}</p>
    </>
  )
}


function MaximumElement(props) {

  let results = [];
  let stack = [];

  props.arr.map((item) => {
    switch(item.op) {
      case 1:
        stack.push(item.val);
        break;
      case 2:
        stack.pop();
        break;
      case 3:
        results.push(Math.max(...stack));
    }
  })

  let originalArr = Array.from(props.arr, (item) => {
    return ('{ op: ' + item.op + ', ' + 'val: ' + item.val + '}')
  })

  return (
    <>
    <p id='exerciseDescription'>18. MaximumElement (Count: {props.n}, [{originalArr.toString()}])</p>
      {/* <p className='details result'>Result: {JSON.stringify(lists)}</p> */}
      <p className='details result'>Result: {results.toString()}</p>
    </>
  )
}

function MergePoint(props) {


  //5 -> 7 -> 10
  //     ^
  //1 -> 4    6

 
  let lists = CreateMergedLists(props.arr1, props.arr2);
  let result = 7;

  let currentNode1 = lists.list1.head;
  let currentNode2 = lists.list2.head;
  while (currentNode1.next !== null && currentNode2.next !== null) {
    if (currentNode1.next === currentNode2.next) {
      result = currentNode2;
      break;
    }
    else if (currentNode2.next === currentNode1.next) {
      result = currentNode1;
      break;
    }
    currentNode1 = currentNode1.next;
    currentNode2 = currentNode2.next;
  }


  return (
    <>
      <p id='exerciseDescription'>19. MergePoint ([{props.arr1.toString()}], [{props.arr2.toString()}])</p>
      {/* <p className='details result'>Result: {JSON.stringify(lists)}</p> */}
      <p className='details result'>Result: {result.toString()}</p>
    </>
  )

}

function SuperReducedString(props) {
  let arr = props.str.split('');
  // let result = arr.join();  

  let result = [];
  arr.map((item) => {
    if (result.length == 0) {
      result.push(item);
    }
    else if (result[result.length - 1] !== item) {
      result.push(item);
    }
  })

  return ( 
    <>
      <p id='exerciseDescription'>20. SuperReducedString ({props.str})</p>
      {/* <p className='details result'>Result: {JSON.stringify(lists)}</p> */}
      <p className='details result'>Result: {result.toString()}</p>
    </>
  )

}


function ArrayManipulation(props) {
  let result = 0;

  let arrResult = Array(props.n).fill(0);
  props.arr.map((item) => {
    for (let i = item[0] - 1; i <= item[1] - 1; i++) {
      arrResult[i] += item[2];
    }
  })
 
  result = Math.max(...arrResult);

  return ( 
    <>
      <p id='exerciseDescription'>21. ArrayManipulation ({props.n}, {props.arr.toString()} )</p>
      {/* <p className='details result'>Result: {JSON.stringify(lists)}</p> */}
      <p className='details result'>Result: {result.toString()}</p>
    </>
  )
}

function Shuffle(props) {
  let result = [...props.arr];
  var n = result.length, t, i;
  while (n) {
    i = Math.random() * n-- | 0; // 0 ≤ i < n
//    i = Math.floor(Math.random) * n--;
    t = result[n];
    result[n] = result[i];
    result[i] = t;
  }

  return ( 
    <>
      <p id='exerciseDescription'>22. Shuffle ({[props.arr.toString()]})</p>
      {/* <p className='details result'>Result: {JSON.stringify(lists)}</p> */}
      <p className='details result'>Result: {result.toString()}</p>
    </>
  )
}


function BalancedBraces(props) {
  let result = '';
  let stack = [];
  let balanced = true;

//put string 
  let values = props.str.split('');

  for (let j = 0; j < values.length; j++) {
    if ((values[j] == '{') || (values[j] == '[') || (values[j] == '(')) {
      stack.push(values[j]);
    }
    else if ((values[j] == '}') || (values[j] == ']') || (values[j] == ')')) { 
      if (stack.length == 0) {
        balanced = false;
        break;
      }
      if ((values[j] == '}') && (stack[stack.length-1] == '{')) {
        stack.pop();
      }
      else if ((values[j] == ']') && (stack[stack.length-1] == '[')) {
        stack.pop();
      }  
      else if ((values[j] == ')') && (stack[stack.length-1] == '(')) {
        stack.pop();
      }
      else {
        break;
      }
    }
  }

  if (!balanced || stack.length != 0) {
    result = 'NO';
  }
  else { 
    result = 'YES';
  }

//  result = (orphanStack.length == 0 ? 'YES' : 'NO');

  return ( 
    <>
      <p id='exerciseDescription'>23. Balanced Braces '{[props.str]}'</p>
      {/* <p className='details result'>Result: {JSON.stringify(lists)}</p> */}
      <p className='details result'>Result: {result.toString()}</p>
    </>
  )

}



class BinaryTreeNode {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}
 

function maxDepth(node)  
{  
    if (node !== null) {
      console.log(node.data);
    }

    if (node == null)  
        return 0;  
    else
    {  
        /* compute the depth of each subtree */
        let lDepth = maxDepth(node.left);  
        let rDepth = maxDepth(node.right);  
      console.log(lDepth, rDepth);



        return Math.max(lDepth, rDepth) + 1;
        // /* use the larger one */
        // if (lDepth > rDepth)  {
        //   return(lDepth + 1);
        // }  
        // else {
        //   return(rDepth + 1);  
        // }
    }  
}  







function BinaryTreeDepth() {
  let result = 0;

  let root = new BinaryTreeNode(3);  
  
  root.left = new BinaryTreeNode(7);  
  root.right = new BinaryTreeNode(3);  
  root.left.left = new BinaryTreeNode(4);  
  root.left.right = new BinaryTreeNode(5);  
  root.left.right.right = new BinaryTreeNode(9);  

  result = maxDepth(root);

  return ( 
    <>
      <p id='exerciseDescription'>24. Binary Tree Depth</p>
      {/* <p className='details result'>Result: {JSON.stringify(lists)}</p> */}
      <p className='details result'>Result: {result.toString()}</p>
    </>
  )
}

function Countdown(value) {

  let result = 0;

  if (value == 0) {
    return;
  }
  Countdown(value - 1);
}

function RecursiveCountdown() {

  let result = 0;

  Countdown(10);

  return ( 
    <>
      <p id='exerciseDescription'>25. Recursive Countdown</p>
      {/* <p className='details result'>Result: {JSON.stringify(lists)}</p> */}
      <p className='details result'>Result: {result.toString()}</p>
    </>
  )

} 


function Pangram(props) {
  let result = 'pangram';

  let strArr = props.str.split('');

  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for (let i = 0; i < alphabet.length; i++) {
    if (!strArr.includes(alphabet[i])) {
      result = 'not pangram';
      break;
    }
  }

  return ( 
    <>
      <p id='exerciseDescription'>26. Pangram '{[props.str]}'</p>
      {/* <p className='details result'>Result: {JSON.stringify(lists)}</p> */}
      <p className='details result'>Result: {result}</p>
    </>
  )

}


function LonelyInteger(props) {

  let myMap = {};

  let strArr = props.str.split('');
  strArr.map((item) => {
    myMap[item] = myMap[item] ? myMap[item] + 1 : 1;
  })

  let result = Object.keys(myMap).find((key, i) => {
    console.log('>' + i);  
    return myMap[key] === 1;
  });
  


  return ( 
    <>
      <p id='exerciseDescription'>27. Lonely Integer '{[props.str]}'</p>
      <p className='details result'>Result: {result}</p>
    </>
  )
}


function InsertionSort(props) {
  
  let result = [];
  let arr = [...props.str];

  let insertVal = arr[arr.length - 1]


  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i - 1] > insertVal) {
      arr[i] = arr[i - 1];
      result.push([...arr]);
    }
    else {
      arr[i] = insertVal;
      result.push([...arr]);
      break;
    }
  }


  return (
    <>
      <p id='exerciseDescription'>28. Insertion Sort '{[props.str]}'</p>
      <p className='details result'>Result: {result.map((v) => '[' + v + '] ')}</p>
    </>
  )


}


class x {
  get Y() {return 42;}
}

function TestArea() {


  /////////////////////////

  function MyFunc() {
    let x = 4;
    setTimeout(() => {console.log('timeout ' + x)}, 0)
  }

  console.log('1');
  MyFunc();
  console.log('2');



  class Creature {
    creatureMethod() {console.log('creature')}
  }

  class Animal extends Creature {
    animalMethod() {console.log('animal')} 
  }

  class Dog extends Animal {
    dogMethod() {console.log('dog')}
  }

  let myDog = new Dog();
  myDog.bite = 'teeth';
  console.log(myDog.__proto__ === Dog.prototype);
  console.log(myDog.protoType);
  console.log(myDog.__proto__);
  console.log(myDog.__proto__.__proto__);
  console.log(myDog.__proto__.__proto__.__proto__);

  let mySecondDog = new Dog();

  Dog.prototype.poop = function() {console.log('poo')}


  myDog.poop();
  mySecondDog.poop();





  return (
    <div>Hi</div>

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

          <div className='exerciseDiv'>
            <MergeLinkedLists list1Arr={[5,7,10]} list2Arr={[1,4,6]}></MergeLinkedLists>
          </div>

          <div className='exerciseDiv'>
            <CycleDetection arr={[5,7,10,3,7]}></CycleDetection>
          </div>

          <div className='exerciseDiv'>
            <DeleteDuplicates arr={[5,7,9,9,10,10]}></DeleteDuplicates>
          </div>

          <div className='exerciseDiv'>
            <MaximumElement n={10} arr={[{op: 1, val: 97}, {op: 2, val: null}, {op: 1, val: 20}, {op: 2, val: null}, {op: 1, val: 26}, {op: 1, val: 20}, {op: 2, val: null}, {op: 3, val: null}, {op: 1, val: 91}, {op: 3, val: null} ]}></MaximumElement>
          </div>

          <div className='exerciseDiv'>
            <MergePoint arr1={[5,7,10]} arr2={[1,4,6]}></MergePoint>
          </div>

          <div className='exerciseDiv'>
            <SuperReducedString str={'abbcbeef'}></SuperReducedString>
          </div>

          <div className='exerciseDiv'>
            <ArrayManipulation n={10} arr={[[1, 2, 100], [2, 5, 100], [3, 4, 100]]}></ArrayManipulation>
          </div>

          <div className='exerciseDiv'>
            <Shuffle arr={[1,2,3,4,5,6,7,8,9,10]}></Shuffle>
          </div>

          <div className='exerciseDiv'>
            <BalancedBraces str={'[()]{)}[]'}></BalancedBraces>
          </div>

          <div className='exerciseDiv'>
            <BinaryTreeDepth></BinaryTreeDepth>
          </div>
          
          <div className='exerciseDiv'>
            <RecursiveCountdown></RecursiveCountdown>
          </div>

          <div className='exerciseDiv'>
            <Pangram str={'The quick bron fox jumps over the lazy dog'}></Pangram>
          </div>

          
          <div className='exerciseDiv'>
            <LonelyInteger str={'1443321'}></LonelyInteger>
          </div>
          
          <div className='exerciseDiv'>
            <InsertionSort str={'124563'}></InsertionSort>
          </div>

          <div className='exerciseDiv'>
            <TestArea></TestArea>
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
`
export default code;

