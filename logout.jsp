<%
session.invalidate();
System.out.println("로그아웃성공");
%>
<script type="text/javascript">
	alert("정상적으로 로그아웃 되었습니다");
	location.href="../main/main.jsp";
</script>
