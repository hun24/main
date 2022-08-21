<% //화면상단에 위치하는 메뉴바 처리페이지
String id = (String)session.getAttribute("id"); //다운캐스팅 Object -> String
%>
<header>
<div id="login">
	<%if(id == null){
		%>
		<div id="login"><a href="../member/loginForm.jsp">로그인</a> | <a href="../member/joinForm.jsp">회원가입</a></div>
		<%
	}else if(id != null){
		%>
		<div id="login"><%=id %>님 환영합니다 | <a href="../member/logout.jsp">로그아웃</a></div>
	<%
	}
	%>
</div>
<div class="clear"></div>
<!-- 로고들어가는 곳 -->
<div id="logo"><img src="../images/logo.gif" width="265" height="62" alt="Fun Web"></div>
<!-- 로고들어가는 곳 -->
<nav id="top_menu">
<ul>
	<li><a href="../index.jsp">홈</a></li>
	<li><a href="../company/welcome.html">회사소개</a></li>
	<li><a href="#">솔루션</a></li>
	<li><a href="../center/notice.jsp">고객센터</a></li>
	<li><a href="#">무엇이든 물어보세요</a></li>
</ul>
</nav>
</header>
