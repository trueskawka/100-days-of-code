function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var fills = ['#3e181b',
             '#422018',
             '#45391b',
             '#193c29',
             '#18323e',
             '#331f35',
             '#43293d'];
var borders = ['#db1d2d',
             '#f0421c',
             '#fec02d',
             '#20d071',
             '#1a9ddb',
             '#a13fad',
             '#f26fd4'];

var w = window.innerWidth;
var h = window.innerHeight;
var current = [0, 0];
var coordinates = false;

var bodySelection = d3.select("body");

var svg = bodySelection.append("svg")
                       .attr("width", w)
                       .attr("height", h);

svg.on("click", function() {
    current = d3.mouse(this);
    num = getRandomInt(0,6);

    if (!coordinates) {
      coordinates = d3.mouse(this);
    }

    svg.append("line")
       .attr("x1", coordinates[0])
       .attr("y1", coordinates[1])
       .attr("x2", current[0])
       .attr("y2", current[1])
       .attr("stroke-width", 2)
       .attr("stroke", "gray");

    coordinates = current;

    svg.append("rect")
       .attr("x", coordinates[0]-60)
       .attr("y", coordinates[1]-40)
       .attr("width", 120)
       .attr("height", 80)
       .style("fill", fills[num])
       .style("stroke", borders[num])
       .style("stroke-width", 3);
  }
);
