const form = document.querySelector("#userForm");
const userList = document.querySelector("#userList");

function loadUsers() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  userList.innerHTML = users.map(u => `<li>${u.name} (${u.email})</li>`).join("");
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  users.push({ name, email });
  localStorage.setItem("users", JSON.stringify(users));

  form.reset();
  loadUsers();
});

loadUsers();
