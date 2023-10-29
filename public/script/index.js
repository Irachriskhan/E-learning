function login() {
  let username, password;
  username = document.getElementById("user").value;

  password = document.getElementById("pass").value;
  console.log(password);

  if (username.toString() === "admin" && password.toString() == "1234") {
    window.location.href = "../resources/dashboard.html";
  } else if (
    username.toString() !== "admin" &&
    password.toString() !== "1234"
  ) {
    alert("Invalid Username and Password");
  } else if (password.toString() !== "1234") alert("Invalid Password");
  else alert("Invalid Username");
}

function logout() {
  window.location.href = "../resources/login.html";
}

let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  document.querySelector("#submit").value = "Submiting...";
  let data = new FormData(form);

  fetch(
    "https://script.google.com/macros/s/AKfycby2FIdqLtwy9Xa8DChO_stKr0qzAt2HeNCS_u6I8oWQwDRQmr0aaCNoAPgH1B4X-kMLfQ/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      document.querySelector("#msg").innerHTML = data;
      document.querySelector("#submit").value = "Submit";
      window.open("index.html", "_blank");
    });
});
// const submit = document.querySelector("#submit");
// let x = document.querySelector(".form").elements.length;
// console.log(x);
// console.log("Hello hello");
// let form = document.querySelector(".form");

// submit.addEventListener("click", () => {
//   console.log("Hellooooo");
//   setTimeout(() => {
//     for (let i = 0; i < x; i++) {
//       console.log(form.elements[i].value);
//     }
//   }, 1000);
//   // preventDefault();
// });

// Date.prototype.timeNow = function () {
//   return (
//     (this.getHours() < 10 ? "0" : "") +
//     (this.getHours() > 12 ? this.getHours() - 12 : this.getHours()) +
//     ":" +
//     (this.getMinutes() < 10 ? "0" : "") +
//     this.getMinutes() +
//     ":" +
//     (this.getSeconds() < 10 ? "0" : "") +
//     this.getSeconds() +
//     (this.getHours() > 12 ? "PM" : "AM")
//   );
// };
