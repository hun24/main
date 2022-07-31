const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);
    console.log(event);
}
loginForm.addEventListener("submit", onLoginSubmit);
