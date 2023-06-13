import { useEffect } from 'react';
import axios from 'axios';

const DataLoading = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if the data is already stored in localStorage
        const storedData = localStorage.getItem('projectData');

        if (storedData) {
          //console.log('Data already present in localStorage:', storedData);
          return; // Skip fetching if data is already stored
        }

        const response = await axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json');
        const data = response.data;

        // Store the data in localStorage
        localStorage.setItem('projectData', JSON.stringify(data));
        //console.log('Data stored in localStorage:', data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);
};

export default DataLoading;
