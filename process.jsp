<%
	String id = request.getParameter("user_id");
	String pw = request.getParameter("user_pw");
	
	String new_id = request.getParameter("new_id");
	String new_pw1 = request.getParameter("new_pw1");
	String new_pw2 = request.getParameter("new_pw2");
	String user_name = request.getParameter("user_name");
	String user_mail = request.getParameter("user_mail");
	String user_tel = request.getParameter("user_tel");
%>
<p> 가입이 완료되었습니다! </p>
<p> [입력하신 내용] <br>
	아이디 : <%= id %> <br>
	비밀번호 : <%= pw %> <br>
	새로 가입한 아이디 : <%= new_id %> <br>
	새로 가입한 비밀번호 : <%= new_pw1 %> <br>
	새로 가입한 비밀번호 확인 : <%= new_pw2 %> <br>
	새로 가입한 회원명 : <%= user_name %> <br>
	새로 가입한 메일주소 : <%= user_mail%> <br>
	새로 가입한 전화번호 : <%= user_tel %> <br>
