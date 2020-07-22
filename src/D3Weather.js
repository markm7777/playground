import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ReactTreeApp from './ReactTreeApp';

import DialogContainer from './DialogContainer.js';
import DisplayCode from './DisplayCode.js'
import code from './code-D3Weather.js';
import * as d3 from "d3";

const weatherBitApiKey = '679dcaf864aa415c812b8a4fe23ba67f';
const openWeatherApiKey = '1b58f5b9571fb5391ba5406c9caff375';
const openCageApiKey = '7ae329bc80d64fd08e86461e4bd249e1';

class D3Weather extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      city: 'Los Angeles, CA',
      lat: 0,
      lng: 0,
      lineArr: [],
      returnedCity: 'Los Angeles, CA'
    };
  }
  componentDidMount() {
    this.getWeather();
  }

  onCityChange = (e) => {
    this.setState({city: e.target.value})
  }

  getWeather = () => {

    let openCageUrl = `https://api.opencagedata.com/geocode/v1/json?q=${this.state.city}&countrycode=us&limit=1&key=${openCageApiKey}`;
    let selectedData = [];
    let returnedCity = ' ';

    fetch(openCageUrl)
    .then(res => res.json())
    .then(json => {


      returnedCity = json.results[0].formatted + ' ' + '(' + json.results[0].annotations.timezone.short_name + ')';
      let openWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${json.results[0].geometry.lat}&lon=${json.results[0].geometry.lng}&exclude=daily,minutely,current&units=imperial&appid=${openWeatherApiKey}`;
      fetch(openWeatherUrl)
      .then(res => res.json())
      .then(json => {
        let tempArr = []; 

        let temperatures = [];
        json.hourly.map((item) => {
          temperatures.push({time: new Date(item.dt * 1000).getHours(), data: item.temp, color: 'orangered'})
        })
        tempArr.push(temperatures); 


        let humidities = [];
        json.hourly.map((item) => {
          humidities.push({time: new Date(item.dt * 1000).getHours(), data: item.humidity, color: '#03bafc'})
        })
        tempArr.push(humidities); 

        let wind = [];
        json.hourly.map((item) => {
          wind.push({time: new Date(item.dt * 1000).getHours(), data: item.wind_speed, color: 'green'})
        })
        tempArr.push(wind); 


        this.setState({lineArr: tempArr, returnedCity: returnedCity})
        this.drawChart();  

      })
      .catch(error => this.setState({returnedCity: `Error locating forecast for: ${this.state.city}`}))
    })
    .catch(error => this.setState({returnedCity: `Error locating forecast for: ${this.state.city}`}))
  } 


  // gradientColor = (p) => {
  //   var bounds = d3.extent(dataum, d => d.value);
  //   var interval = bounds[1]-bounds[0];
  
  //   return d3.interpolateHslLong("red", "blue")((p[0].value-bounds[0])/interval);
  // };


  drawChart = () => {

    let svgContainer = d3.select('svg');
    let margin = 50;
    let graphWidth = svgContainer.node().getBoundingClientRect().width - (2 * margin);
    let graphHeight = svgContainer.node().getBoundingClientRect().height - (2 * margin);
    let origin = {x: margin, y: graphHeight + margin};


    // Add X axis
    let x = d3.scaleTime().domain([Date.now(), Date.now() + 48 * 60 * 60 * 1000]).range([origin.x, graphWidth]).nice();
    svgContainer
      .append("g")
      .attr("transform", `translate(0, ${origin.y})`)
      .call(d3.axisBottom(x).ticks(24));

    // Add Y axis
    let y = d3.scaleLinear().domain([0, 140]).range([ origin.y, origin.y - graphHeight]).nice();
    svgContainer
      .append("g")
      .attr("transform", `translate(${origin.x}, 0)`)
      .call(d3.axisLeft(y).ticks(20));

    //origin  
    svgContainer
      .append('circle')
      .attr('cx', origin.x)
      .attr('cy', origin.y)  
      .attr('r', 3)

    svgContainer.append("text")             
      .attr("transform",
            "translate(" + (origin.x + (graphWidth/2)) + " ," + 
                           (origin.y + 35) + ")")
      .style("text-anchor", "middle")
      .text("48-Hour");

    svgContainer.append('text')
      .attr("transform", "rotate(-90)")
      .attr("y", 0)
      .attr("x", 0 - (graphHeight + 40) / 2)
      .attr("dy", "1em")
      .attr("text-anchor", "middle")
      .append("tspan").style("fill", "#ff0000").text('Temperature (F)')
      .append("tspan").style("fill", "black").text('  -  ')
      .append("tspan").style("fill", "#03bafc").text('Humidity (%)')
      .append("tspan").style("fill", "black").text('  -  ')
      .append("tspan").style("fill", "green").text('Wind Speed (mph)')

    const gridlines = d3.axisLeft()
      .tickFormat("")
      .tickSize(-graphWidth + margin)
      .scale(y);

    svgContainer.append("g")
      .attr("class", "grid")
      .attr("transform", `translate(${origin.x}, 0)`)
       .call(gridlines);
 
////////////////////////////

    const xScale = d3.scaleLinear()
      .domain([0, 47])
      .range([origin.x, graphWidth]) 

    const yScale = d3.scaleLinear()
      .domain([0, 140])
      .range([origin.y, origin.y - graphHeight]) 

    const line = d3.line()
      .x((d, i) => xScale(i))
      .y(d => yScale(d.data))
      .curve(d3.curveMonotoneX)

    d3.selectAll('#line').remove();  

    var colorRange = ['#ff0000', '#ff9933', '#ffffbf', '#66ffff', '#034afc'] //['#ffffcc', '#a1dab4', '#41b6c4', '#2c7fb8', '#253494']

    var color = d3.scaleLinear().range(colorRange).domain([1, 2, 3, 4, 5]);

    var linearGradient = svgContainer.append("defs")
    .append("linearGradient")
    .attr("id", "linear-gradient")
    .attr("gradientTransform", "rotate(90)");

    linearGradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", color(1));

    // linearGradient.append("stop")
    //     .attr("offset", "25%")
    //     .attr("stop-color", color(2));

    linearGradient.append("stop")
        .attr("offset", "50%")
        .attr("stop-color", color(3));

    // linearGradient.append("stop")
    //     .attr("offset", "75%")
    //     .attr("stop-color", color(4));

    linearGradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", color(5));


    //draw the lines
    this.state.lineArr.map((item, i) => {
        let color = (i == 0 ? 'url(#linear-gradient)' : item[i].color);
        let path = svgContainer
          .append('path') 
          .datum(item)
          .attr('d', line) // do your magic, line!
          .attr('stroke', color)//item[i].color)
          .attr("id", "line")
          .style('stroke-width', 3)
          .attr("fill", "none")
          
        path  
        .attr('stroke-dasharray', (d) => path.node().getTotalLength())
        .attr('stroke-dashoffset', (d) => path.node().getTotalLength())
        .transition()
        .duration(4000)
        .ease(d3.easeLinear)
        .attr('stroke-dashoffset', '0')
    })
  }

  render() {
    return(
      <>
        <div id='d3div1'>
          <label>City: </label>
          <input onChange={this.onCityChange} style={{width: '20%', marginLeft: '10px', marginRight: '10px'}} value={this.state.city}></input>
          <button onClick={this.getWeather}>Get Weather</button>
        </div>
        <div id='d3div2'>
          <label>{this.state.returnedCity}</label>
        </div>
        <div style={{textAlign: 'center', height: '95%', width: '100%', marginLeft: '0px', marginTop: '0px', marginRight: '0px', marginBottom: '0px', borderStyle: 'solid', borderColor: '#ff0000', borderWidth: '0px'}}>
          <svg style={{align: 'center', width: '1000', height: '590', marginTop: '10px', borderStyle: 'solid', borderColor: '#ffffff', borderWidth: '2px', backgroundColor: '#cccccc'}}></svg>
        </div>
      </>
    )
  }
}

class D3WeatherApp extends React.Component {
    constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.openDisplayCode = this.openDisplayCode.bind(this);
    this.onCancelDisplayCode = this.onCancelDisplayCode.bind(this);
    this.state = {
      showCode: false
    };
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

    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;


    return (
      <div style={{height: '100%', position: 'absolute', width: '100%'}}>
        <div style={{height: '5%', textAlign: 'center', backgroundColor: 'lightGreen', paddingTop: '15px', paddingBottom: '15px'}}>
          <span><button onClick={this.goBack}>Back</button><label style={{fontSize: '24pt', marginLeft: '50px', marginRight: '50px'}}>D3-Weather</label><button onClick={this.openDisplayCode}>Code</button></span>
        </div>
        <DialogContainer show={this.state.showCode} onCancel={this.onCancelDisplayCode} dialogContent={<DisplayCode 
          code={code} onCancel={this.onCancelLogout}/>}
          width='1000px' height='700px' title={'D3Weather.js'}>
        </DialogContainer>

        <div style={{height: '90%', position: 'absolute', width: '100%'}}>
          <D3Weather></D3Weather>
        </div>    

     </div>
    )

  }
}



export default D3WeatherApp;