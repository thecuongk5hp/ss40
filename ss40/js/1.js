document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('userInfoForm');
  const displayInfo = document.getElementById('displayInfo');
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (userInfo) {
      displayInfo.innerHTML = `Tên: ${userInfo.name} Tuổi: ${userInfo.age} Email: ${userInfo.email}`;
  }
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const email = document.getElementById('email').value;
      localStorage.setItem(
          'userInfo',
          JSON.stringify({name: name, age: age, email: email})
      );
      displayInfo.innerHTML = `Tên: ${name} Tuổi: ${age} Email: ${email}`;
  });
});