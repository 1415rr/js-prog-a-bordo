// exercicio.js

		////////////////////////////////////////////////////
		// tirei o dw ( document.write ) - nunca foi usado ate agora
		function cl (...texto) {console.log (...texto)};
		function c2 (texto) {console.log (texto, ' = ', this[texto])};
		////////////////////////////////////////////////////
		

		/*
		aula18 - constantes.js

		===========================================================
		==        arquivo de trabalho ( chama este JS )			 ==
		==														 ==
?		file:///C:/rsr/lab/js-prog-a-bordo/index.html
		===========================================================

		aula atual ( com segundo corrente )
		https://youtu.be/AyMwn_751RY

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
		xxxxxxx
		é um xxxxxxx
		

* //1
		xxxxxxxx
* //2
		xxxxxxxx
	
		*/
	 
	/* ******************************************************************* */

//1
cl('constantes');

/* 		
		 */
		 
	


		




	 /* prox aula  constantes
	 https://youtu.be/AyMwn_751RY
	 
	 */
	 



/////////////////////////////////
	
	// maximo é "exclusive".
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}