// exercicio.js

		////////////////////////////////////////////////////
		// tirei o dw ( document.write ) - nunca foi usado ate agora
		function cl (...texto) {console.log (...texto)};
		function c2 (texto) {console.log (texto, ' = ', this[texto])};
		////////////////////////////////////////////////////
		

		/*
		aula16 - escopos.js

		===========================================================
		==        arquivo de trabalho ( chama este JS )			 ==
		==														 ==
		file:///C:/rsr/lab/js-prog-a-bordo/index.html
		===========================================================

		aula atual ( com segundo corrente )
		https://www.youtube.com/watch?v=D-qxe4Pem0Y

		Playlist completa.
		https://www.youtube.com/watch?v=vrSEt5J4q2Y&list=PLbA-jMwv0cuWbas947cygrzfzHIc7esmp
		*/



	/* resumo do arquivo

	1) escopo global
	2) escopo local
	3) escopo sem usar var
	4) escopo dinamico
	5) escopo lexical
	6) escopo de bloco
	
	

		lembrete:
		
		parentheses or "round brackets" ( )
		"square brackets" or "box brackets" [ ]
		braces or "curly brackets" { }
		"angle brackets" < >	
		
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
		definicao

//1
		escopo global
			aquilo que é definido no arq principal do JS.
			quando rodamos no browser, fica armazenada no 
			objeto window que é o escopo maior dentro 
			do navegador.
			
			variaveis declaradas sem "var/let" dentro de 
			funcoes, se tornam globais assim que executadas.
			
//4
		escopo dinamico
			o interpretador/engine não sabe qual o valor até que seja 
			o momento de ler/tratar o conteudo da variavel.
			
			especialmente aplicavel ao this.
		
//5
		escopo lexico
			o valor da váriável permanece o declarado durante
			durante todo o tempo de vida da variavel.
			
			costuma estar bem acessivel para sabermos o seu valor
			lendo o codigo.
			
//6
		escopo de bloco
			é o escopo dentro de curly brackets.
			o var não respeita isso, o escopo 
			do var é sempre a função.
			para definir um escopo de bloco, 
			usamos o let.
			
			
		
		
		
		
	
	 */
	 
	/* ******************************************************************* */
//1
	var nome='Rafael';
	function imprimeNome() {
		cl (nome);
	};
	window.imprimeNome();
	cl (window.nome);
	
//2
	function imprimeNomeLocal() {
		var nome = 'Reis';
		var lIdade = 45;
		cl ( 'window.nome', window.nome );
		cl ( 'this.nome',  this.nome );
		cl ( 'nome',       nome );
		cl ( 'idade',      lIdade);
	};

	imprimeNomeLocal();
	//cl ('idade', lIdade);

//3
	function funcaoQualquer() {
		nomeCompleto = 'Rafael Silveira Reis';
		cl ( 'nome completo - dentro', nomeCompleto );
	};

	/* a variavel sobe como global quando eu chamo a funcao.
	se eu nao tivesse chamado a funcao, o  'nome completo - fora'
	iria dar erro, pois nomeCompleto não estava definido
	 */

	funcaoQualquer();
	cl ( 'nome completo - fora', nomeCompleto );
	cl ( 'window.nome completo - fora', window.nomeCompleto );
	
//4
	function imprimeThis() {
		cl(this);
	};
	
	function ImprimeDinamico(){
		for (let i = 1 ; i <= 10 ; i++) {
			
			let a = getRandomInt ( 1, 3 );
			if (a === 1 ) {
				imprimeThis.call( {msg: 'objeto' } );
			} else {
				imprimeThis.call( [ 'array' ] );
			};

		};
	};
	
	ImprimeDinamico();
	
//5
	function ImprimeLexico(){
		var nome = 'Rafael';
		cl (nome);
	};
	ImprimeLexico();
	
//6
	var nome = "Cardvick";
	const sobrenome = "estepes";
	let idade = 45;
	function ImprimeEscopo(){
		/* diferenca entre a declaracao com  var e a declaracao com let dentro da funcao.
		ao declarar com var, a variável é declarada, mas o valor é considerado undefined até que passe pela atribuição.
		ao declarar com let a variável não é declarada até que passe pelo let , ou seja: 
		
		var é declarativa, 
		let roda em tempo de execução.
		
		posso rodar dois var da mesma variável no mesmo escopo, 
		mas só poosso ter um let da mesma variável no mesmo escopo.
		-> let não aceita ser 2a declaração.
		
		*/
		
		cl ('ImprimeEscopo - pre-var', this.nome, sobrenome, 'idade, com let vai dar erro' );
		var nome = "Rafael";
		var sobrenome = 'Reis';
		let idade = 55;	
		cl ('ImprimeEscopo - pre-if', nome, sobrenome , idade );
		var nome = "RaPHael";
		if (true){
			let sobrenome = 'Silveira';
			let idade = 65;
			cl ('ImprimeEscopo - if', nome, sobrenome , idade );
		};
		cl ('ImprimeEscopo - pos-if', nome, sobrenome , idade );
	};
	cl ('fora da funcao - pre', nome , sobrenome , idade );
	ImprimeEscopo();
	cl ('fora da funcao - pos', nome , sobrenome, idade );
	
	

/* 		
		 */
		


	 /* prox aula  closure
	 https://www.youtube.com/watch?v=MR8IyuhrDK8
	 
	 */
	 



/////////////////////////////////
	
	// maximo é "exclusive".
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}