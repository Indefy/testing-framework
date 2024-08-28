// import { expect } from 'chai';
// import sinon from 'sinon';
// import utilsWrapper from '../../framework/utilsWrapper.js';
// import config from './config.mjs';

// describe('UtilsWrapper Module', () => {
//   it('should fetch data and cache it', async () => {
//     const endpoint = 'sample-endpoint';
//     const fetchDataStub = sinon.stub(utilsWrapper, 'fetchDataWrapper').resolves({ data: 'mocked data' });

//     const result = await utilsWrapper.fetchDataWrapper(endpoint);
//     expect(result.data).to.equal('mocked data');

//     // Check if data is cached
//     const cachedResult = await utilsWrapper.fetchDataWrapper(endpoint);
//     expect(cachedResult.data).to.equal('mocked data');
//     expect(fetchDataStub.calledOnce).to.be.true; // Ensure fetchData was called only once

//     fetchDataStub.restore();
//   });

//   it('should throw an error if fetch fails', async () => {
//     const endpoint = 'error-endpoint';
//     const fetchDataStub = sinon.stub(utilsWrapper, 'fetchDataWrapper').rejects(new Error('Fetch failed'));

//     try {
//       await utilsWrapper.fetchDataWrapper(endpoint);
//     } catch (error) {
//       expect(error.message).to.equal('Failed to fetch data.');
//     }

//     fetchDataStub.restore();
//   });
// });

import { expect } from 'chai';
import sinon from 'sinon';
import utilsWrapper from '../../framework/utilsWrapper.js';
import logger from '../../framework/logger.mjs';

describe('Advanced Test Suite', () => {
  it('should fetch data from API and log the result', async () => {
    const fetchDataStub = sinon.stub(utilsWrapper, 'fetchDataWrapper').resolves({ data: 'mocked data' });
    const logSpy = sinon.spy(logger, 'info');

    const result = await utilsWrapper.fetchDataWrapper('sample-endpoint');
    logger.info(`Fetched data: ${JSON.stringify(result)}`);

    expect(result).to.eql({ data: 'mocked data' });
    expect(fetchDataStub.calledOnce).to.be.true;
    expect(logSpy.calledOnce).to.be.true;
    expect(logSpy.calledWith('Fetched data: {"data":"mocked data"}')).to.be.true;

    fetchDataStub.restore();
    logSpy.restore();
  });
});