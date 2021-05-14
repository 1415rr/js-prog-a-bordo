// exercicio.js

		////////////////////////////////////////////////////
		// tirei o dw ( document.write ) - nunca foi usado ate agora
		function cl (...texto) {console.log (...texto)};
		function c2 (texto) {console.log (texto, ' = ', this[texto])};
		////////////////////////////////////////////////////
		
		/* primeira implementação do c2 com sucesso
		   passando a string com o nome da variável
		*/

		/*
		aula14 - objetos2.js

		===========================================================
		==        arquivo de trabalho ( chama este JS )			 ==
		==														 ==
		file:///C:/rsr/lab/js-prog-a-bordo/index.html
		===========================================================

		aula atual ( com segundo corrente )
		https://www.youtube.com/watch?v=7MG3O_-ZqGc

		Playlist completa.
		https://www.youtube.com/watch?v=vrSEt5J4q2Y&list=PLbA-jMwv0cuWbas947cygrzfzHIc7esmp
		*/



	/* resumo do arquivo

	1) extraindo atributos para variaveis (mesmo nome ou diferentes)  - ECS6 / destructuring
	2) extraindo atributos de objetos dentro de objetos para variaveis (mesmo nome ou diferentes) - ECS6 / destructuring
	3) usando valor default/fallback para uma propriedade undefined - ECS6 / destructuring
	4) usando destructuring nos parametros de uma funcao - ECS6 / destructuring
	5) manipulando objetos com object.keys e object.values
	6) interando em objetos com for
	7) como evitar propriedades herdadas - hasOwnProperty

		lembrete:
		
		parentheses or "round brackets" ( )
		"square brackets" or "box brackets" [ ]
		braces or "curly brackets" { }
		"angle brackets" < >	

	*/

	
	/* 
		definicao

		xxxxx
		é um yyyyy que aaaaaa
	
	 */
	 
	 var novoUsuario = {
		 nome: 'Rafael',
		 idade: 45,
		 pais: 'Brasil',
		 sobrenome: 'reis',
	 }
	 
	 // para ler o atriubuto para uma variável
	 var nome = novoUsuario.nome;
	 cl(nome);
	 
	 // para ler o atriubuto para uma variável homonima - ECS6
	 var { pais, idade } = novoUsuario;
	 cl(idade, pais);
	 
	 // mesmo mecanismo, mas para nome de variavel diferente - ECS6 
	 // ##Ex001
	 var {sobrenome: ultNome} = novoUsuario;
	 cl(ultNome);
	 // cl(sobrenome); - nao existe variavel sobrenome
	 
	 /*
		caminho de volta de (exemplo da aula 13)
	 var cor = 'azul';
	 var usuario4 = {
		 nome: 'Rafael',
		 cor
	 };
	 */
	 
	 /* 
	 considerando um objeto B dentro de outo objeto A e eu queira 
	 pegar o conteudo de uma das propriedades do objeto B.	 
	 */ 
	 novoUsuario2 = {
		 nome: {
			 primeiro: "Rafael de Dentro",
			 ultimo: "Reis - ultimo nome",
		 }
	 };
	 
// 2
	 var primeiro = novoUsuario2.nome.primeiro;
	 cl (primeiro);
	 
/* 
	 o código acima equivale ao código abaixo.
	 abaixo, o código significa:
	 var brace significa que quero a propriedade de um objeto A.
		dentro do brace, após o nome da eu coloco o nome da propriedade. 
			Como é um Objeto (B), eu abro novo brace, pq quero sua propriedade.
				então eu escrevo o nome da propriedade.
			Fecho os braces.
	coloco o objeto A, que corresponde ao primeiro brace que está sendo associado.
 */
	 
	novoUsuario2.nome.primeiro = "Rafael de Fora"
	 var { nome: { primeiro }}  = novoUsuario2;
	 cl (primeiro);

	// a mesma lógica do exemplo ##Ex001, usada para outro nome de variável lendo propriedade do objeto B dentro do objeto A.
	 var { nome: { ultimo: ultimoNome }}  = novoUsuario2;
	 cl (ultimoNome);
	 
