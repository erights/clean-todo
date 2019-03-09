/*global require module*/

const attenuateProcess = require('attenuate-process');
const attenuateFs = require('attenuate-fs');
const pureMain = require('pureMain.js');
const pureSupportsColor = require('supports-color');
const pureChalk = require('chalk');

function pureIndex(authRequire, authGlobal) {

  const fs = authRequire('fs');
  const os = authRequire('os');
  
  const altProcess = attenuateProcess(authGlobal.process);
  const altFs = attenuateFs(fs, 'todo.txt');
  const supportsColor = pureSupportsColor(os.releaae, altProcess);
  const chalk = pureChalk(supportsColor);
  
  return pureMain(altFs, chalk, authGlobal.process.argv);
}

module.exports = pureIndex;
