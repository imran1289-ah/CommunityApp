const username = document.getElementById("username").value;
const password = document.getElementById("passowrd").value;
const message = document.getElementById("message");

function login() {
  if (username == "imran" && password == "soen343") {
    document.getElementById("message").value = "Welcome back Imran !!!";
  } else if ((username = "employer" && password == "soen343")) {
    document.getElementById("message").value = "Welcome back Employer !!!";
    localStorage.setItem("employerLoggedIn", 1);
  } else if (username == "" || password == "") {
    document.getElementById("message").value =
      "Login unsucesfull. Please try again";
  } else {
    document.getElementById("message").value = "Wrong Credentials";
  }
}
