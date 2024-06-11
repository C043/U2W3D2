const form = document.getElementsByTagName("form")[0];

const showUser = () => {
  const displayUser = document.getElementById("user-display");
  displayUser.classList.add("opacity-0");

  const user = localStorage.getItem("Username");
  if (user) {
    displayUser.classList.add("opacity-100");
    displayUser.innerText = user;
  }
};

form.onsubmit = (ev) => {
  ev.preventDefault();
  const userNameValue = document.getElementById("user-name").value;
  localStorage.setItem("Username", userNameValue);
  const displayUser = document.getElementById("user-display");
  displayUser.classList.remove("opacity-0");
  displayUser.classList.add("opacity-100");
  displayUser.innerHTML = userNameValue;
  form.reset();
};

const deleteBtn = document.getElementById("sign-out");

deleteBtn.onclick = () => {
  localStorage.removeItem("Username");
  const displayUser = document.getElementById("user-display");
  displayUser.classList.remove("opacity-100");

  displayUser.classList.add("opacity-0");
  displayUser.innerText = "Username";
};

window.addEventListener("DOMContentLoaded", showUser);
