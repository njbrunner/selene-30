function submitRSVP() {
  let formValid = validate();

  if (formValid) {
    let firstName = document.getElementById("firstNameInput").value;
    let lastName = document.getElementById("lastNameInput").value;
    let data = {
      name: `${firstName} ${lastName}`,
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
        let modalElement = document.getElementById("rsvpModal");
        const modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();
        let toastElement = document.getElementById("toast");
        toastElement.classList.remove("text-bg-danger");
        toastElement.classList.add("text-bg-success");
        toastElement.querySelector(".toast-body").innerHTML = response.data;
        const toast = new bootstrap.Toast(toastElement);
        toast.show();
      })
      .catch((error) => {
        let toastElement = document.getElementById("toast");
        toastElement.classList.remove("text-bg-success");
        toastElement.classList.add("text-bg-danger");
        toastElement.querySelector(".toast-body").innerHTML = error.response.data;
        const toast = new bootstrap.Toast(toastElement);
        toast.show();
      });
  }
}

function validate() {
  const forms = document.querySelectorAll(".needs-validation");
  let formValid = true;

  Array.from(forms).forEach((form) => {
    if (!form.checkValidity()) {
      formValid = false;
    }
    form.classList.add("was-validated");
  });

  return formValid;
}
