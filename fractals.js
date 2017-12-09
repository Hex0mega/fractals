var width = innerWidth,
  height = innerHeight;

var i = 0;
var i1 = 0;
var i2 = 0;
var i3 = 0;
var i4 = 0;

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

svg.append("rect")
  .attr("width", width)
  .attr("height", height);
// .on("mousemove", particle);

var j = 0;

//setInterval(particle, 10);
setInterval(particle1, 100);
setInterval(particle3, 1);
setInterval(particle32, 1);
setInterval(particle2, 10);
setInterval(particle4, 10);

function particle() {

  //modify this
  //m center of the circle
  //m = { [0], [1], [2], ....[n] }
  //m[0] = x coordinate
  //m[1] = y coordinate
  //r = radius
  // var m = d3.mouse(this);
  //var m = [width / 2, height / 2];
  //var m = [height * Math.tan(j) + height, width * Math.tan(j) + width]
  //good with radius of 500-700
  var radius = height / 2;
  var m = [(height * Math.sin(j) + 2 * height) / 2, (height * Math.cos(j) + height) / 2];

  // console.log(Math.abs(Math.sin(m[0]) * m[0]));
  // console.log(Math.abs(Math.sin(m[1]) * m[1]));

  svg.insert("circle", "rect")
    .attr("cx", m[0])
    .attr("cy", m[1])
    .attr("r", radius)
    //color - 1 - red, 20 - red-green, 360 - more colors
    //color 0.5/0.5 and w:1,1
    .style("stroke", d3.hsl((i = (i + 1) % 360), 0.5, 0.5))
    .style("stroke-opacity", 1e-6)
    .transition()
    //in milliseconds - 3000 ms*(1seconds/1000 ms) = 3 seconds
    .duration(50000)
    //sqrt and sinh are best.  sin, cos,tan, tanh, atan, struggle removing objects fast 
    .ease(Math.easeElasticIn)
    //radius of circle in pixels
    .attr("r", 1e-6)
    .style("stroke-opacity", 1)
  //.remove();

  j = (j + 1) % 1080;
  // if (j >= 500) {
  //   d3.select("svg")
  //   .remove();

  //   svg = d3.select("body")
  //   .append("svg")
  //   .attr("width", width)
  //   .attr("height", height);

  // }

  // d3.event.preventDefault();
}

function particle1() {

  //modify this
  //m center of the circle
  //m = { [0], [1], [2], ....[n] }
  //m[0] = x coordinate
  //m[1] = y coordinate
  //r = radius
  // var m = d3.mouse(this);
  var m = [width / 2, height / 2];
  svg.insert("circle", "rect")
    .attr("cx", m[0])
    .attr("cy", m[1])
    .attr("r", height / 4)
    //color - 1 - red, 20 - red-green, 360 - more colors
    .style("stroke", d3.hsl((i1 = 100), 1, 1))
    .style("stroke-opacity", 1e-6)
    .transition()
    //in milliseconds - 3000 ms*(1seconds/1000 ms) = 3 seconds
    .duration(150000)
    //sqrt, sin, cos,tan, tanh, atan, sinh,
    //.ease(Math.sqrt)
    .ease(d3.easeElasticInOut)
    //radius of circle in pixels
    .attr("r", 1e-6)
    .style("stroke-opacity", 1)
    .remove();
  // d3.event.preventDefault();
}

function particle2() {

  //modify this
  //m center of the circle
  //m = { [0], [1], [2], ....[n] }
  //m[0] = x coordinate
  //m[1] = y coordinate
  //r = radius
  // var m = d3.mouse(this);
  var m = [ 4*width / 5, height / 2];

  svg.insert("circle", "rect")
    .attr("cx", m[0])
    .attr("cy", m[1])
    .attr("r", width / 4)
    //color - 1 - red, 20 - red-green, 360 - more colors
    .style("stroke", d3.hsl((i2 = 200), 0, 0))
    .style("stroke-opacity", 1e-6)
    .transition()
    //in milliseconds - 3000 ms*(1seconds/1000 ms) = 3 seconds
    .duration(100000)
    //sqrt, sin, cos,tan, tanh, atan, sinh,
    //.ease(Math.sqrt)
    .ease(d3.easeElasticInOut)
    //radius of circle in pixels
    .attr("r", 1e-6)
    .style("stroke-opacity", 1)
    .remove();
  // d3.event.preventDefault();
}

function particle3() {

  //modify this
  //m center of the circle
  //m = { [0], [1], [2], ....[n] }
  //m[0] = x coordinate
  //m[1] = y coordinate
  //r = radius
  // var m = d3.mouse(this);
  var m = [width / 2, 5 * height / 7];

  svg.insert("circle", "rect")
    .attr("cx", m[0])
    .attr("cy", m[1])
    .attr("r", height / 8 + 100)
    //color - 1 - red, 20 - red-green, 360 - more colors
    .style("stroke", d3.hsl((i3 = 300), 0, 0))
    .style("stroke-opacity", 1e-6)
    .transition()
    //in milliseconds - 3000 ms*(1seconds/1000 ms) = 3 seconds
    .duration(75000)
    //sqrt, sin, cos,tan, tanh, atan, sinh,
    //.ease(Math.sqrt)
    .ease(d3.easeElasticInOut)
    //radius of circle in pixels
    .attr("r", 1e-6)
    .style("stroke-opacity", 1)
    .remove();
  // d3.event.preventDefault();
}

function particle32() {

  //modify this
  //m center of the circle
  //m = { [0], [1], [2], ....[n] }
  //m[0] = x coordinate
  //m[1] = y coordinate
  //r = radius
  // var m = d3.mouse(this);
  var m = [width / 2, 2 * height / 7];

  svg.insert("circle", "rect")
    .attr("cx", m[0])
    .attr("cy", m[1])
    .attr("r", height / 8 + 100)
    //color - 1 - red, 20 - red-green, 360 - more colors
    .style("stroke", d3.hsl((i3 = 300), 0, 0))
    .style("stroke-opacity", 1e-6)
    .transition()
    //in milliseconds - 3000 ms*(1seconds/1000 ms) = 3 seconds
    .duration(75000)
    //sqrt, sin, cos,tan, tanh, atan, sinh,
    //.ease(Math.sqrt)
    .ease(d3.easeElasticInOut)
    //radius of circle in pixels
    .attr("r", 1e-6)
    .style("stroke-opacity", 1)
    .remove();
  // d3.event.preventDefault();
}

function particle4() {

  //modify this
  //m center of the circle
  //m = { [0], [1], [2], ....[n] }
  //m[0] = x coordinate
  //m[1] = y coordinate
  //r = radius
  // var m = d3.mouse(this);
  var m = [width / 5, height / 2];

  svg.insert("circle", "rect")
    .attr("cx", m[0])
    .attr("cy", m[1])
    .attr("r", width / 4)
    //color - 1 - red, 20 - red-green, 360 - more colors
    .style("stroke", d3.hsl((i4 = 0), 0, 0))
    .style("stroke-opacity", 1e-6)
    .transition()
    //in milliseconds - 3000 ms*(1seconds/1000 ms) = 3 seconds
    .duration(100000)
    //sqrt, sin, cos,tan, tanh, atan, sinh,
    //.ease(Math.sqrt)
    .ease(d3.easeElasticInOut)
    //radius of circle in pixels
    .attr("r", 1e-6)
    .style("stroke-opacity", 1)
    .remove();
  // d3.event.preventDefault();
}