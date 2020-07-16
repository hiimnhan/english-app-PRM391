export const setHeader = param => {
  return {
    headers: {
      Authorization: 'Bearer ' + param,
    },
  };
};
