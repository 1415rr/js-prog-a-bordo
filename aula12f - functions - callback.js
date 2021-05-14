// exercicio.js

		////////////////////////////////////////////////////
		// direi o dw ( document.write ) - nunca foi usado ate agora
		function cl (...texto) {console.log (...texto)};
		////////////////////////////////////////////////////

		/*
		aula12f - functions - callback.js

		arquivo de trabalho ( chama este JS )
		file:///C:/rsr/lab/js-prog-a-bordo/index.html

		aula atual ( com segundo corrente )
		https://youtu.be/sb_XEtwVsG0?t=1190
		
		Playlist completa.
		https://www.youtube.com/watch?v=vrSEt5J4q2Y&list=PLbA-jMwv0cuWbas947cygrzfzHIc7esmp
		*/

/**/

	/*
	funcao callback... 
	Callback (CB) é uma função passada como parâmetro para outra função.
	O nome pode ser este, porque a função CB pode ser chamada ao final da 
	execução da função que a recebeu como parâmetro. Mas, isto não é 
	obrigatório.    
	*/
	
	// uma funcao de soma que multiplica o resultado por dois.
	function somaCallBack (a, b, fnCallBack ) {
		return fnCallBack (a + b);
	}
	
	//estou passando uma callback anonima e escrita dentro da declaração de código.
	ret = somaCallBack ( 10, 3, function (valor) { 
		return valor * 2;
	});
	
	cl ("retorno = ", ret );
	
	
	// a mesma operacao, passando uma funcao como variável 
	var fnMultiplica = function (valor) { 
		return valor * 2;
	};
	
	//Neste caso, fnMultiplica poderia receber funções "dobra" "triplica" exponencia" 
	//dinamicamente sem alterar a estrutura de soma callback, bastando atribuir a 
	//funcão desejada à variável fnMultiplica.
	ret = somaCallBack ( 10, 3, fnMultiplica);
	cl ("retorno = ", ret );
	
	// um caso para possibilidades dinamicas.
	var somaOuSubtrai; //pode valer 1 ou 2, sendo 1 - soma e 2 - subtrai
	var tipoMultiplica;	// pode ser 2-dobra, 3-triplica, 4-exponencia.
	var a = 3;
	var b = 5;

	somaOuSubtrai = getRandomInt (1,3);
	cl ("somaOuSubtrai - ", somaOuSubtrai, "    1 - soma e 2 - subtrai");
	
	tipoMultiplica = getRandomInt (2,5);
	cl ("tipoMultiplica - ", tipoMultiplica, "    2-dobra, 3-triplica, 4-exponencia");
	
	switch (tipoMultiplica) {
		case 2:
			fnMultiplica = function fnDobro (valor) {
				return valor * 2;
			}
		break;
		case 3:
			fnMultiplica = function fnTriplo (valor) {
				return valor * 3;
			}
		break;
		case 4:
			fnMultiplica = function fnQuadrado (valor) {
				return valor * valor;
			}
		break;
	}
	
	cl ( `valores a = ${a} e b = ${b}` );
	
	b = somaOuSubtrai == 1 ? b : b*-1;
	
	fnSomaMultiplica = function (valor1, valor2, fnParamMultiplica) {
		soma = valor1+valor2
		cl ("soma:  ", soma)
		return fnParamMultiplica (soma);
	}
	
	cl ("fnSomaMultiplica: ", fnSomaMultiplica (a, b, fnMultiplica));
	
	for (var i=1; i<=10000; i++ ) {
		var iLocal;
		iLocal = getRandomInt (1,2);
		cl (1, iLocal);
		if (iLocal==2) break;
	}


	
// prox aula: parametros default ES6***
// https://youtu.be/sb_XEtwVsG0?t=1470


/////////////////////////////////
	
	// maximo é "exclusive".
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}
	
	
	