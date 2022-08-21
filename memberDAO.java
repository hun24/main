public int idCheck(String id, String pw){
	int result = -1;

	try {
		//1.DB여결
		con = getCon();
		//2.SQL & PSTMT
		sql = "select pw from fun_member where id=?";
		pstmt = con.prepareStatement(sql);
		pstmt.setString(1, id);
		//3.실행 -> rs -> 데이터처리
		rs = pstmt.executeQuery();
		if(rs.next()){
			if(pw.equals(rs.getString("pw"))){
				result = 1;
			}else{
				result = 0;
			}
		}			
	} catch (Exception e) {
		e.printStackTrace();
	} finally { //4.자원해제
		closeDB();
	}
	return result;
}//idCheck메서드 닫음
