import tokenService from './tokenService';

const BASE_URL = '/api/posts/';


function getProfile(id){
  console.log('getProfile calling..')
  return fetch(BASE_URL + id, {
    headers: {
      Authorization: "Bearer " + tokenService.getToken(), 
    }
  }).then(res => {
    if(res.ok) return res.json();
    throw new Error('Error from getProfile Request, check the server terminal..!')
  })
}


const userService = {

  getProfile
};

export default userService;