
var nome = document.getElementById("n").value; 
var a1 = document.getElementById("a1").value;  
var a2 = document.getElementById("a2").value; 
var media = 0;

//funções

function submit() {

	var nome = document.getElementById("nome").value; 
	var a1 = document.getElementById("a1").value;  
	var a2 = document.getElementById("a2").value; 


	var soma = parseInt(a1) + parseInt(a2);

	var media = soma / 2;

  	window.alert('nome = ' + nome);
	window.alert('nota 1 = ' + a1);
	window.alert('nota 2 = ' + a2);
	window.alert('media = ' + media);








}
function certo() {
	var nome = prompt("Informe o nome do aluno")
	window.alert("Nome encontrado...")
	var n1 = prompt ("Informe a primeira nota")
	window.alert("nota 1 registrada como " + n1)
	var n2 = prompt ("Informe a segunda nota")
	window.alert("nota 2 registrada como " + n2)

	var media = n1 + n2;

	window.alert("A media é" + media)
	if (media >= 7) {
		alert('passo')
	}else{
		alert('passo não')
	}



}