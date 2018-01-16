function SwitchTab(my_tab, my_content) {
	document.getElementById('content_1').style.display = 'none';
	document.getElementById('content_2').style.display = 'none';
	document.getElementById(my_content).style.display = 'block';  
	document.getElementById('tb_1').className = '';
	document.getElementById('tb_2').className = '';
	document.getElementById(my_tab).className = 'active';
}