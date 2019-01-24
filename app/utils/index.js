export const objectToObjectArray = object => {
  return Object.keys(object).map(key => ({ key, value: object[key] }));
};
