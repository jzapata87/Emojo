
export default fetchBoundingBox = (uri) => {
  const data = new FormData();
  data.append("photo", {
      // Platform.OS === "android" ? this.state.photo.uri : this.state.photo.uri.replace("file://", ""),
      uri: uri,
      name: "testphoto",
      type: "image/jpeg",

  });
  return fetch("http://localhost:8000/test", {
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
      type: type,

  });
  return fetch(`http://localhost:8000/upload/${id}`, {
    method: "POST",
    body: data,
  })
    .then(response => {
      return response.json()})
    .catch(error => {
      throw Error(error)
    });
};

export const getUserData = (token) => {
  console.log(token, 'token')
  return fetch("http://localhost:8000/auth", {
    method: "POST",
    body: JSON.stringify({token: token}),
    headers:{
    'Content-Type': 'application/json'
    }
  })
    .then(response => {
      return response.json()})
    .catch(error => {
      throw Error("error")
    });
}

export const fetchFeed = (id) => {
  console.log("inside feeeeef", id)
  return fetch(`http://localhost:8000/user/${id}`, {
    method: "GET",
    headers:{
    'Content-Type': 'application/json'
    }
  })
    .then(response => {
      return response.json()})
    .catch(error => {
      throw Error(error)
    });
}
