let result = document.getElementById("result");
let content = "";
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  let value = localStorage.getItem(key);
  content += key + ": " + value + "<br>";
}
result.innerHTML = content;
