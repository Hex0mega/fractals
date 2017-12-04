var width = innerWidth,
  height = innerHeight;

var i = 0;

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

svg.append("rect")
  .attr("width", width)
  .attr("height", height);
// .on("mousemove", particle);

var j = 0;

setInterval(particle, 10);
// setInterval(particle2, 50)

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
    //color 0.5/0.5 and bw:1,1
    .style("stroke", d3.hsl((i = (i + 1) % 360), 0.5, 0.5))
    .style("stroke-opacity", 1e-6)
    .transition()
    //in milliseconds - 3000 ms*(1seconds/1000 ms) = 3 seconds
    .duration(50000)
    //sqrt and sinh are best.  sin, cos,tan, tanh, atan, struggle removing objects fast 
    .ease(d3.easeElasticIn)
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

function particle2() {

  //modify this
  //m center of the circle
  //m = { [0], [1], [2], ....[n] }
  //m[0] = x coordinate
  //m[1] = y coordinate
  //r = radius
  // var m = d3.mouse(this);
  var m = [100, 100];

  svg.insert("circle", "rect")
    .attr("cx", m[0])
    .attr("cy", m[1])
    .attr("r", 1e-6)
    //color - 1 - red, 20 - red-green, 360 - more colors
    .style("stroke", d3.hsl((i = (i + 1) % 360), -.5, .5))
    .style("stroke-opacity", 1e-6)
    .transition()
    //in milliseconds - 3000 ms*(1seconds/1000 ms) = 3 seconds
    .duration(100000)
    //sqrt, sin, cos,tan, tanh, atan, sinh,
    .ease(Math.sqrt)
    //radius of circle in pixels
    .attr("r", 1500)
    .style("stroke-opacity", 1)
    .remove();
  // d3.event.preventDefault();
}

