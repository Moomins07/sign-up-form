const pwd = document.getElementById("password");
const confirmPwd = document.getElementById("confirm_password");

function onChange() {
  if (confirmPwd.value === pwd.value) {
    // confirmPwd.checkValidity();
    pwd.style.borderColor = "green";
    confirmPwd.style.borderColor = "green";
    confirmPwd.setCustomValidity("Passwords match!");
  } else {
    confirmPwd.setCustomValidity("Passwords do not match!");
    confirmPwd.reportValidity();
    confirmPwd.style.borderColor = "red";
    pwd.style.borderColor = "red";
  }
}

// document.querySelectorAll(".password").forEach((item) => {
//   item.addEventListener("input", (event) => {
//     onChange();
//   });
// });
