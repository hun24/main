// 관리자 계정 정보 (예시)
const ADMIN_ID = "admin";
const ADMIN_PW = "admin123";

let userInfo = null;

function showLogin() {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("main-content").innerHTML = `
        <h2>로그인</h2>
        <div>
            <label>아이디</label>
            <input type="text" id="userid"><br>
            <label>비밀번호</label>
            <input type="password" id="userpw"><br>
            <button onclick="login()">로그인</button>
        </div>
        <p id="login-error" style="color:red"></p>
    `;
}

function login() {
    const id = document.getElementById('userid').value;
    const pw = document.getElementById('userpw').value;
    if(id === ADMIN_ID && pw === ADMIN_PW) {
        userInfo = {id: id, isAdmin: true};
    } else if(id && pw) {
        userInfo = {id: id, isAdmin: false};
    } else {
        document.getElementById('login-error').innerText = "아이디와 비밀번호를 입력해 주세요.";
        return;
    }
    showNavbar();
    showHome();
}

function logout() {
    userInfo = null;
    showLogin();
}

function showNavbar() {
    document.getElementById("navbar").style.display = "block";
    document.getElementById("nav-admin").style.display = userInfo && userInfo.isAdmin ? "inline" : "none";
}
function showHome() {
    document.getElementById("main-content").innerHTML = `
        <h2>환영합니다, ${userInfo.id}님!</h2>
        <p>위의 메뉴를 이용해 주사위 게임이나 관리자 페이지(관리자 계정만 접근 가능)를 이용하실 수 있습니다.</p>
    `;
}
function showDice() {
    let diceValues = [1,1,1];
    function renderDice() {
        document.getElementById("main-content").innerHTML = `
            <h2>주사위 3개 굴리기</h2>
            <div id="dice-area">
                <span class="dice">${diceValues[0]}</span>
                <span class="dice">${diceValues[1]}</span>
                <span class="dice">${diceValues[2]}</span>
            </div>
            <button id="roll-btn">주사위 굴리기</button>
        `;
        document.getElementById("roll-btn").onclick = () => {
            diceValues = [rand(), rand(), rand()];
            renderDice();
        };
    }
    renderDice();
}
function rand() {
    return Math.floor(Math.random()*6) + 1;
}
function showAdmin() {
    if(userInfo && userInfo.isAdmin) {
        document.getElementById("main-content").innerHTML = `
            <h2>관리자 화면</h2>
            <p>관리자 전용 기능을 이곳에 추가하실 수 있습니다.</p>
            <p>관리자: ${userInfo.id}</p>
        `;
    } else {
        showHome();
    }
}

// 네비게이션 바 이벤트
window.onload = function () {
    showLogin();

    document.getElementById("nav-home").onclick = function(e){e.preventDefault(); showHome();};
    document.getElementById("nav-dice").onclick = function(e){e.preventDefault(); showDice();};
    document.getElementById("nav-admin").onclick = function(e){e.preventDefault(); showAdmin();};
    document.getElementById("nav-logout").onclick = function(e){e.preventDefault(); logout();};
};
