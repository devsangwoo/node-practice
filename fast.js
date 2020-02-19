const customError = (message, type) => ({
  message: `error: ${message}`,
  type: `::${type}`,
});

const whitelist = ['gif', 'jpg', 'png'];
const data = [];

const isValidImageFile = data => {
  const ret2 = data.some(item => {
    const ret = whitelist.some(_item => item.endsWith(_item));
    return ret;
  });
  return ret2;
};

const sampledata = ['hey.dif'];

console.log(isValidImageFile(sampledata));
