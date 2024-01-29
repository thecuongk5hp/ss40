let playerName = document.getElementById("playerName");
let addPlayer = document.getElementById("addPlayer");
let playerList = document.getElementById("playerList");
function addPlayerToList() {
  let name = playerName.value;
  if (name) {
    let id = Math.floor(Math.random() * 1000000);
    localStorage.setItem(id, name);
    let li = document.createElement("li");
    li.textContent = name;
    playerList.appendChild(li);
    playerName.value = "";
  } else {
    alert("Vui lòng nhập tên cầu thủ!");
  }
}
function showSavedPlayers() {
  let keys = Object.keys(localStorage);
  for (let key of keys) {
    let name = localStorage.getItem(key);
    let li = document.createElement("li");
    li.textContent = name;
    playerList.appendChild(li);
  }
}
addPlayer.addEventListener("click", addPlayerToList);
window.onload = showSavedPlayers;
