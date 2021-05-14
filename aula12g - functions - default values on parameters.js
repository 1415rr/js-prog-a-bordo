// exercicio.js

		////////////////////////////////////////////////////
		// tirei o dw ( document.write ) - nunca foi usado ate agora
		function cl (...texto) {console.log (...texto)};
		////////////////////////////////////////////////////

		/*
		aula12g - functions - default values on parameters.js

		arquivo de trabalho ( chama este JS )
		file:///C:/rsr/lab/js-prog-a-bordo/index.html

		aula atual ( com segundo corrente )
		ttps://youtu.be/sb_XEtwVsG0?t=1470
		
		Playlist completa.
		https://www.youtube.com/watch?v=vrSEt5J4q2Y&list=PLbA-jMwv0cuWbas947cygrzfzHIc7esmp
		*/

/**/

	/*
	a partir do ES6, poassou a ser possivel definir
	valores default para parametros da funcao.
	
	*/
	
	function escreveNome ( nome='Rafael', idade ) {
		cl (nome, idade);
	}
	
	escreveNome ( "joao", 16 );
	escreveNome ( );
	escreveNome ( undefined , 45 );
	escreveNome ( "Reis"  );
	
	
	
	

	
// prox aula: objetos 1/2
// https://youtu.be/vB-aPrlSEXs


/////////////////////////////////
	
	// maximo é "exclusive".
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}
	
	
	