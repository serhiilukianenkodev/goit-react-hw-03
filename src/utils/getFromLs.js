const getFromLs = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.dir(error);
  }
};

export default getFromLs;
