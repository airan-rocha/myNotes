export const getUuid = () => {
  const {v4: uuidv4} = require('uuid');
  return uuidv4();
};
