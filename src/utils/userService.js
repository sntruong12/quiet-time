import tokenService from './tokenService';

const BASE_URL = '/api/users/';

const signup = async (user) => {
  try {
    let createdUser = await fetch(
      BASE_URL + 'signup',
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

const getAdmin = () => {
  return tokenService.getAdminFromToken();
}

const logout = () => {
  tokenService.removeToken();
}

const login = async (creds) => {
  try {
    let user = await fetch(
      BASE_URL + 'login',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(creds)
      }
    )
    .then(res => {
      // Valid login if we have a status of 2xx (res.ok)
      if (res.ok) return res.json();
      throw new Error('Bad Credentials!');
    })
    .then(({token}) => tokenService.setToken(token));
    return user
  }
  catch(err) {
    // some ui for error on log in attempt
  }
}

const getAllUsers = async () => {
  const users = await fetch(
      BASE_URL,
      {
        mode: "cors",
        headers: {
          'Authorization': 'Bearer ' + tokenService.getToken()
        }
      }
    ).then(data => data.json())
  return users
}

const deleteUser = async(email) => {
  const user = await fetch(
    BASE_URL + email,
    {
      method: "DELETE",
      mode: "cors",
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    }
  ).then(data => data.json())
  return user
}

export default {
  signup,
  getUser,
  getAdmin,
  logout,
  login,
  getAllUsers,
  deleteUser
};