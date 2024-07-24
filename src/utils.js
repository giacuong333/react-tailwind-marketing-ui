const isEmail = (value) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(value));
};

const isEmpty = (value) => {
  return value === "";
};

export { isEmail, isEmpty };
