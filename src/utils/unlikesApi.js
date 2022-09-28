import tokenService from "./tokenService";


const BASE_URL = "/api/";



export function createunLike(postId) {
  return fetch(`${BASE_URL}posts/${postId}/unlikes`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(), 
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error(res.error);
  });
}

export function removeunLike(unlikeId) {
  return fetch(`${BASE_URL}unlikes/${unlikeId}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(), 
    }
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error(res.error);
  });
}