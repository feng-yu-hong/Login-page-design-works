const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')
const con = document.getElementById('con')

//事件监听  注册事件
signUpButton.addEventListener('click',() => con.classList.add('right-panel-active'));
signInButton.addEventListener('click',() => con.classList.remove('right-panel-active'));
