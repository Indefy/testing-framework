import { fetchData } from './utils.mjs';

const utilsWrapper = {
  fetchDataWrapper(endpoint) {
    return fetchData(endpoint);
  }
};

export default utilsWrapper;