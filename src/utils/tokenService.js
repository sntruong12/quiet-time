const setToken = (token) => {
  if(token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  }
}

// check if token is on localStorage
const getToken = () => {
  let token = localStorage.getItem('token');
  if(token) {
    // check if token is expired, remove if so
    const payload = JSON.parse(atob(token.split('.')[1]));
    // JWT's exp is expressed in seconds, not milliseconds, so convert
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      token = null
    }
  }
  return token
}

// remove the token from localStorage
const removeToken = () => {
  localStorage.removeItem('token');
}

// method that decodes the token, then extracts and returns the user object
const getUserFromToken = () => {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

const getAdminFromToken = () => {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user.admin : null;
}

export default {
  setToken,
  getToken,
  removeToken,
  getUserFromToken,
  getAdminFromToken
}