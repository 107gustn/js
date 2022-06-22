function test(val) {
	alert(val)
}
function chk() {
	let pwd1 = document.getElementById('pwd1') /* 현재페이지로부터. 얻어옴. 태그에 대해서. id값 */
	let pwd2 = document.getElementById('pwd2')
	console.log(pwd1.value) /* 입력한 값을 얻어옴 */
	console.log(pwd2.value)
	if (pwd1.value == pwd2.value) {
		alert('비밀번호가 일치 합니다')
		var msg = '<b>안</b><i>녕하</i><sub>세요</sub>'
		document.getElementById('h3').innerHTML = msg /* .innerHTML: 해당id에 HTML 형식 문법을 넣어줌 */
		document.getElementById('pwdchk').innerHTML = '<b style="color:red;">일치합니다</b>'
	} else {
		alert('비밀번호 확인하세요')
		pwd1.value = "" /* 입력값 초기화 시킴 */
		pwd2.value = ""
		pwd1.focus() /* pwd1으로 커서를 올려줌 */
	}
}