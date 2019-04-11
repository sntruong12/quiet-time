const BASE_URL = '/api/users/';

const signup = async (user) => {
  try {
    let createUser = await fetch(
      BASE_URL,
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      }
    )
    .then(response => response.json())
    .then(data => data)
    console.log(createUser)
    return createUser
  }
  catch(err) {
    console.log(err)
    return err
  }
}

export default {
  signup
};