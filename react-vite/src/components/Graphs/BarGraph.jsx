import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function BarGraph({ data }) {
  const svgRef = useRef();

  console.log(data);
  const drawBarGraph = () => {
    if (!svgRef.current) {
      console.error('SVG ref is null');
      return;
    }

    d3.select(svgRef.current).selectAll('*').remove();

    const margin = { top: 20, right: 30, bottom: 100, left: 60 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xData = data.data.map(d => d[0]);
    const yData = data.data.map(d => d[1]);

    const x = d3.scaleBand().domain(xData).range([0, width]).padding(0.1);
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(yData)])
      .range([height, 0]);

    svg
      .selectAll('.bar')
      .data(data.data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d[0]))
      .attr('width', x.bandwidth())
      .attr('y', d => y(d[1]))
      .attr('height', d => height - y(d[1]))
      .attr('fill', 'steelblue');

    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    svg.append('g').call(d3.axisLeft(y));

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
  };

  useEffect(() => {
    if (data && data.data && data.data.length > 0) {
      drawBarGraph();
    } else {
      console.error('Invalid or empty data provided to graph');
    }
  }, [data]);

  return (
    <div className='flex items-center justify-center border border-gray-300 rounded'>
      <svg
        ref={svgRef}
        className='m-2'
      ></svg>
    </div>
  );
}
