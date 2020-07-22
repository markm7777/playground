import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ReactTreeApp from './ReactTreeApp';

import DialogContainer from './DialogContainer.js';
import DisplayCode from './DisplayCode.js';
import code from './code-D3Example.js';
import * as d3 from "d3";


import { range as d3range } from "d3-array";
import { randomNormal as d3randomNormal } from "d3-random";
import { color } from 'd3';

class D3Circles extends React.Component {
  constructor(props) { 
    super(props);
    this.timer = null;
    this.state = {
      data: []
    };
  }

  getData = (totalPoints = 100) => {
    return (  
      d3range(totalPoints).map((d, i) => {
        return { x: d, y: d3randomNormal()()};
      })
    )
  }
  
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({data: this.getData(3)});
     }, 100)
  }

  componentDidUpdate() {
    this.updateChart();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateChart = () => {
    let colors = ["#ff0000", "#00ff00", "#0000ff", "#fbb13c"];

    //scales
    const xScale = d3
      .scaleBand()
      .domain(d3.range(0, this.state.data.length))
      .range([0, this.props.width]);

    const yScale = d3
      .scaleLinear()
      .domain([-3, 3])
      .range([0, this.props.height]);

    //create a selector and attach data to it
    let svgContainer = d3
      .select('svg')
      .selectAll("rect")
      .data(this.state.data);

    svgContainer
      .append("circle")
      .attr('cx', 1000)
      .attr('cy', 500)  
      .attr('r', 5)
      .style('fill', 'blue')
      
    svgContainer
      .enter()
      .append("circle")
//      .attr("transform", `translate(${this.props.width/2}, ${this.props.height/2})`)
      .merge(svgContainer)
      .transition()
      .duration(3500)
      .attr("cx", d => xScale(d.x))
      .attr("cy", d => yScale(d.y)) 
      .attr("r", xScale.bandwidth())
      .style("fill", (d, i) => colors[i])
      .remove();
  };

  render() {
    return (
      <div>
        <svg width={this.props.width} height={this.props.height}></svg>
      </div>
    );
  }
}

class DrawStuff extends React.Component {

  constructor(props) {
    super(props);
    this.myData = [{x:2, y:2, r:25}, {x:5, y:4, r:20}, {x:7, y:6, r:3}];
    this.drawStuff = this.drawStuff.bind(this);
    this.timer = null;
    this.state = {
      data: ''
    }
  }

  getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  myGetData = (totalPoints = 100) => {
    return (  
      d3range(totalPoints).map((d, i) => {
        return { x: (Math.random() * 10) - 5, y: (Math.random() * 10) - 5, r: Math.random() * 10, c: Math.floor(Math.random() * 5)};
      })
    )
  }
  
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({data: this.myGetData(3)});
     }, 0)
  }

  componentDidUpdate() {
    this.drawStuff();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  drawStuff() { 
    const xScale = d3
      // .scaleBand()
      .scaleLinear()
      .domain([0, 10])
      .range([0, this.props.width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, 10])
      .range([0, this.props.height]);

    const rScale = d3
      .scaleLinear()
      .domain([0, 10])
      .range([0, 20]);

    //update
    let svgContainer = d3.select('svg')
      .selectAll('rect')
      .data(this.state.data);

    //enter
    svgContainer
     .enter() 
     .append('circle')
     .attr("transform", `translate(${this.props.width/2}, ${this.props.height/2})`)
     .transition()
     .duration(3000)
     .attr("cx", (d) => xScale(d.x))
     .attr("cy", (d) => yScale(d.y))
     .attr("r", (d) => rScale(d.r))
     .style('fill', (d) => this.getRandomColor()) //green
     .transition()
     .duration(1000)
     .attr("r", (d) => rScale(0))
     .remove() 
  }

  render() {
    return (
      <>
        <svg width={this.props.width} height={this.props.height} id='content'></svg>
      </>
    )
  }
}

class D3Example extends React.Component {
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

export default D3Example;