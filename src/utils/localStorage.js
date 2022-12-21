export const getToken = () => {
  try {
    const token = localStorage.getItem("token");
    return token;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const setStorage = (storageName, token) =>
  localStorage.setItem(storageName, token);
