var width = Math.max(960, innerWidth),
  height = Math.max(500, innerHeight);

var screenCenter = 0;

var i = 0;

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

svg.append("rect")
  .attr("width", width)
  .attr("height", height)
  .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

function particle() {

  //modify this
  //m center of the circle
  //m = { [0], [1], [2], ....[n] }
  //m[0] = x coordinate
  //m[1] = y coordinate
  //r = radius
  var m = d3.mouse(this);

  var cx = 1000 * Math.random();
  var cy = 1000 * Math.random();

  var rand = Math.random();
  console.log(m[0] + " " + m[1]);
  console.log(screen.height);
  console.log(screen.width);

  svg.insert("circle", "rect")
    .attr("cx", m[0])
    .attr("cy", m[1])
    .attr("r", 1000)
    //color - 1 - red, 20 - red-green, 360 - more colors
    .style("stroke", d3.hsl((i = (i + 1) % 1), -.5, 0.5))
    .style("stroke-opacity", 1e-6)
    .transition()
    //in milliseconds - 3000 ms*(1seconds/1000 ms) = 3 seconds
    .duration(1000)
    .ease(Math.sqrt)
    //radius of circle in pixels
    .attr("r", 1e-6)
    .style("stroke-opacity", 1);
  // .remove();
  d3.event.preventDefault();
}

