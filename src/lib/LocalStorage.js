const localStorage = () => {
  const geDetails = (name) => JSON.parse(localStorage.getItem(name));
  const setDetails = (name, value) =>
    localStorage.setItem(name, JSON.stringify(value));
  const removeDetails = (name) => localStorage.removeItem(name);
  return {
    geDetails,
    setDetails,
    removeDetails,
  };
};
export default localStorage;
