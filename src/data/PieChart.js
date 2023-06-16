import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';


// Register the required plugins with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [storage, setStorage] = useState(null);

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
            parsedData.dasbhoardPage.storage
          ) {
            const storageData = parsedData.dasbhoardPage.storage;
            setStorage(storageData);
          }
        }
      } catch (error) {
        console.error('Failed to retrieve data:', error);
      }
    };

    fetchData();
  }, []);
  // Check if storage data is defined
  if (!storage) {
    const spinnerCss = css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;
    `;

    return (
      <div className='sm:w-full md:w-full lg:w-1/2 xl:w-1/2 pr-4 pl-4 mb-[30px]'>
        <div className='bg-[#435c70] p-[40px] min-h-[350px] max-h-[450px] h-full shadow-[1px_1px_5px_0_#455c71]'>
          <h2 className='mb-[30px] text-white font-bold text-[1.1rem]'>Storage Information</h2>
          <div className='flex justify-center items-center' style={{ height: '300px' }}>
            <RingLoader css={spinnerCss} color='#ffffff' loading={true} size={64} />
          </div>
        </div>
      </div>
    );
  }
  // Extract the data from the storage object
  const { available, system, used } = storage;

  // Prepare the chart data
  const chartData = {
    labels: [
      `Used Storage (${used}GB)`,
      `System Storage (${system}GB)`,
      `Available Storage (${available}GB)`,
    ],
    datasets: [
      {
        data: [used, system, available],
        backgroundColor: ['#F7604D', '#4ED6B8', '#A8D582'],
        borderColor: '#FFFFFF',
      },
    ],
  };

  // Chart.js options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: 'white', // Set the label color to white
        },
      },
    },
  };

  return (
    <div className='sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 mb-[30px]'>
      <div className='bg-[#435c70] p-[40px] min-h-[350px] max-h-[520px] h-full shadow-[1px_1px_5px_0_#455c71]'>
        <h2 className='mb-[30px] text-white font-bold	text-[1.1rem]'>Storage Information</h2>
        <div id='pieChartContainer' className='h-[300px]'>
          <Pie data={chartData} options={chartOptions} id='pieChart' />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
