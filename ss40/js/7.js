function addUser() {
    const userName = document.getElementById('userName').value;
    if(userName) {
        localStorage.setItem('userName', userName);
        displayUser();
    }
}
function removeUser() {
    localStorage.removeItem('userName');
    displayUser();
}
function displayUser() {
    const storedName = localStorage.getItem('userName');  
    const displayElement = document.getElementById('displayUserName');   
    if(storedName) {
        displayElement.innerHTML = `Người dùng tên: ${storedName}`;
    } else {
        displayElement.innerHTML = '';
        document.getElementById('userName').value = '';
    }
}
displayUser();