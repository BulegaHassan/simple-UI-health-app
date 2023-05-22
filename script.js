document.getElementById("getForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const url = document.getElementById("getURL").value;

  axios
    .get(url)
    .then(function (response) {
      displayResponse(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      displayResponse(error.message);
    });
});

document
  .getElementById("postForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const url = document.getElementById("postURL").value;
    const data = document.getElementById("postData").value;
console.log(data);
    axios
      .post(url, JSON.parse(data))
      .then(function (response) {
        displayResponse(response.data);
      console.log('response data',response.data);
      })
      .catch(function (error) {
        displayResponse(error.message);
      });
  });

function displayResponse(response) {
  const container = document.getElementById("responseContainer");
  container.innerHTML = JSON.stringify(response);
}
