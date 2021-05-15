// exercicio.js

		////////////////////////////////////////////////////
		// tirei o dw ( document.write ) - nunca foi usado ate agora
		function cl (...texto) {console.log (...texto)};
		function c2 (texto) {console.log (texto, ' = ', this[texto])};
		////////////////////////////////////////////////////
		

		/*
		aula17 - closures.js

		===========================================================
		==        arquivo de trabalho ( chama este JS )			 ==
		==														 ==
?		file:///C:/rsr/lab/js-prog-a-bordo/index.html
		===========================================================

		aula atual ( com segundo corrente )
		https://www.youtube.com/watch?v=MR8IyuhrDK8

		Playlist completa.
		https://www.youtube.com/watch?v=vrSEt5J4q2Y&list=PLbA-jMwv0cuWbas947cygrzfzHIc7esmp
		*/


	/* resumo do arquivo

	1) 
	

		lembrete:
		
		parentheses or "round brackets" ( )
		"square brackets" or "box brackets" [ ]
		braces or "curly brackets" { }
		"angle brackets" < >	

		"tag": "!",
		"tag": "?",
		"tag": "//",
		"tag": "todo",
		"tag": "*",

		
		codigo muito usado:

		var objUsuario = { 
			nome: 'Rafael', 
			sobrenome: 'Reis', 
			pais: 'BR',
			telefone: "(21) 9-4444-0001",
			identidade: 'IFP',
			idade: 45
		};
		
		var fSoma = function (a, b) {
				return a+b;
			};

		 /* sobre o codigo acima:
		 bla-bla-bla-bla-bla-bla


	*/

	
	/* 
		closure
		é um recurso que usa lexical scope para 
		que uma function tenha acesso às variáveis 
		da function superior ( na callstack ).
		
		usando closure, uma function pode memorizar
		o escopo de onde ela foi chamada.
		
		
		escopo lexico
			o valor da váriável permanece o delcarado 
			durante todo o tenpo de vida da variavel.
						
			costuma estar bem acessivel para sabermos o seu valor
			lendo o codigo.
		

* //1
		xxxxxxxxxxxxxxxx
			yyyyyyyyyyyyyyyyyyyyyyyy
			yyyyyyyyyyyyyyyyyyyyyyyy
			yyyyyyyyyyyyyyyyyyyyyyyy
			yyyyyyyyyyyyyyyyyyyyyyyy
	 */
	 
	/* ******************************************************************* */
//1

	function imprimeNome(){
		let nome = 'Rafael';	
		// retorna uma function com retorno.
		return function(){
			return nome;
		};
	};
	imprimeNome();

/* 		
		 */
		 
	


		




	 /* prox aula  closures
	 https://www.youtube.com/watch?v=MR8IyuhrDK8
	 
	 */
	 



/////////////////////////////////
	
	// maximo é "exclusive".
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}