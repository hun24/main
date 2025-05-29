// 회원 정보는 LocalStorage에 저장합니다.
// 예시: { members: { "user1": "pass1", "user2": "pass2", ... }, admin: {id, pw} }

const ADMIN_ID = "admin";
const ADMIN_PW = "admin123";

// 회원 정보를 localStorage에서 읽고 필요한 값이 없으면 관리자 계정만 추가
if (!localStorage.getItem("members")) {
    const initMembers = {};
    initMembers[ADMIN_ID] = ADMIN_PW;
    localStorage.setItem("members", JSON.stringify(initMembers));
}

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
            <button onclick="showJoin()">회원가입</button>
        </div>
        <p id="login-error" style="color:red"></p>
    `;
}

function showJoin() {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("main-content").innerHTML = `
        <h2>회원가입</h2>
        <div>
            <label>아이디</label>
            <input type="text" id="joinid"><br>
            <label>비밀번호</label>
            <input type="password" id="joinpw"><br>
            <label>비밀번호 확인</label>
            <input type="password" id="joinpw2"><br>
            <button onclick="join()">가입하기</button>
            <button onclick="showLogin()">뒤로가기</button>
        </div>
        <p id="join-error" style="color:red"></p>
    `;
}

function login() {
    const id = document.getElementById('userid').value.trim();
    const pw = document.getElementById('userpw').value;
    const members = JSON.parse(localStorage.getItem("members"));

    if (!id || !pw) {
        document.getElementById('login-error').innerText = "아이디와 비밀번호를 모두 입력해 주세요.";
        return;
    }
    if (!members[id]) {
        document.getElementById('login-error').innerText = "존재하지 않는 아이디입니다.";
        return;
    }
    if (members[id] !== pw) {
        document.getElementById('login-error').innerText = "비밀번호가 올바르지 않습니다.";
        return;
    }
    userInfo = {id: id, isAdmin: id === ADMIN_ID};
    showNavbar();
    showHome();
}

function join() {
    const id = document.getElementById('joinid').value.trim();
    const pw = document.getElementById('joinpw').value;
    const pw2 = document.getElementById('joinpw2').value;
    const members = JSON.parse(localStorage.getItem("members"));

    if (!id || !pw || !pw2) {
        document.getElementById('join-error').innerText = "모든 항목을 입력해 주세요.";
        return;
    }
    if (pw !== pw2) {
        document.getElementById('join-error').innerText = "비밀번호가 일치하지 않습니다.";
        return;
    }
    if (members[id]) {
        document.getElementById('join-error').innerText = "이미 존재하는 아이디입니다.";
        return;
    }
    members[id] = pw;
    localStorage.setItem("members", JSON.stringify(members));
    document.getElementById('join-error').style.color = "blue";
    document.getElementById('join-error').innerText = "회원가입이 완료되었습니다.";
    setTimeout(showLogin, 1200);
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
