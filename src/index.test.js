import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import console, {colors} from './index';


describe('consolomatic', () => {
  const cons = global.console;
  
  beforeEach(()=>{
    sinon.spy(cons, 'log');
    sinon.spy(cons, 'info');
    sinon.spy(cons, 'warn');
    sinon.spy(cons, 'error');
  });

  afterEach(()=>{
    cons.log.restore();
    cons.info.restore();
    cons.warn.restore();
    cons.error.restore();
  });

  it('should color log messages', () => {
    console.log('logg');
    expect(cons.log).to.be.calledOnce;
    expect(cons.log).to.be.calledWith('\x1b[2mlogg\x1b[0m');
  });

  it('should color info messages', () => {
    console.log('infoo');
    expect(cons.log).to.be.calledWith('\x1b[2minfoo\x1b[0m');
  });

  it('should color warn messages', () => {
    console.log('warnn');
    expect(cons.log).to.be.calledWith('\x1b[2mwarnn\x1b[0m');
  });

  it('should color error messages', () => {
    console.log('errorr');
    expect(cons.log).to.be.calledWith('\x1b[2merrorr\x1b[0m');
  });

  it('should still merge multiple params like native', () => {
    console.log('some', 'err', []);
    expect(cons.log).to.be.calledWith('\x1b[2msome err []\x1b[0m');
  });

  it('should allow setting new color for log messages', () => {
    console.setColor('info', colors.bgGreen);
    console.info('green info');
    expect(cons.info).to.be.calledWith('\x1b[42mgreen info\x1b[0m');
  });

  it('should allow creating of custom console methods', () => {
    console.addConsoleMethod('fred', colors.bgGreen);
    console.fred('green method');
    expect(cons.info).to.be.calledWith('\x1b[42mgreen method\x1b[0m');
  });

});