import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HorizontalBarChart = () => {
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve data from local storage
        const storedData = localStorage.getItem('projectData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          if (
            parsedData &&
            parsedData.dasbhoardPage &&
            parsedData.dasbhoardPage.performance
          ) {
            const performanceData = parsedData.dasbhoardPage.performance;
            setPerformanceData(performanceData);
            //console.log(performanceData);
          }
        }
      } catch (error) {
        console.error('Failed to retrieve data:', error);
      }
    };

    fetchData();
  }, []);

  // Check if performanceData is defined
  if (!performanceData) {
    return <div>Loading...</div>;
  }

  // Extract labels and data from performanceData
  const labels = Object.keys(performanceData);
  const data = Object.values(performanceData);

  // Chart data
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        label: '# of Hits',
        backgroundColor: [
          '#F7604D',
          '#4ED6B8',
          '#A8D582',
          '#D7D768',
          '#9D66CC',
          '#DB9C3F',
          '#3889FC'
        ],
        borderWidth: 0,
        color: 'white',
      },
    ],
  };

  //Chart options
  const chartOptions = {
    indexAxis: 'y',
    barPercentage: 0.2,
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        ticks: {
          beginAtZero: true,
          color: 'white'
        },
      },
      y: {
        ticks: {
          color: 'white'
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', // Set the label text color to white
        },
      },
    },
  };

  return (
    <div className='sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 mb-[30px]'>
      <div className='bg-[#435c70] p-[40px] min-h-[350px] max-h-[450px] h-full shadow-[1px_1px_5px_0_#455c71]'>
      <h2 className='mb-[30px] text-white font-bold	 text-[1.1rem]'>Performance</h2>
      <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default HorizontalBarChart;
