let code = `
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ReactTreeApp from './ReactTreeApp';

import DialogContainer from './DialogContainer.js';
import DisplayCode from './DisplayCode.js'
import code from './code-playground.js';
import * as d3 from "d3";


// import { range as d3range } from "d3-array";
// import { randomNormal as d3randomNormal } from "d3-random";
// import { color } from 'd3';
let colors = ['green', 'red', 'blue', 'yellow'];

class DrawStuff extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data1: [
          {x:0, y:0, w:30, h:30},
          {x:3, y:3, w:30, h:30},
          {x:6, y:6, w:30, h:30},
          {x:9, y:9, w:30, h:30},
        ],
      data2: [
          {x:0, y:0, w:30, h:30},
          {x:3, y:3, w:30, h:30},
          {x:6, y:6, w:30, h:30},
          {x:9, y:9, w:30, h:30},
        ]

      }
        // [
        //   {x:0, y:0, w:30, h:30},
        //   {x:3, y:3, w:30, h:30},
        //   {x:6, y:6, w:30, h:30},
        //   {x:9, y:9, w:30, h:30},
        // ]
    //}
    this.drawStuff = this.drawStuff.bind(this);
  }

  componentDidMount() {
    this.drawStuff();
  }

  
  drawStuff() { 

    const xScale = d3
      .scaleLinear()
      .domain([0, 10])
      .range([0, 100]);

    const yScale = d3
      .scaleLinear()
      .domain([0, 10])
      .range([0, 100]);

////////////////////////////////////////////////////////////////
    //update
    let svgContainer1 = d3.select('svg')
      // .selectAll('rect')
      // .data(this.state.data1)


    svgContainer1.selectAll('.rect1')// Select specifically blue dots
      .data(this.state.data1)
      .enter()
      .append("rect")
       .attr("class", "rect1")// Assign two classes
      .attr("transform", ${`translate(${`this.props.width/2`}, ${`this.props.height/2`})`})
      .transition()
      .delay(function(d, i) { 
         return i * 400;
       })
      .duration(1000)
      .attr("x", (d) => xScale(d.x))
      .attr("y", (d) =>  yScale(d.y))
      .attr("width", (d) => d.w)
      .attr("height", (d) => d.h)
      .style('fill', (d, i) => colors[i])
     .transition()
     .duration(2000)
     .style('fill', (d, i) => 'white')

      
    svgContainer1.selectAll('.rect2')// Select specifically blue dots
      .data(this.state.data2)
      .enter()
      .append("rect")
       .attr("class", "rect2")// Assign two classes
      .attr("transform", ${`translate(${`this.props.width/4`}, ${`this.props.height/2`})`})
      .transition()
      .delay(function(d, i) { 
         return i * 400;
       })
      .duration(1000)
      .attr("x", (d) => xScale(d.x))
      .attr("y", (d) =>  yScale(d.y))
      .attr("width", (d) => d.w)
      .attr("height", (d) => d.h)
      .style('fill', (d, i) => colors[3 - i])
     .transition()
     .duration(2000)
     .style('fill', (d, i) => 'white')



    //enter
    // svgContainer1
    //  .enter() 
    //  .append('rect')
    //   .attr("class", "rect")// Assign two classes
    //  .attr("transform", ${`translate(${`this.props.width/2`}, ${`this.props.height/2`})`})
    //  .transition()
    //  .delay(function(d, i) { 
    //     return i * 400;
    //   })
    //  .duration(1000)
    //  .attr("x", (d) => xScale(d.x))
    //  .attr("y", (d) =>  yScale(d.y))
    //  .attr("width", (d) => d.w)
    //  .attr("height", (d) => d.h)
    //  .style('fill', (d, i) => colors[i])
    //  .transition()
    //  .duration(1000)
    //  .style('fill', (d, i) => 'white')
////////////////////////////////////////////////////////////////

    //enter
    // svgContainer1
    //  .enter() 
    //  .append('rect')
    //  .attr("transform", ${`translate(${`this.props.width/4`}, ${`this.props.height/4`})`})
    //  .transition()
    //  .delay(function(d, i) { 
    //     return i * 400;
    //   })
    //  .duration(1000)
    //  .attr("x", (d) => xScale(d.data2.x))
    //  .attr("y", (d) =>  yScale(d.data2.y))
    //  .attr("width", (d) => d.data2.w)
    //  .attr("height", (d) => d.data2.h)
    //  .style('fill', (d, i) => colors[i])
    //  .transition()
    //  .duration(1000)
    //  .style('fill', (d, i) => 'white')


  }

  render() {
    return (
      <>
        <svg width={this.props.width} height={this.props.height} id='content'></svg>
      </>
    )
  }
}

class D3Playground extends React.Component {
    constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.openDisplayCode = this.openDisplayCode.bind(this);
    this.onCancelDisplayCode = this.onCancelDisplayCode.bind(this);
    this.state = {
      showCode: false,
      dimensions: null
    };
  }

  componentDidMount() {
    console.log(React.version);
    this.setState({         
      dimensions: {     //get the dimensions of the containing div so we can pass them to DrawStuff to set the size of the svg
        width: this.container.offsetWidth,
        height: this.container.offsetHeight,
      },
    });
  }

  //we're rendering this after this component mounts so we can get the dimensions of the parent div
  renderContent() {
    return (
      <DrawStuff width={this.state.dimensions.width} height={this.state.dimensions.height}></DrawStuff>
//      <D3Circles width={this.state.dimensions.width} height={this.state.dimensions.height}></D3Circles> 
    );
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

        <div style={{height: '90%', position: 'absolute', width: '100%'}} ref={el => (this.container = el)}>
          {this.state.dimensions && this.renderContent()} 
        </div>    
     </div>
    )
  }
}

export default D3Playground;
`
export default code;