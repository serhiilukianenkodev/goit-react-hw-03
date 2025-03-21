const saveToLs = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export default saveToLs;
