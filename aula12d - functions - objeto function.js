// exercicio.js

		////////////////////////////////////////////////////
		// direi o dw ( document.write ) - nunca foi usado ate agora
		function cl (...texto) {console.log (...texto)};
		////////////////////////////////////////////////////

		/*
		aula12d - functions - objeto function.js

		arquivo de trabalho ( chama este JS )
		file:///C:/rsr/lab/js-prog-a-bordo/index.html

		aula atual ( com segundo corrente )
		https://youtu.be/sb_XEtwVsG0?t=985
		
		Playlist completa.
		https://www.youtube.com/watch?v=vrSEt5J4q2Y&list=PLbA-jMwv0cuWbas947cygrzfzHIc7esmp
		*/


	/*
	a funcao é um objeto. e pode ser atribuida a uma variavel.
	
	https://developer.mozilla.org/en-US/docs/Glossary/Function
	
	A function is a code snippet ... or a variable that refers to the function. 
    ... A function in JavaScript is also an object.	
	*/

	var fSoma = function soma (a, b) {return a + b;}
	
	cl ( 'fSoma 2 + 3 = ', fSoma(2,3) );
	/* a chamada abaixo dará erro, porque a funcao foi atribuida à fSoma. 
	   O nome soma não tem nenhuma influencia nesta implementacao.
	cl ( 'soma 2 + 3 = ', soma(2,3) );
	*/
	
	//outros exemplos
	/* neste caso, fSubtrai funciona pq é o nome da variavel.
	O nome da funcao (à direita do sinal de igual) não afetou 
	e não deu erro.
	*/
	var fSubtrai = function fSubtrai (a, b) {return a - b;}
	cl ( 'fSubtrai 5 - 3 = ', fSubtrai(5,3) );
	
	/* neste caso, fMultiplica recebe uma função sem nome.
	funciona da mesma forma que nas linhas acima.
	*/
	var fMultiplicaA = function (a, b) {return a * b;}
	cl ( 'fMultiplicaA 5 * 3 = ', fMultiplicaA(5,3) );
	
	fMultiplicaB = fMultiplicaA;
	
	//imprimo a definicao das variaveis.
	cl('fSoma', fSoma);
	cl('fSubtrai', fSubtrai);
	cl('fMultiplicaA', fMultiplicaA);
	cl('fMultiplicaB', fMultiplicaB);
	
	/* curiosamente, apesar de o nome da vartiável 
	ser o unico que serve para fazer a chamada, 
	justamente dentro do conteudo da funcao, 
	a unica informacao que vale é o nome que lhe e atribuido.
	(propriedade .name ).
	No exemplo acima, fMultiplicaA recebe uma function sem nome.
	Então o .name da função é fMultiplicaA.
	quanto atribuo à variável fMultiplicaB, o .name continua fMultiplicaA.
	E na definição, o nome continua vazio.
	ou seja: seta o .name, mas não altera a definição.
	aparentemente ( testes adiante ) esta atribuição é um: 
	fMultiplicaB.copia(fMultiplicaA); 
	Então, alterar fMultiplicaA depois de artribuir a fMultiplicaB, não altera fMultiplicaB
	
	a definicao function no modelo clássimdo - sem atribuicao de variavel - deve ser gancho para o tal "this".
	algo como function f () {}
	deve ser: this.f = function () {}
	só no futuro para saber.
	*/
	
	/* uma funcao sem nome é uma funcao anonima.
	quando eu defino uma funcao sem nome ( posso usar apenas o nome da variavel, 
	ela é uma função anonima. A funcao autoexecutavel pode ser anonima. 
	nas versoes antigas do chrome isso dificultava a depuracao, pois se eu tivesse
	X funcoes anonimas, o chrome diria apenas que o erro foi na funcao "anonima".
	Hoje, isso é diferente. Possivelmente sobre aquela atribuição de nome que eu observei acima.
	
	aqui abaixo, eu defino um erro para fMultiplicaA. 
	Isto não altera fMultiplicaB .
	Curioso que:
	fMultiplicaB.name = "fMultiplicaA"
	fMultiplicaA.name = "fMultiplicaA"
	mas suas definições são diferentes.
	
	fMultiplicaB executa correto.
	fMultiplicaA dá erro.
	
	*/
	
	// alteranco a definicao de fMultiplicaA ara dar erro - nao existe b2.
	fMultiplicaA = function (a, b) {return a * b2;}
	cl ( 'fMultiplicaB 5 * 3 = ', fMultiplicaB(5,3) );
	cl ( 'fMultiplicaA', fMultiplicaA.name );
	cl ( 'fMultiplicaB', fMultiplicaB.name );
	// a lnha abaixo dá erro.
	//cl ( 'fMultiplicaA 5 * 3 = ', fMultiplicaA(5,3) );
	
	/* testando iife anonima */
	
	/* aqui estou com dioficuldade de definir quem pe funcao anonima qusndo usar nomes, qual az .name urilizada, como referencia-,as..
	estou perdido de sonos.
	21:562 =- 3m de zolpidem.
	
	https://developer.mozilla.org/en-US/docs/Glossary/IIFE
	
	
	*/
	
	
	var fAutoExec = 'a'
	cl ('fAutoExec', fAutoExec);
	
	var fAutoExec = (function (texto) {
		cl (texto);
		//return 1;
	}('funcao iife - anonima'));
	//é comum 
	
	cl ('fAutoExec', fAutoExec);
	
	/*  o conteudo da function só vale durante sua execução.
	ela não perpetua. A variável que recebe a function vira 
	undefined depois da execução 
	*/
	

// prox aula: precedencia(nao tem no video - eu que parei para entender). depois, callback.


/////////////////////////////////
	
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}