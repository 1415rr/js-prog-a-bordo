// exercicio.js

		////////////////////////////////////////////////////
		// tirei o dw ( document.write ) - nunca foi usado ate agora
		function cl (...texto) {console.log (...texto)};
		////////////////////////////////////////////////////

		/*
		aula13 - objetos1.js

		arquivo de trabalho ( chama este JS )
		file:///C:/rsr/lab/js-prog-a-bordo/index.html

		aula atual ( com segundo corrente )
		ttps://youtu.be/sb_XEtwVsG0?t=1470
		
		Playlist completa.
		https://www.youtube.com/watch?v=vrSEt5J4q2Y&list=PLbA-jMwv0cuWbas947cygrzfzHIc7esmp
		*/



	/* objetos, 
	arrays dentro de objetos,
	como uma propriedade entra com array ou como objeto com um array dentro
	adicionar e remover propriedades dos objetos
	nomes especais para propriedades entre aspas
	nomes dinamicos para propriedades entre square brackets
	o nome da propriedade pode simplesmente repetir um nome de variavel para pegar seu valor.
	funcoes dentro de objetos.
	abreviando ( sem ": functon")  na definicao da funcao dentro do objeto.
	fazer merge de objetos para um existente ou para um novo.
	getter e setter
	usando um objeto ponteiro (anteror/proximo) para navegar em um  array de objetos ( registros ).
	
	
	
	
	
	*/

	
	/* 
		Objeto
		
		É um valor que permite armazenar uma coleção de pares de chave de valor.
		Variáveis dentro de uma variável ( função é valor )
		no fim, as variáveis em um objeto são uma variável só 
		( único endereço de memória )
		
	
	 */
	
	
	var usuario = {
		//chave: valor,
		nome: 'rafael',
		idade: 45,
		telefone: "21-9-8822-4422",
		['endereço']: 'rua que sobe e desce numero que desaparece.',
		'ultimo-nome': 'reis',
	};
	/* o teshima ensinou sem colchetes.
	aparentemente, aceita com e sem.
	a virgula solta no final, tambem é 
	muito "permissiva"
	 */ 
	
	//print do objeto
	cl ("usuario", usuario);
	
	//print de uma propriedade
	cl (`idade ${usuario.idade}`);
	cl (`telefone ${usuario['telefone']}`);
	cl (`endereco ${usuario['endereço']}`);
	cl (`ultimo nome ${usuario['ultimo-nome']}`);
	
	// consigo adicionar atributos depois do objeto criado.
	usuario['nome-de-mainha'] = 'ê mainha';
	//aqui, não aceitou sem o colchete.
	cl ("usuario", usuario);
	
	//para deletar propriedade ( usa-se este nome: propriedade )
	delete usuario['ultimo-nome'];
	cl ("usuario", usuario);
	
	// colocando um array no objeto
	// colocando e um OBJETO dentro do array no objeto
	usuario.arrChaves = [ 
	'chave01',
	'chave02 é array',
	'clave III',
		[
		'clave IV-a', 
		'clave IV-b', 
		'clave IV-c', 
		'clave IV-d', 
		'clave IV-e', 		
		]
	];
	
	usuario.arrChaves.arrSites = [ 
		'microsoft',
		'google',
		'fascebook',
		'twitter',
	];

	arrInstrumentos = [ 
		'violão',
		'campainha',
		'seta de automóvel',
		'bateria',
	];

	arrObjetosDeCasa = [ 
		'ventilador',
		'porta',
		'cadeira',
		'mesa',
	];
	
	usuario.arrChaves.NadaAVer = arrObjetosDeCasa;

	arrObjetosDeCasa = [ 
		'ventilador',
		'porta',
		'cadeira',
		'mesaa',
	];

	usuario.arrChaves.push (arrInstrumentos);
	
/* 	quando eu coloco ".alguma coisa", é uma variável ou objeto dentro do objeto. Não é um array.
	Se eu coloco entre [] direto, então é um array.
	Se eu uso push, com um array, então eu insiro como array.

	usuario.arrChaves.arrSites é um objeto.
	usuario.arrChaves.NadaAVer é um objeto.
	arrInstrumentos entra como array.
	
 */	
	
/* continua em 
https://youtu.be/vB-aPrlSEXs?t=440
 */

	usuario.arrChaves.push ('clave V');
	
	cl ("usuario", usuario);
	
		
/* 	usa-se [''] para atributos com 
	caracteres especiais como hifen
 */	


// functions inside objects
	var usuario2 = {
		sayHello: function (sName) {
			return `Hello, ${sName}!`;
		}
	};
	
	cl(usuario2);
	cl(usuario2.sayHello ('usuário'));
	cl(usuario2.sayHello ('Rafael'));
	
/*
	outra maneira de declarar uma função dentro do objeto.
	sem o dois pontos e sem a palavra function
		
	another way to declare a function inside an object.
	without double dot, and without "function" ketyword.
*/
	var usuario3 = {
		sayHello (sName) {
			return `Hello, ${sName}!`;
		}
	};
	cl(usuario3.sayHello ('Rafael'));
	
	/* 
	isto não funciona fora do objeto. 
	o codigo abaixo dá erro na chave aberta.
	
		parentheses or "round brackets" ( )
		"square brackets" or "box brackets" [ ]
		braces or "curly brackets" { }
		"angle brackets" < >	
	this way doesn't work placed outside the object.
	the code bellow shows an error at the opened curly bracket.
	
	
	DigaOla (name) {
		return `Oiii, ${sName}!`;
	}
	
	cl(DigaOla ('Rafael'));
	 */
	 
	 /* atribuindo uma variável a um objeto. 
	 setting a variable inside an object
	 */
	 
	 var cor = 'azul';
	 var usuario3 = {
		 nome: 'Rafael',
		 cor: cor
	 };
	 
	 cl ('usuario 3', usuario3);
	 
	 /* equivale a
	 is equvalent to */
	 var usuario4 = {
		 nome: 'Rafael',
		 cor
	 };
	/* o nome da variável é "aproveitado" dentro do objeto
	the variable name is used inside the object
	
	é uma propriedade do ECS6.
	Se o nome da variável é o mesmno nome que eu quero usar como atributo,
	o nome da minha chave vai ser o nome da minha variavel.
	
	it's a ECS6 property.
	If the variable name is the same that I want to use as attibute,
	the key name will be the variable name.
	 */
	 cl ('usuario 4', usuario4);
	 
	 /* merge de dois ou mais objetos.
	 merging two or more objects. */
	 var dadosAdicionais = {
		 nacionalidade: 'Brasileiro',
		 naturalidade: 'Rio de Janeiro',
	 };
	 
