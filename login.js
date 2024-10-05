let submit = document.getElementById("submit");
let password = document.getElementById("password");
let email = document.getElementById("email");
let name = document.getElementById("name");
let showmessage = document.getElementById("showmessage");
let gender = document.getElementById("gender");

submit.onclick = function () {
  if (
    name.value.length > 0 &&
    email.value.length > 0 &&
    password.value.length > 8
  ) {
    if (gender.value == "man") {
      showmessage.innerText = "you are allowed to enter sir";
      showmessage.style.color = "green";
      showmessage.style.backgroundColor = "white";
    } else {
      showmessage.innerText = "welcome madam";
      showmessage.style.innerText = "green";
      showmessage.style.backgroundColor = "white";
    }
  } else {
    showmessage.innerText = "wrong infos sorry";
    showmessage.style.color = "red";
  }
};
