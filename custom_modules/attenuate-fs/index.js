/*global module*/

const harden = Object.freeze;

const checkFileName = (path, allowedPath) => {
  if (path !== allowedPath) {
    throw Error(`This app does not have access to ${path}`);
  }
};

const attenuateFs = (originalFs, allowedPath) => harden({
  appendFile: (path, data, callback) => {
    checkFileName(path, allowedPath);
    return originalFs.appendFile(path, data, callback);
  },
  createReadStream: (path) => {
    checkFileName(path, allowedPath);
    return originalFs.createReadStream(path);
  }
});

module.exports = attenuateFs;
