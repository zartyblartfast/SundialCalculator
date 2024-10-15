// Example to generate a sundial using D3.js or SVG.js

// SunCalc.js example to get solar noon and sun azimuth at a given latitude
const latitude = 51.5074; // London latitude
const date = new Date();

const sunPosition = SunCalc.getPosition(date, latitude, 0);
const solarNoon = SunCalc.getTimes(date, latitude, 0).solarNoon;

console.log('Solar Noon:', solarNoon);
console.log('Sun Azimuth:', sunPosition.azimuth);

// Example with SVG.js to create a sundial
const draw = SVG().addTo('#sundial').size(300, 300);
const circle = draw.circle(200).fill('none').stroke({ width: 2 });

// Example with D3.js (can be used to dynamically create hour lines)
const svg = d3.select("#sundial")
              .append("svg")
              .attr("width", 300)
              .attr("height", 300);

svg.append("line")
   .attr("x1", 150)
   .attr("y1", 150)
   .attr("x2", 250)
   .attr("y2", 150)
   .attr("stroke", "black");
