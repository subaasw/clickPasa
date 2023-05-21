function formValidation(event) {
  event.preventDefault();
  let userNameElement = document.getElementById("username");
  let passwordElement = document.getElementById("password");

  let username = userNameElement.value;
  let password = passwordElement.value;

  if (!username) {
    userNameElement.setAttribute("style", "border: 1px solid red;");
    document.getElementById("error-username").innerHTML =
      "Username is Required";
  } else {
    userNameElement.setAttribute("style", "border: 1px solid gray;");
    document.getElementById("error-username").innerHTML = "";
  }
  if (!password || password.length < 8) {
    passwordElement.setAttribute("style", "border: 1px solid red;");
    document.getElementById("error-passwd").innerHTML = !password
      ? "Password is Required"
      : password.length < 8 && "Password must be 8 characters";
  } else {
    passwordElement.setAttribute("style", "border: 1px solid gray;");
    document.getElementById("error-passwd").innerHTML = "";
  }
}

function registrationForm(event) {
  event.preventDefault();
  function getElementById(id) {
    return document.getElementById(id);
  }
  let fullName = getElementById("name");
  let userName = getElementById("username");
  let email = getElementById("email");
  let phoneNumber = getElementById("phoneNumber");
  let password = getElementById("password");
  let confirmPassword = getElementById("confirm-pwd");

  if (password.value !== confirmPassword) {
    getElementById("error-pwd").innerHTML = "Password does not matched";
  } else {
    getElementById("error-pwd").innerHTML = "";
  }

  if (!fullName.value) {
    fullName.setAttribute("style", "border:1px solid red");
  } else {
    fullName.setAttribute("style", "border:1px solid gray");
  }
  if (!userName.value) {
    userName.setAttribute("style", "border:1px solid red");
  } else {
    userName.setAttribute("style", "border:1px solid gray");
  }
  if (!email.value) {
    email.setAttribute("style", "border:1px solid red");
  } else {
    email.setAttribute("style", "border:1px solid gray");
  }
  if (!phoneNumber.value) {
    phoneNumber.setAttribute("style", "border:1px solid red");
  } else {
    phoneNumber.setAttribute("style", "border:1px solid gray");
  }
  if (!password.value) {
    password.setAttribute("style", "border:1px solid red");
  } else {
    password.setAttribute("style", "border:1px solid gray");
  }
  if (!confirmPassword.value) {
    confirmPassword.setAttribute("style", "border:1px solid red");
  } else {
    confirmPassword.setAttribute("style", "border:1px solid gray");
  }
}
