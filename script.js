function login() {
    const username = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'pass') {
        alert('Login successful');
    } else {
        alert('Invalid username or password');
    }
}
