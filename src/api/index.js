
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
