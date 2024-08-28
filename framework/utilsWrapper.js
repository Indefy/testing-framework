import { fetchData } from './utils.mjs';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 60, checkperiod: 120 });

const utilsWrapper = {
  async fetchDataWrapper(endpoint) {
    try {
      const cachedData = cache.get(endpoint);
      if (cachedData) {
        return cachedData;
      }
      
      const data = await fetchData(endpoint);
      cache.set(endpoint, data);
      return data;
    } catch (error) {
      console.error(`Error fetching data from ${endpoint}:`, error);
      throw new Error('Failed to fetch data.');
    }
  },
  clearCache(endpoint) {
    cache.del(endpoint);
  }
};

export default utilsWrapper;
