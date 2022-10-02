import tokenService from './tokenService';
const BASE_URL = '/api/posts/';





function getDetails(id){

  console.log('details calling............', id);

  return fetch(BASE_URL + id, {

    headers: {
      Authorization: "Bearer " + tokenService.getToken(), 

    }

  }).then(res => {

    if(res.ok) return res.json();

    throw new Error('Error from getProfile Request, check the server terminal..!')
  })
}




export function removePost(id) {

  console.log("delete post id: " + id)
  return fetch(BASE_URL + "/" + id, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(), 
    }
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error(res.error);
  });
}


const userService = {

  getDetails,
  removePost,

};

export default userService;