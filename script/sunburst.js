(function (global) {
  'use strict';

  const sunburst = function () {
    let INTERACTIVE_CLICK_STATE = 1;

    // Specify the chart’s dimensions.
    const width = 928;
    const height = width;
    const radius = width / 6;
  
    // Create the color scale.
    const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length + 1));
  
    // Compute the layout.
    const hierarchy = d3.hierarchy(data)
      .sum(d => d.value)
      .sort((a, b) => b.value - a.value);
    const root = d3.partition()
      .size([2 * Math.PI, hierarchy.height + 1])
      (hierarchy);
    root.each(d => d.current = d);
  
    // Create the arc generator.
    const arc = d3.arc()
      .startAngle(d => d.x0)
      .endAngle(d => d.x1)
      .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
      .padRadius(radius * 1.5)
      .innerRadius(d => d.y0 * radius)
      .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1))
  
    // Create the SVG container.
    const svg = d3.create("svg")
      .attr("viewBox", [-width / 2, -height / 2, width, width])
      .style("font", "10px sans-serif");
  
    // Append the arcs.
    const path = svg.append("g")
      .selectAll("path")
      .data(root.descendants().slice(1))
      .join("path")
      // .attr("fill", d => { while (d.depth > 1) d = d.parent; return color(d.data.name); })
      .attr("fill", d => {
        if(d.depth === 2) {
          console.log('____ clickState, name', INTERACTIVE_CLICK_STATE, d.data.name);
          switch(d.data.name) {
            case 'males': return d3.rgb("blue");
            case 'females': return d3.color("pink");
            case 'Homicide': return d3.rgb(239,62,91);
            case 'Acts intended to cause injury': return d3.rgb(242,98,121);
            case 'Sexual assault': return d3.rgb(246,143,160);
            case 'Dangerous/negligent acts': return d3.rgb(75,37,109);
            case 'Abduction/harassment': return d3.rgb(111,84,149);
            case 'Robbery/extortion': return d3.rgb(160,158,214);
            case 'Unlawful entry with intent': return d3.rgb(63,100,126);
            case 'Theft': return d3.rgb(104,143,173);
            case 'Fraud deception': return d3.rgb(159,193,211);
            case 'Illicit drugs': return d3.rgb(0,176,178);
            case 'Weapons/explosives': return d3.rgb(82,204,206);
            case 'Property damage/env pollution': return d3.rgb(149,212,122);
            case 'Public order': return d3.rgb(103,124,138);
            case 'Offences against justice': return d3.rgb(178,162,150);
            case 'Misc offences': return d3.rgb(201,201,201);
            default: {
            }
          }
        }
        d = d.parent;
        return color(d.data.name);
      })
      .attr("fill-opacity", d => arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0)
      .attr("pointer-events", d => arcVisible(d.current) ? "auto" : "none")
      .attr("d", d => arc(d.current));
  
    // Make them clickable if they have children.
    path.filter(d => d.children)
      .style("cursor", "pointer")
      .on("click", clicked);
  
    const format = d3.format(",d");
    path.append("title")
      .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);
  
    const label = svg.append("g")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .style("user-select", "none")
      .selectAll("text")
      .data(root.descendants().slice(1))
      .join("text")
      .attr("dy", "0.35em")
      .attr("fill-opacity", d => +labelVisible(d.current))
      .attr("transform", d => labelTransform(d.current))
      .text(d => d.data.name);
  
    const parent = svg.append("circle")
        .datum(root)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("click", clicked);
  
    // Handle zoom on click.
    function clicked(event, p) {
      parent.datum(p.parent || root);
  
      root.each(d => d.target = {
        x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
        x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
        y0: Math.max(0, d.y0 - p.depth),
        y1: Math.max(0, d.y1 - p.depth)
      });
  
      const t = svg.transition().duration(750);
  
      // Transition the data on all arcs, even the ones that aren’t visible,
      // so that if this transition is interrupted, entering arcs will start
      // the next transition from the desired position.
      path.transition(t)
          .tween("data", d => {
            const i = d3.interpolate(d.current, d.target);
            return t => d.current = i(t);
          })
        .filter(function(d) {
          return +this.getAttribute("fill-opacity") || arcVisible(d.target);
        })
          .attr("fill-opacity", d => arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0)
          .attr("pointer-events", d => arcVisible(d.target) ? "auto" : "none") 
  
          .attrTween("d", d => () => arc(d.current));
  
      label.filter(function(d) {
          return +this.getAttribute("fill-opacity") || labelVisible(d.target);
        }).transition(t)
          .attr("fill-opacity", d => +labelVisible(d.target))
          .attrTween("transform", d => () => labelTransform(d.current));
    }
    
    function arcVisible(d) {
      return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
    }
  
    function labelVisible(d) {
      return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
    }
  
    function labelTransform(d) {
      const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
      const y = (d.y0 + d.y1) / 2 * radius;
      return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
    }

    document.getElementById('root').innerHTML = '';
  
    return svg.node();
  }

  // AMD support
  if (typeof define === 'function' && define.amd) {
      define(function () { return sunburst; });
  // CommonJS and Node.js module support.
  } else if (typeof exports !== 'undefined') {
      // Support Node.js specific `module.exports` (which can be a function)
      if (typeof module !== 'undefined' && module.exports) {
          exports = module.exports = sunburst;
      }
      // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
      exports.sunburst = sunburst;
  } else {
      global.sunburst = sunburst;
  }
})(this);
