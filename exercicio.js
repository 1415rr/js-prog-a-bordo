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

	1) considerando que uma variavel declarada pode ser redeclarada ou redefinida, 
	os declaradores comportam-se desta maneira.
	Const precisa ser inicializada ou erro: "missing initializer"
	--------------------------------------
	comando		redeclarada 	redefinida
	--------------------------------------
		var			SIM				SIM
		let			NAO				SIM
		const			NAO				NAO

		


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
		

* //1 constante tem escopo de bloco

* //2 redeclarada e redefinida
		xxxxxxxx
	
		*/
	 
	/* ******************************************************************* */

//1
cl('constantes');
{ // bl 1
	let autor = 'SR-Rafael'
	{ //bl 1.1
		const autor = 'RAFAEL';
		const anoPublicacao  = '2021';
		cl('dentro', autor);
		cl('dentro', anoPublicacao);
	}
	cl('fora', autor); 
	// cl('fora', anoPublicacao); //da erro	
}

//2 
{
	var v1 = 'v1-original';
	let l1 = 'l1-original';
	const c1 = 'c1-original';
	cl(v1, l1, c1);

	//	redeclara
	var v1 = 'v1-redeclara';
	// let l1 = 'l1-redeclara'; //da erro
	// const c1 = 'c1-redeclara'; //da erro
	cl(v1, l1, c1);

	//	redefine
	v1 = 'v1-redefine';
	l1 = 'l1-redefine';
	// c1 = 'c1-redefine'; //da erro
	cl(v1, l1, c1);

};


/* 		
		 */
		 
	


		




	 /* prox aula  constantes
	 https://youtu.be/AyMwn_751RY?t=256
	 
	 */
	 



/////////////////////////////////
	
	// maximo é "exclusive".
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}