import axios from 'axios';

// Define a type for your data
interface Data {
  id: number;
  name: string;
}

// Example function to fetch data
export const fetchData = async (): Promise<Data[]> => {
  try {
    const response = await axios.get<Data[]>('https://api.example.com/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};