// 3
	// valor default para atributos inexistentes para evitar o undefined
	 var { nome: { nomeDoMeio = 'campo inexistente '}}  = novoUsuario2;
	 cl ('nomeDoMeio ==> ', nomeDoMeio);
	 
	 // onde entra o nome da var local - lNomeDoMeio é local
	 var { nome: { nomeDoMeio : lNomeDoMeio = 'campo inexiste '}}  = novoUsuario2;
	 cl ('lNomeDoMeio ==> ', lNomeDoMeio);
	
	 // aqui, ele usa o valor do campo, pois o campo nao é undefined
	 var { nome: { primeiro : lPrimeiro = 'campo inexiste '}}  = novoUsuario2;
	 cl ('lPrimeiro ==> ', lPrimeiro);
	 
//4
	// recebendo objeto em uma funcao usando destructuring
	function imprimeUsuario ( { nome, sobrenome: ultNome, idade, pais = 'AR', municipio: cidade = 'NONEE' } ) {
		cl ('nome'  	, nome );   	//leu e imprimiu normal.
		cl ('sobrenome' , ultNome );	//sobrenome teve o nome da variavel trocada com :, variavel sobrenome nao existe, apenas a ultNome.
		cl ('idade' 	, idade );		//leu e imprimiu normal.
		cl ('pais' 		, pais );		//fallback era AR, mas como BR estava preenchida, nao usou o fallback
		cl ('cidade' 	, cidade );		// era municipio e o campo nao existia, chamei de cidade e usei o valor de fallback.
		};	
	
	var usuarioFunction = { 
		nome: 'Rafael', 
		sobrenome: 'Reis', 
		pais: 'BR',
		telefone: "(21) 9-4444-0001",
		identidade: 'IFP',
		idade: 45,	
	} ;
	
	cl ('-- imprimeUsuario' );
	imprimeUsuario (usuarioFunction);
	
//5	
	//interando o objeto com object keys e values
	cl('=========== object keys e values');
	var usuarioObject = { 
		nome: 'Rafael', 
		sobrenome: 'Reis', 
		pais: 'BR',
		telefone: "(21) 9-4444-0001",
		identidade: 'IFP',
		idade: 45,	
	} ;
	
	var arrPropriedades = Object.keys  (usuarioObject);
	cl (arrPropriedades);
	var arrValores 		= Object.values(usuarioObject);
	cl (arrValores);
	
//6
	cl('=========== usando dois arrays - eu que inventei');
	for (let i=0; i < arrPropriedades.length; i++ ) {
		cl(arrPropriedades[i], ' = ', arrValores[i]);
	};
	
	cl('=========== usando o proprio nome da propriedade ');
	// outra implementação, sem fazer um array depender de outro.
	for (let i=0; i < arrPropriedades.length; i++ ) {
		cl(arrPropriedades[i], ' = ', usuarioObject[arrPropriedades[i]] );
	};
	
	cl('=========== for of ');
	for (let lPropriedade of arrPropriedades) {
		cl(lPropriedade, ' = ', usuarioObject[lPropriedade] );
	};

	cl('=========== for in ');
	//implementacao indicada para tratar objetos.
	for (let lAtributo in usuarioObject) {
		cl(lAtributo, ' = ', usuarioObject[lAtributo] );
	};

//7
	/*
	neste exemplo, nao fará diferença, mas é necessário em objetos herdados
	*/
	cl('=========== for in - hasOwnProperty');
	//implementacao indicada para tratar objetos.
	for (let lAtributo in usuarioObject) {
		// se a propriedade em lAtributo  pertende ao objeto (ele mesmo), entao imprimo.
		if (usuarioObject.hasOwnProperty[lAtributo]) {
			cl(lAtributo, ' = ', usuarioObject[lAtributo] );
		}
	};
	
	
 // extra - colocando a c2 para funcionar
	var lTesteString = "Rafael";
	c2 ('lTesteString');
	
	c2 ('usuarioObject');



	 /* prox aula  functions2
	 https://www.youtube.com/watch?v=IXGa5wwWraY
	 
	 */
	 



/////////////////////////////////
	
	// maximo é "exclusive".
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}