/* 	 o primeiro parametro é o objeto que sofrerá a adição ou {} para objeto novo.
	 os demais parâmetros são os objetos a serem adicionados, na ordem desejada.
	 
	 the first argument is the object that will receive the addition or you can use a curly brackets for a new object.
	 the rest of arguments are the objects to be additioned, on the sequence wished.
 */
	 var novoUsuario = Object.assign ({}, usuario4, dadosAdicionais);
	 /* retorna o objeto {} com as adições.
	 returns the object dummuy/{} with the aditions. */
	 
	 cl (usuario4, dadosAdicionais, novoUsuario );
	 
	 /* aqui, eu adiciono  o objeto ao proprio usuario 4
	 here, I add the object to usuario4 himself
	 
	 sempre prefira criar um objeto novo , em vez de modificar o existente.
	 always prefer to create a new object instead modify the existent one.
	 */
	 var novoUsuario4 = Object.assign ( usuario4, dadosAdicionais);
	 cl (usuario4, dadosAdicionais, novoUsuario4 );
	 
	 /* usuario4 foi modificado  
	 			was modified *?
	
	/* outra maneira, a partir do ECS6
		another way from ECS6 onwards	*/
	var novoUsuario4a = {
		...usuario4,
		...dadosAdicionais,
	};

	var novoUsuario4b = {
		usuario4,
		dadosAdicionais,
	};
	
	/* see the difference 
	a is a merge of two objects, meanwhile
	b has two subsets instead.
	*/
	cl (novoUsuario4a, novoUsuario4b);
	 

	/* setting an object  key name dinamically
	*/
	nomeCampo = 'estado';
	
	var usuario5a = {
		nome: 'Rafael',
		nomeCampo: 'RJ',
	}
	cl ('usuario5a', usuario5a);

	var usuario5b = {
		nome: 'Rafael',
		'nomeCampo': 'RJ',
	}
	cl ('usuario5b', usuario5b);

	var usuario5c = {
		nome: 'Rafael',
		[nomeCampo]: 'RJ',
	}
	cl ('usuario5c', usuario5c);

	 /* the square brackets make the key name take the variable content as name */
	 
	 /* getters and setters */
	 /* bellow, an array of objects */
	 var usuarios = [
	 {
		 nome: 'Rafael',
		 idade: 45,
		 indice: 'ZERO',
	 },
	 {
		 nome: 'Joao',
		 idade: 13,
		 indice: 'UNO',
	 },
	 {
		 nome: 'Maria',
		 idade: 27,
		 indice: 'DUO',
	 }, 
	 ];
	 
	 cl('usuarios', usuarios);
	 cl(usuarios[1]);
	 cl(usuarios[1].nome);
	 cl(usuarios[2].nome);
	 cl(usuarios[2].idade);
	 
	 
	 var usuario = {
		 posicao: 0,
			/*o comando get faz com que a função retorne como valor, sem necessidade dos parenteses.
			the get statement makes the function to return as a value, without requires round brackets .
			
			o get é um modificador - whatever his name - do código. Ele não é usado com o "function".
			para usar get/set com uma definição de função, o caminho indicado seria  via defineProperty.
			como no exemplo abaixo. A sintaxe do get/set confunde , mas ele não é um  __define[GS]etter__  
			whatever it means.
			https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects#definindo_getters_e_setters
			------------------
			var d = Date.prototype;
			Object.defineProperty(d, "year", {
			  get: function() { return this.getFullYear() },
			  set: function(y) { this.setFullYear(y) }
			});			
			------------------
			nao existe get atual: function () {}
			get é um objeto literal. whatever it means.
			*/
		 get atual (){  
			 return usuarios[this.posicao];
		 },
		 set atual (posicao){  
			 this.posicao = posicao;
		 },
		 proximo: function () {
			++this.posicao; 
		 },
		 anterior () {
			--this.posicao; 
		 },
		 		 
	 };
	 
	 cl (usuario.atual); //prints the current user
	 usuario.proximo(); //moves forward the current position of the array.
	 cl ('proximo');

	 cl (usuario.atual);
	 usuario.proximo();
	 cl ('proximo');
	 
	 cl (usuario.atual);
	 
	 usuario.anterior(); //moves backward the current position of the array.
	 cl ('anterior');
	 cl (usuario.atual);
	 
	 usuario.atual = 0; //sets the array position to ZERO.
	 cl ('zero');
	 cl (usuario.atual);

	 usuario.atual = 2; //sets the array position to 2.
	 cl ('dois');
	 cl (usuario.atual);


	 /* next class objetos 2/2 
	 https://www.youtube.com/watch?v=7MG3O_-ZqGc
	 
	 */
	 



/////////////////////////////////
	
	// maximo é "exclusive".
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}