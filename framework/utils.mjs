import axios from 'axios';
import config from './config.mjs';

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${config.baseUrl}/${endpoint}`, {
      headers: { 'Authorization': `Bearer ${config.apiKey}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};