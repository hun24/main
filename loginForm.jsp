<body>
<div id="wrap">
<!-- 헤더들어가는 곳 -->
<jsp:include page="../inc/top.jsp"></jsp:include>
<!-- 헤더들어가는 곳 -->

<!-- 본문들어가는 곳 -->
<!-- 본문메인이미지 -->
<div id="sub_img_member"></div>
<!-- 본문메인이미지 -->
<!-- 왼쪽메뉴 -->
<nav id="sub_menu">
<ul>
<li><a href="#">Join us</a></li>
<li><a href="#">Privacy policy</a></li>
</ul>
</nav>
<!-- 왼쪽메뉴 -->
<!-- 본문내용 -->
<article>
<h1>로그인</h1>
<form action="loginPro.jsp" id="join" method="post">
	<fieldset>
		<legend>로그인정보</legend>
		<label>아이디</label> <input type="text" name="id"><br>
		<label>비밀번호</label> <input type="password" name="pw"><br>
	</fieldset>
	<div class="clear"></div>
	<div id="buttons">
	<input type="submit" value="Submit" class="submit">
	<input type="reset" value="Cancel" class="cancel">
	</div>
</form>
</article>
<!-- 본문내용 -->
<!-- 본문들어가는 곳 -->

<div class="clear"></div>
<!-- 푸터들어가는 곳 -->
<jsp:include page="../inc/bottom.jsp"></jsp:include>
<!-- 푸터들어가는 곳 -->
</div>
</body>
