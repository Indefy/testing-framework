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