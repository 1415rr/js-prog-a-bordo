// exercicio.js

		////////////////////////////////////////////////////
		// direi o dw ( document.write ) - nunca foi usado ate agora
		function cl (...texto) {console.log (...texto)};
		////////////////////////////////////////////////////

		/*
		aula12e - functions - precedencias.js

		arquivo de trabalho ( chama este JS )
		file:///C:/rsr/lab/js-prog-a-bordo/index.html

		aula atual ( com segundo corrente )
		continuacao de aula D - não é tratado detalhadamente na aula.
		https://youtu.be/sb_XEtwVsG0?t=985
		
		Playlist completa.
		https://www.youtube.com/watch?v=vrSEt5J4q2Y&list=PLbA-jMwv0cuWbas947cygrzfzHIc7esmp
		*/


	/*
	Uma função só dá erro de variavel nao declarada - not defined ( parece diferente de "undefined" ) - se for chamada. 
	Neste caso de "not defined" interrompe a execucao na hora que encontrar o erro. Não sei se vai retornar para o script 
	acima ou para a stack... aparece como erro nao tratado. uncought.
	
	A função vigente na chamada será (precedência):
	1) a ultima declaração VAR realizada antes da chamada.
	2) a última declaração declare do código.
	
	Para erro de sintaxe, vale passagem linha a linha antes de excecutar.
	independente de estar em um if(false) por exemplo.
	sintaxe (gritante) não tem perdao. Caso de meter um GOTO - nem sei se existe.
	nao executa nem a primeira linha do script.
	
	em tempo de execucao, um declare dentro de um IF é executado como se fosse um var.
	*/
	

	cl ('------ANTES DE TODAS AS DECLARACOES');
	fExibeA('OK'); 
	cl ('fExibeA', fExibeA );

	fExibeB('OK');
	cl ('fExibeB', fExibeB );

	var fExibeA = function (texto) {
		cl ('UN var fExibeA   :', texto);
	};

	var fExibeB = function (texto) {
		cl ('1o var - fExibeB   :', texto);
	};

	cl ('------PASSOU O VAR - NÃO DECLAROU');
	fExibeA('OK'); 
	cl ('fExibeA', fExibeA );
	fExibeB('OK'); 
	cl ('fExibeB', fExibeB );

	function fExibeA (texto) {
		cl ('UN declare fExibeA   :', texto);
	}

	// tem erro na var - nao da erro pq foi substituido pelo segundo.
	function fExibeB (texto) {
		cl ('1o declare fExibeB   :', texto_primeiro);
	}
	
	cl ('------PASSOU O 1o DECLARE - B TEM ERRO DE var undefined');
	fExibeA('OK'); 
	cl ('fExibeA', fExibeA );
	fExibeB('OK'); 
	cl ('fExibeB', fExibeB );

	//substitui o anterior
	function fExibeB (texto) {
		cl ('2o declare fExibeB   :', texto);
	}

	cl ('------PASSOU O 2o DECLARE B');
	fExibeA('OK'); 
	cl ('fExibeA', fExibeA );
	fExibeB('OK'); 
	cl ('fExibeB', fExibeB );

	/*
	declarado fExibeC - não dá erro, pois apesar de ter sido declarada, 
	não há chamada para ela.
	O erro só vai acontecer se houver chamada.
	pois foi substituida por fExibeB - segundo.
	*/
	function fExibeC (texto) {
		cl ('declarado unico fExibeC ', texto_nao_declarado_fExibeC);
	}
	
	cl ('------PASSOU O DECLARE C - ERRO');
	fExibeA('OK'); 
	cl ('fExibeA', fExibeA );
	fExibeB('OK'); 
	cl ('fExibeB', fExibeB );
	

	fExibeC = fExibeB;
	cl ('------C RECEBE B');
	fExibeA('OK'); 
	cl ('fExibeA', fExibeA );
	fExibeB('OK'); 
	cl ('fExibeB', fExibeB );
	fExibeC('OK-C'); 
	cl ('fExibeC', fExibeC );
	
		
	var fExibeB = function autoexec (texto) {
		cl ('var fExibeB - segundo', texto_segundo);		
	};
	
	cl ('------B RECEBEU UM ERRO NO VAR');
	fExibeA('OK'); 
	cl ('fExibeA', fExibeA );
	
	cl ('==> ESTÁ COM ERRO: fExibeB', fExibeB );
	fExibeC('OK-C'); 
	cl ('fExibeC', fExibeC );
	
	cl ('------B RECEBE C (de volta)');
	fExibeB = fExibeC;
	fExibeB('OK'); 
	cl ('fExibeB', fExibeB );

	// if (false) para provar que nao entra.
	if (false) {
		// tem erro na var - nao da erro pq foi substituido pelo segundo.
		function fExibeB (texto) {
			cl ('if(false) declare fExibeB   :', texto_primeiro);
		}
	}
	cl ('------B PASSOU POR UM if(false) COM DECLARE E ERRO.');
	fExibeB('OK'); 
	cl ('fExibeB', fExibeB );

	if (false) {
		// tem erro na var - nao da erro pq foi substituido pelo segundo.
		var fExibeB = function (texto) {
			cl ('if(false) var fExibeB   :', texto_primeiro);
		}
	}
	cl ('------B PASSOU POR UM if(false) COM VAR E ERRO.');
	fExibeB('OK'); 
	cl ('fExibeB', fExibeB );

	// if (true) para provar que associa.
	if (true) {
		// tem erro na var - nao da erro pq foi substituido pelo segundo.
		function fExibeB (texto) {
			cl ('if(true) declare fExibeB   :', texto);
		}
	}
	cl ('------B PASSOU POR UM if(true) - DECLARE');
	fExibeB('OK'); 
	cl ('fExibeB', fExibeB );

	if (true) {
		// tem erro na var - nao da erro pq foi substituido pelo segundo.
		var fExibeB = function (texto) {
			cl ('if(true) var fExibeB   :', texto);
		}
	}
	cl ('------B PASSOU POR UM if(true) - VAR');
	fExibeB('OK'); 
	cl ('fExibeB', fExibeB );
	
	// forca a dar erro de variavel.
	var fExibeB = function (texto) {
		cl ('if(true) var fExibeB   :', texto_com_erro_not_defined);
	}
	cl ('------FORCEI B COM ERRO DE VARIAVEL not defined.');
	fExibeB(' - NOK'); 
	cl ( 'continuou a execucao ?');
	cl ('fExibeB', fExibeB );



	

// prox aula: callback


/////////////////////////////////
	
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}
	
	
	
