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
		
		
		escopo lexico (lexico = vocabulario)
			o valor da váriável permanece o delcarado 
			durante todo o tenpo de vida da variavel.
						
			costuma estar bem acessivel para sabermos o seu valor
			lendo o codigo.

			o conteudo está definido na propria declaracao
			da variavel.
			é diferente do this que é dinâmico e não consigo
			garantir o seu conteudo.

		memorizacao de escopo
			quando a function memoriza o escopo em que ela 
			foi criada ( dentro de outra function p. ex. )

			no exemplo de //1 nome foi definido em uma funcao
			de escopo externo (imprimeLexico).
			mas a funcao retornada ( chamei de a ) ainda mantem
			o valor de nome memorizado, mesmo que imprimeLexico
			já tenha sido desalocada.

		permite criar funcoes e variaveis privadas sem 
		utilizar classes.

		previne o uso de funcoes anonimas.

		

* //1
		lexical escope

* //2
		memorizacao de escopo

* //3 
		funcoes e variaveis privadas

* //4
	 prevenindo funcoes anonimas



	
	
		*/
	 
	/* ******************************************************************* */

//1
	function imprimeLexico(){
		let nome = 'Rafael';	
		// retorna uma function com retorno.
		return function a (){
			/* eu sei qual o conteudo de nome.
			ele nao variou, nao é dinamico. */
			return nome;
		};
	};
	let lfLex = imprimeLexico();
//2
	console.log (lfLex());
	console.log (lfLex());
	console.log (lfLex());

//3 
/* imagine uma biblioteca para ser usada por terceiros.
neste caso ele apenas retorna a soma de 10 com 5 ou 7.
onde aux que obtem 10 nao pode ser usada 
externamente - é privada.
e add5 ou add7 podem ser usadas pelo "caller". */

	function myLib() {
		function auxiliar(valor){ //privada
			return 10+valor;
		}
		return {
			add5(){
				return auxiliar(5);
			},
			add7(){
				return auxiliar(7);
			},
		}
	};
	var lmyLib = myLib();
	cl(lmyLib);
	cl(lmyLib.add5());
	cl(lmyLib.add7());
		 /* sobre o codigo acima:
		 myLib() nao retorna "a si mesma". ela 
		 retorna add5 e add7. entao, ao usar
		 esta técnica de "closure", eu recebo
		 funcoes que, ao serem chamadas restabelecem 
		 o contexto da função de origem ao serem chamadas.

		 mesmo que a função de origem não esteja mais em uso
		 pelo programa atual.
		 
		 porque "auxilar()" existe no escopo léxico das funcoes add5/7()
		 
		 */

//4
	// usando anonimo
	function inicializaAnonimo(){
		let nome="Rafael Anonimo";
		cl('imprime primeiro anonimo');
		setTimeout (function(){
			console.log(nome);
		}, 1000 ); // setTimeout funcao , milisegundos de delay
		cl('imprime segundo anonimo');
	};
	inicializaAnonimo();

	// usando closure
	function imprimeNome(nome){
		return function(){
			cl(nome);
		}
	}
	function inicializaClosure(){
		let nome="Rafael Closure";
		cl('imprime primeiro closure');
		setTimeout (imprimeNome(nome), 1000 ); // setTimeout funcao , milisegundos de delay
		cl('imprime segundo closure');
	};
	inicializaClosure();

		 /* sobre o codigo acima:
		 ao usar closure eu retorno uma funcao ( anonima ), que obrigatoriamente 
		 é chamada por uma função nomeada. E que carrega todo o conteudo lexico 
		 necessario.
		 Entao, mesmo uma funcao anonima retornada pertencerá a um contexto nominado
		 que é a funcao "mae".

		 é uma boa pratica.
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