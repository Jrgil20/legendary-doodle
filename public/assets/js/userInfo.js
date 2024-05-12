fetch('./assets/data/users.json')
.then(response => response.json())
.then(data => {
const userInfoElement = document.getElementById('userInfo');
userInfoElement.textContent = `Hola ${data.user}, su saldo es ${data.saldo}`;
})
.catch(error => console.error('Error:', error));
