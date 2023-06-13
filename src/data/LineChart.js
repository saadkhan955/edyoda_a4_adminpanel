import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required scales and plugins with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [latestHits, setLatestHits] = useState(null);

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
            parsedData.dasbhoardPage.latestHits
          ) {
            const latestHitsData = parsedData.dasbhoardPage.latestHits;
            setLatestHits(latestHitsData);
            console.log(latestHitsData);
          }
        }
      } catch (error) {
        console.error('Failed to retrieve data:', error);
      }
    };

    fetchData();
  }, []);

  // Check if latestHits is defined
  if (!latestHits) {
    return <div>Loading...</div>;
  }

  // Extract the data from the latestHits object
  const { featured, latest, months, popular } = latestHits;

  // Prepare the chart data
  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Featured',
        data: featured,
        borderColor: 'rgb(255, 99, 132)',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Latest',
        data: latest,
        borderColor: 'rgb(54, 162, 235)',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Popular',
        data: popular,
        borderColor: 'rgb(75, 192, 192)',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  // Chart.js options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        type: 'category',
        display: true,
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Hits',
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Line Chart',
      },
    },
    elements: {
      point: {
        backgroundColor: 'rgba(0,0,0,0.2)',
      },
    },
  };

  // CSS style for the canvas background color
  const canvasStyle = {
    background: 'rgba(255, 0, 0, 0.2)',
  };

  return (
    <div>
      <div style={canvasStyle}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default LineChart;
