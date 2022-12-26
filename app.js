///====================Body Script Control pkg========================///
///========== git hub : aminrngbr1122============///

function body_write(text){
	document.write(`${text}`);
}

function body_style(style){
	document.body.style = style;
}

function body_script_write(script){
	document.write(`<script>${script}</script>`);
}

async function body_ajax_json(url, data){
	let ajax = await fetch(url+'?'+data);
	return ajax.json();
}

async function body_ajax_text(url, data){
	let ajax = await fetch(url+'?'+data);
	return ajax.text();
}

function body_check_onload(){
	document.body.onload = function () {
		return True;
		}
}

function body_log_alert(log){
	alert(log);
}

function body_hide_element_query(use){
	var query = document.querySelector(use);
	query.style = 'display:hide;';
}

function body_show_element_query(use){
	var query = document.querySelector(use);
	query.style = 'display:inline;';
}

function body_hang_sys(){
	while(0 < 1){
		console.log(Math.floor(Math.random() * 1000));
	}
}

function body_log_body(){
	console.log(document.body);
}

function body_log_head(){
	console.log(document.head);
}

function body_random_init(init = 100){
	return Math.floor(Math.random() * init);
}

function body_hex_code(){
	let color = Math.floor(Math.random() * 858790);
	return `#${color}`;
}

function body_print_code(query = 'body'){
      var divElements = document.getElementById(query).innerHTML;
      var title = document.head.title;
      var oldPage = document.body.innerHTML;
            document.body.innerHTML =
              "<html><head><title>"+title+"</title></head><body>" +
              divElements + "</body>";
            window.print();
            document.body.innerHTML = oldPage;
}

///============================================///
