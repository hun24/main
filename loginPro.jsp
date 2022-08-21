<% //1. 한글처리 및 변수가져오기
request.setCharacterEncoding("UTF-8");
String id = request.getParameter("id");
String pw = request.getParameter("pw");

//2. MemberDAO객체생성 -> idcheck(id, pw) 메서드생성
MemberDAO mdao = new MemberDAO();
int result = mdao.idCheck(id, pw);

//3.데이터처리
if(result == 1){
	//아이값을 세션객체에 저장
	session.setAttribute("id", id); //두번째파라미터에서 업캐스팅발생 object->String
	System.out.println("아디일치비번일치->로그인성공");
	response.sendRedirect("../main/main.jsp");
}else if(result == 0){
	System.out.println("아디일치,비번불일치->로그인실패");
	%>
	<script type="text/javascript">
		alert("비밀번호가 일치하지 않습니다");
		history.back();
	</script>
	<%
}else{
	System.out.println("아디불일치,비번불일치->로그인실패");	
	%>
	<script type="text/javascript">
		alert("존재하지않는 아이디입니다");
		history.back();
	</script>
	<%
}
%>
