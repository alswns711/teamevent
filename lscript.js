function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

function showLogin() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username && password) {
        if (localStorage.getItem(username)) {
            alert('Username already exists!');
        } else {
            localStorage.setItem(username, password);
            alert('Signup successful! You can now log in.');
            showLogin();
        }
    } else {
        alert('Please fill in all fields.');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username && password) {
        const storedPassword = localStorage.getItem(username);
        if (storedPassword && storedPassword === password) {
            alert('Login successful!');
            // 로그인한 사용자 ID를 localStorage에 저장
            localStorage.setItem('loggedInUser', username);
            // main.html로 이동
            window.location.href = 'main.html';
        } else {
            alert('Invalid username or password.');
        }
    } else {
        alert('Please fill in all fields.');
    }
}
