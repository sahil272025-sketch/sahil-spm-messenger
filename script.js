function login() {
  document.getElementById("login").style.display = "none";
  document.getElementById("app").style.display = "flex";
}

function openChat(name) {
  document.getElementById("chatName").innerText = name;
  document.getElementById("messages").innerHTML = `
    <p>${name}: Hello 👋</p>
    <p>You: Hi bro 🔥</p>
  `;
}

function sendMsg() {
  let msg = document.getElementById("msg").value;
  let box = document.getElementById("messages");

  box.innerHTML += `<p>You: ${msg}</p>`;
  document.getElementById("msg").value = "";
}
