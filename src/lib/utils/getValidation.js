const getValidation = (type, value) => {
  const regexp = {
    email:
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    password: /^.{8,30}$/,
  };
  return regexp[type].test(value);
};

export default getValidation;
