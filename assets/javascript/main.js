function submitRSVP() {
  let data = {
    name: document.getElementById("nameInput").value,
    phone: document.getElementById("phoneInput").value,
    attending: document.getElementById("attendInput").value,
  };

  axios({
    method: "POST",
    url: "https://us-central1-selene-30.cloudfunctions.net/save-rsvp",
    data: data,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
