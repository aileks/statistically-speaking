import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function LineGraph({ data }) {
  const svgRef = useRef();

  const drawLineGraph = () => {
    if (!svgRef.current) {
      console.error('SVG ref is null');
      return;
    }

    d3.select(svgRef.current).selectAll('*').remove();

    const margin = { top: 20, right: 30, bottom: 100, left: 60 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xData = data.data.map(d => new Date(d[0]));
    const yData = data.data.map(d => d[1]);

    const x = d3.scaleTime().domain(d3.extent(xData)).range([0, width]);
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(yData)])
      .range([height, 0]);

    const line = d3
      .line()
      .x((d, i) => x(xData[i]))
      .y((d, i) => y(yData[i]));

    // Draw the line
    svg
      .append('path')
      .data([yData])
      .attr('class', 'line')
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', 'orange')
      .attr('stroke-width', 2);

    // Draw the x-axis
    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).tickFormat(d3.timeFormat('%Y-%m-%d')))
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end');

    // Draw the y-axis
    svg.append('g').call(d3.axisLeft(y));

    // Add axis labels
    svg
      .append('text')
      .attr('transform', `translate(${width / 2}, ${height + margin.top + 60})`)
      .style('text-anchor', 'middle')
      .text(data.columns[0]);

    svg
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - margin.left)
      .attr('x', 0 - height / 2)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .text(data.columns[1]);

    // Add dots to represent each data point
    svg
      .selectAll('.dot')
      .data(data.data)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', (d, i) => x(xData[i])) // x value
      .attr('cy', (d, i) => y(yData[i])) // y value
      .attr('r', 5)
      .attr('fill', 'orange')
      .attr('stroke', 'white')
      .attr('stroke-width', 1.5)
      .on('mouseover', function (event, d) {
        d3.select(this).transition().duration(100).attr('r', 7);
        tooltip.transition().duration(200).style('opacity', 0.9);
        tooltip
          .html(`Date: ${d[0]}<br>Jobs Lost: ${d[1]}`)
          .style('left', event.pageX + 5 + 'px')
          .style('top', event.pageY - 28 + 'px');
      })
      .on('mouseout', function () {
        d3.select(this).transition().duration(100).attr('r', 5);
        tooltip.transition().duration(500).style('opacity', 0);
      });

    // Create tooltip for each dot
    const tooltip = d3
      .select('body')
      .append('div')
      .style('opacity', 0)
      .style('position', 'absolute')
      .style('background', '#f8fafc')
      .style('border', '1px solid #9ca3af')
      .style('border-radius', '5px')
      .style('padding', '5px')
      .style(
        'box-shadow',
        '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
      )
      .style('transition', 'opacity 0.2s');
  };

  useEffect(() => {
    if (data && data.data && data.data.length > 0) {
      drawLineGraph();
    } else {
      console.error('Invalid or empty data provided to graph');
    }
  }, [data]);

  return (
    <div className='mt-6 flex items-center justify-center overflow-x-auto rounded border border-gray-400'>
      <svg
        ref={svgRef}
        className='m-2'
      ></svg>
    </div>
  );
}
