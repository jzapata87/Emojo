import axios from 'axios';



export default fetchBoundingBox = (uri) => {
  const data = new FormData();
  data.append("photo", {
      // Platform.OS === "android" ? this.state.photo.uri : this.state.photo.uri.replace("file://", ""),
      uri: uri,
      name: "testphoto",
      type: "image/jpeg",

  });
  return fetch("https://5db9e0a0.ngrok.io/test", {
    method: "POST",
    body: data,
  })
    .then(response => {
      return response.json()})
    .catch(error => {
      return error
    });
};

export const s3Upload = (uri, fileName, type, id) => {
  console.log("===============inside s3upload api===============", uri, fileName, type);
  const data = new FormData();
  data.append("photo", {
      //Platform.OS === "android" ? this.state.photo.uri : this.state.photo.uri.replace("file://", ""),
      uri: `file://${uri}`,
      name: fileName,
      type: "image/jpeg",

  });
  return fetch(`https://5db9e0a0.ngrok.io/upload/${id}`, {
    method: "POST",
    body: data,
  })
    .then(response => {
      return response.json()})
    .catch(error => {
      throw Error(error)
    });
};

//const { data } = await axios.post(`${this.path}/auth0`, args);

export const getUserData = (token) => {
  console.log(token, 'token')
  return axios.post("https://5db9e0a0.ngrok.io/auth", { token })
    .then(response => {
      return response.data})
    .catch(error => {
      throw Error(error)
    });
}

// export const getUserData = (token) => {
//   console.log(token, 'token')
//   return fetch("http://4d10a385.ngrok.io/auth", {
//     method: "POST",
//     body: JSON.stringify({token: token}),
//     headers:{
//     'Content-Type': 'application/json'
//     }
//   })
//     .then(response => {
//       return response.json()})
//     .catch(error => {
//       throw Error(error)
//     });
// }

export const fetchFeed = (id) => {
  console.log("inside feeeeef", id)
  return axios.get(`https://5db9e0a0.ngrok.io/user/${id}`)
    .then(response => {
      return response.data})
    .catch(error => {
      throw Error(error)
    });
}
