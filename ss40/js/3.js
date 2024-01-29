let playerId = document.getElementById("playerId");
let deletePlayer = document.getElementById("deletePlayer");
let playerList = document.getElementById("playerList");
function deletePlayerFromList() {
  let id = playerId.value;
  if (id) {
    if (localStorage.getItem(id)) {
      localStorage.removeItem(id);
      let li = document.getElementById(id);
      playerList.removeChild(li);
      playerId.value = "";
    } else {
      alert("Không có cầu thủ nào có id này!");
    }
  } else {
    alert("Vui lòng nhập id cầu thủ!");
  }
}
function showSavedPlayers() {
  let keys = Object.keys(localStorage);
  for (let key of keys) {
    let name = localStorage.getItem(key);
    let li = document.createElement("li");
    li.textContent = name;
    li.id = key;
    playerList.appendChild(li);
  }
}
deletePlayer.addEventListener("click", deletePlayerFromList);
window.onload = showSavedPlayers;
