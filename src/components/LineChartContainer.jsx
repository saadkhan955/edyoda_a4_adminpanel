import React from 'react';
import LineChart from '../data/LineChart';
import HorizontalBarChart from '../data/HorizontalBarChart';
import PieChart from '../data/PieChart';

const LineChartContainer = () => {
  return (
    <div className='flex flex-wrap'>
      <LineChart />
      <HorizontalBarChart/>
      <PieChart/>
    </div>
  );
};

export default LineChartContainer;
