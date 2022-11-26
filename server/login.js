const username = document.getElementById("username").value;
const password = document.getElementById("passowrd").value;
const message = document.getElementById("message");

function login() {
  if (username === "imran" && password === "soen343") {
    document.getElementById("message").innerHTML = "Welcome back Imran !!!";
    localStorage.setItem("LoggedIn", 1);
  } else if (username === "employer" && password === "soen343") {
    document.getElementById("message").innerHTML = "Welcome back Employer !!!";
    localStorage.setItem("LoggedIn", 2);
  } else if (username === "" || password === "") {
    document.getElementById("message").innerHTML =
      "Login unsucesfull. Please try again";
  } else {
    document.getElementById("message").innerHTML = "Wrong Credentials";
  }
}

function logout() {
  document.getElementById("message").innerHTML = "Logged Out";
  localStorage.setItem("LoggedIn", 0);
}
