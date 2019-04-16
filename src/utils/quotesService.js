import tokenService from './tokenService';

const BASE_URL = '/api/teachers/';

const getQuotes = async (t_name) => {
  let allQuotes = [];
  try {
    let quotes = await fetch(BASE_URL + t_name + '/quotes', 
      {
        mode: 'cors',
        headers: {
          'Authorization': 'Bearer ' + tokenService.getToken()
        }
      }
    ).then(res => res.json()).then(data => data);
    quotes.forEach(q => {
      allQuotes.push(q.text)
    });
    return allQuotes;
  }
  catch(err) {
    console.log(err)
    allQuotes.push('Error - Why not?')
    return allQuotes
  }
}

export default {
  getQuotes
}