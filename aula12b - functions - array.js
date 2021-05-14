// exercicio.js

		////////////////////////////////////////////////////
		function cl (texto) {console.log (texto)};
		function dw (texto) {document.write (texto)};
		////////////////////////////////////////////////////

		/*
		aula12b - functions - array.js

		arquivo de trabalho ( chama este JS )
		file:///C:/rsr/lab/js-prog-a-bordo/index.html

		aula atual ( com segundo corrente )
		https://youtu.be/sb_XEtwVsG0?t=430
		
		Playlist completa.
		https://www.youtube.com/watch?v=vrSEt5J4q2Y&list=PLbA-jMwv0cuWbas947cygrzfzHIc7esmp
		*/


	/*
	chamada de funcao recebendo array.
	*/
	
	// 1 - recebendo um array como parametro.
	function somaTudo(numeros) {
		var soma = 0;
		for (var n of numeros) {
						soma += n;
		}
		return soma;
	}
	
	//poderia ter passado uma variavel de array com o array.
	var r = somaTudo ([3, 5, 7, 10, 9, 12]);
	cl(`somaTudo = ${r}`);

	// 2 - recebendo um numero incerto de parametros.
	function escreveEndereco (rua, cidade, pais, ...complementos){
		cl('rua', rua);
		cl('cidade', cidade);
		cl('pais', pais);
		cl('complementos', complementos);
	}
	
	cl('--');
	escreveEndereco ('florianopolis', 'rio de janeiro', 'brasil' );
	cl('--');
	escreveEndereco ('matiola', 'rio de janeiro' );
	cl('--');
	escreveEndereco ('quintino do vale', 'rio de janeiro', 'brasil', 'professor', '22/202' );
	cl('--');
	escreveEndereco ('professor quintino do vale - apenas um commplemento', 'rio de janeiro', 'brasil', '22/202' );
	cl('--');
	
	////////////////////////////////////////////////////
	// override a cl do cabecalho
	////////////////////////////////////////////////////
	function cl (...texto) {console.log (...texto)};
	////////////////////////////////////////////////////
	
	/* usando reticencias para receber parametros na funcao "..."
	recebo os parametros como array. 
	...array
	se tiver um unico parametro, ainda que seja string:
	array[0] - param 1 
	
	ex
	fn (...paramArray)
	paramArray [0] - param1
	paramArray [1] - param2
	paramArray [3] - param3...
	
	ouotro exemplo
	fn (Param1, param2, ...paramArray)
	Param1 - param1
	param2 - param2
	paramArray [0] - param3
	paramArray [1] - param4
	paramArray [3] - param5

	e no array, como funcionam as reticências?
	
	
	*/
	
	


		//sim. JS ignora a virgula depois do ult parametro!!!!!
		/* eu usei esta estrutura abaixo para testar como funcionaria um 
		cl recebendo parametros variaveis
		minhas observacoes:
		1) JavaScript ignores trailing commas in arrays - este é o texto que me retornou quando pesquisei um pouco.
			funciona em array, object, function
			nao deve funcionar no json! 
			referencia abaixo:
			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas
			
		2) como eu recebo um array de parametros, usar ... para repassa-lo  para console.log funcionou 
			( ele nao entende que o unico parametro deve ser dissecado como uma string. 
				ex. cl('abc') não recebe 'a','b','c'. )
		3) eu cheguei a escrever o "case 9:", mas encurtei para facilitar a legibilidade, uma vez que esta 
			funcao nao sera utilizada - serve apenas para exemplo de como eu evolui a funcao cl.
				
		*/
	function cl2 (...saida) {
		console.log ('saida', saida)
		switch (saida.length) {
			case 1:
				console.log (	saida[0],
								);

				break;
			case 2:
				console.log (	saida[0],
								saida[1],
								);

				break;
			case 3:
				console.log (	saida[0],
								saida[1],
								saida[2],
								);

				break;
			default:
				console.log (	saida[0],
								saida[1],
								saida[2],
								saida[3],
								);
				break;
				
		}
	}
	
// prox aula: funcao autoexecutavel.
	


	
	
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}