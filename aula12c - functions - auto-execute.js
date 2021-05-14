// exercicio.js

		////////////////////////////////////////////////////
		// direi o dw ( document.write ) - nunca foi usado ate agora
		function cl (...texto) {console.log (...texto)};
		////////////////////////////////////////////////////

		/*
		aula12c - functions - auto-execute.js

		arquivo de trabalho ( chama este JS )
		file:///C:/rsr/lab/js-prog-a-bordo/index.html

		aula atual ( com segundo corrente )
		https://youtu.be/sb_XEtwVsG0?t=812
		
		Playlist completa.
		https://www.youtube.com/watch?v=vrSEt5J4q2Y&list=PLbA-jMwv0cuWbas947cygrzfzHIc7esmp
		*/


	/*
	funcao autoexecutavel / autoinvocável / self invoking
	IIFE (Immediately Invoked Function Expression).
	
	https://developer.mozilla.org/en-US/docs/Glossary/IIFE
	https://developer.mozilla.org/en-US/docs/Glossary/Self-Executing_Anonymous_Function
	*/

/*	
	(function iife () {
		cl ('Imediately Invoked Function Expression!');
	}());
	*/

	/* para funcionar tem que ter o () depois da função e a função deve estar entre parenteses, tbm.
	notacao:
	(function f(){ }());
	*/
	
	//variando.
/*	(function iife2 (texto) {
		cl (texto);
	}('iife - Imediately Invoked Function Expression!'));
	
	*/
	
	/*nao da para chamar duas iife*/
	(function iifePrimeira () {
		cl ('iife 1 - Imediately Invoked Function Expression!');
		f2();
	}());
	
	function f2 () {
		cl ('roda em tempo de declaracao ?');
	}

	/*segunda iife a ser chamada - a principio eu recebi um erro, 
	Por sorte, descobri isso fácil:
	
	depois de uma iife, é obrigatorio o ;
	
	Eu rodei um pouco achando que ele exigia uma funcao ( mesmo dummy ) entre dois autoexecs.
	mas, o ; resolveu.
	
	*/
	(function iifeSegunda () {
		cl ('iife 2 - Imediately Invoked Function Expression!');
	}());
	
	// /*terceira iife a ser chamada - recebe parametros */
	(function iifeTerceira (param1) {
		cl (param1);
	}('iife 3 - Imediately Invoked Function Expression!'));

// prox aula: objeto function.


/////////////////////////////////
	
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}