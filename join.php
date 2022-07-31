<!DOCTYPE html>
<?php session_start(); ?>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Join</title>
        function checkid(){
	        var userid = document.getElementById("uid").value;
	        if(userid)  //userid로 받음
	        {
		        url = "check.php?userid="+userid;
		        window.open(url,"chkid","width=400,height=200");
	        } else {
		        alert("아이디를 입력하세요.");
	        }
        }
    </head>
    <body>
        <h2>회원가입</h2>
        <?php if(!isset($_SESSION['user_id']) || !isset($_SESSION['user_name'])) { ?>
        <form method="post" action="join_ok.php" autocomplete="off">
            <p>이름: <input type="text" name="join_name" required></p>
            <p>아이디: <input type="text" name="join_id" id="uid" required></p>
            <input type="hidden" name="decide_id" id="decide_id">
            <p><span id="decide" style='color:red;'>ID 중복 여부를 확인해주세요.</span>
            <input type="button" id="check_button" value="ID 중복 검사" onclick="checkid();"></p>
            <p>비밀번호: <input type="password" name="join_pw" required></p>
            <p>비밀번호 확인: <input type="password" name="join_pw2" required></p>
            <p><input type="submit" id="join_button" value="가입하기" disabled=true></p>
        </form>
        <small><a href="login.php">이미 회원이신가요?</a><small>
        <?php } else {
                $user_id = $_SESSION['user_id'];
                $user_name = $_SESSION['user_name'];
                echo "<p>$user_name($user_id)님은 이미 로그인되어 있습니다.";
                echo "<p><button onclick=\"window.location.href='main.php'\">메인으로</button> <button onclick=\"window.location.href='logout.php'\">로그아웃</button></p>";
        } ?>
    </body>
</html>
