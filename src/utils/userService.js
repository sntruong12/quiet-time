import tokenService from './tokenService';

const BASE_URL = '/api/users/';

const signup = async (user) => {
  try {
    let createdUser = await fetch(
      BASE_URL,
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      }
    )
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Email/Username already taken!');
    })
    // Parameter destructuring!
    .then(({token}) => {
      tokenService.setToken(token);
    });
    return createdUser
  }
  catch(err) {
    console.log(err)
    return err
  }
}

const getUser = () => {
  return tokenService.getUserFromToken();
}

const logout = () => {
  tokenService.removeToken();
}

export default {
  signup,
  getUser,
  logout,
};