function submitRSVP() {
  let data = {
    name: document.getElementById("nameInput").value,
    phone: document.getElementById("phoneInput").value,
    attending: document.querySelector('input[name="rsvp-selection"]:checked')
      .value,
  };

  axios({
    method: "POST",
    url: "https://us-central1-selene-30.cloudfunctions.net/save-rsvp",
    data: data,
  })
    .then((response) => {
      console.log(response);
      let toastElement = document.getElementById("toast");
      toastElement.classList.remove("text-bg-danger");
      toastElement.classList.add("text-bg-success");
      toastElement.querySelector(".toast-body").innerHTML = response.data;
      const toast = new bootstrap.Toast(toastElement);
      toast.show();
    })
    .catch((error) => {
      console.log(error);
      let toastElement = document.getElementById("toast");
      toastElement.classList.remove("text-bg-success");
      toastElement.classList.add("text-bg-danger");
      toastElement.querySelector(".toast-body").innerHTML = error.response.data;
      const toast = new bootstrap.Toast(toastElement);
      toast.show();
    });
}
