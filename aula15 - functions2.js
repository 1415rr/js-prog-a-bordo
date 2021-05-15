// exercicio.js

		////////////////////////////////////////////////////
		// tirei o dw ( document.write ) - nunca foi usado ate agora
		function cl (...texto) {console.log (...texto)};
		function c2 (texto) {console.log (texto, ' = ', this[texto])};
		////////////////////////////////////////////////////
		

		/*
		aula15 - functions2.js

		===========================================================
		==        arquivo de trabalho ( chama este JS )			 ==
		==														 ==
		file:///C:/rsr/lab/js-prog-a-bordo/index.html
		===========================================================

		aula atual ( com segundo corrente )
		https://www.youtube.com/watch?v=IXGa5wwWraY

		Playlist completa.
		https://www.youtube.com/watch?v=vrSEt5J4q2Y&list=PLbA-jMwv0cuWbas947cygrzfzHIc7esmp
		*/



	/* resumo do arquivo

	1) keyword this
	2) operador new
	3) call
	4) apply
	5) bind
	6) arrow function
	7) arrow function e o this

		lembrete:
		
		parentheses or "round brackets" ( )
		"square brackets" or "box brackets" [ ]
		braces or "curly brackets" { }
		"angle brackets" < >	

	*/

	
	/* 
		definicao

		this
		é um yyyyy que aaaaaa
	
	 */
//1
/* 		meu objeto this primario é a janela.
		ou seja: no contexto global, máximo, rodando no browser.
		 */
		cl('dentro do contexto global' , this);
		
		/* se eu chamar uma função, o this ainda será a window.
		a declaracao do ayrton é 
		function usuario(){
		mas eu quero manter o nome da funcao para fazer funcionar sem ter que apagar o exemplo anterior.
		 */
		Usuario = function (){
			cl('dentro da funcao usuario' , this);
		};
		Usuario();
		a = Usuario;

//2		

		/* operador new altera o valor de this.
		chamado escopo dinamico */
		cl('agora vou chamar com new');
		new  Usuario();

		//tratando a funcao como um objeto.
		Usuario = function (){
			this.nome  = 'Rafael';
			this.idade = 45;
			this.soma  = function(a,b){
				return a+b;
			}
		};
		cl (b = new Usuario());

		/*coloquei 'a' na funcao antiga e manteve.
		um new XXX retorna um XXX , seja o que for.
		*/
		cl ('a', a);
		cl ('b', b);
		cl ('nome', b.nome);
		cl ('soma', b.soma (3,4));
		
		/* meu this padrao é a janela.
			quanto eu crio um objeto com new, o 
			this passa a trabalhar como na OO, 
			em que this representa o objeto 
			corrente	*/
		
//3
		cl ('==== call');
		/* call passa para uma funcao o objeto 
		que será o seu this */
		
		objPersonagem = {
			nome: 'Rafael'
		};
		
		function fPersonagem () {
			cl (this);
		};

		/* fPersonagem recebendo objPersonagem como this */
		fPersonagem.call(objPersonagem);
		
		/* no call, se a funcao tiver mais parametros, 
			eles devem seguir após o this passado */
		function fPersonagemComParam (p1) {
			cl (this, p1);
		};
		fPersonagemComParam.call(objPersonagem, 'com param');
		c = fPersonagemComParam.call(objPersonagem, 'aqui é o c');
		cl(c);
		
//4
		/* apply é um cal que recebe os parametros como array */
		d = fPersonagemComParam.apply(objPersonagem, ['aqui é o d']);
		cl(d);
		
		/* tanto call quanto aplly retornam undefined */
		
//5		
		/* bind retorna uma funcao pronta para disparar
		com os parametros passados */

		/* o bind recebe os parametros assim como o call
		mas, em vez de executar imediatamente, ele apenas retorna uma 
		funcao simples sem parametros que executa a funcao como 
		especificada no bind.*/
		e = fPersonagemComParam.bind(objPersonagem, 'E - usando o bind');
		e();
		
		/* bind tambem funciona com  passando parametros que nao foram 
		passados no bind sendo passados na funcao  retornada 
		exceto se deixar de passar o this */
		f = fPersonagemComParam.bind(objPersonagem);
		f('F - passado depois');
		cl(f);

		/* abaixo, o this é a propriaq window, 
		pois o bind despreza o objeto passado. 
		internamente ele atré declara um this, 
		mas na prática nao funcionou.*/
		g = fPersonagemComParam.bind();
		g(objPersonagem, 'g - sem o this');
		cl(g);

//6
		/* arrow function 
		não altera o this.
		tem a declaração para blocos de código e 
		uma declaração mais simples para apenas 
		retornar valores.
		*/
		
		/* não usa a palavra function. */
		var soma = (a, b) => {
			return a+b;
		};
		cl( 'soma' , soma (2,4) ); 
		
		
		//abaixo, nao tenho o curly bracket nem o return, o return é presumido.
		var somaImediata = (a,b) => a+b;
		cl( 'somaImediata' , somaImediata (2,5) ); 
		
		/* posso quebrar linha se mantiver entre round brackets
		abaixo, retorno um objeto - as curly brackets são do
		objeto
		 */
		 
		 var fRetornaUsuario = () => (
		 {
			nome: 'Rafael',
			idade: 45
		 }
		 );
		 cl('a function', fRetornaUsuario);
		 cl('o resultado', fRetornaUsuario());
		 
		 /* sobre o codigo acima:
		 para evitar que o JS coonfunda as chaves do 
		 objeto com as chaves do código, no caso de objetos, 
		 independente de quebrar a linha, os round brackets 
		 sao obrigatorios.  */
		 
		 /* obrigatoriedade dos parentheses  */
 		 var fRetornaUsuarioCidade = cidade => (
		 {
			nome: 'Rafael',
			idade: 45,
			cidade
		 }
		 );
		 cl('sem cidade', fRetornaUsuarioCidade());
		 cl('com cidade', fRetornaUsuarioCidade('Rio'));
		 /* sobre o codigo acima:
			quando passamos 1 parametro, os parenteses nao sao obrigatorios na declaracao.
			mas se passamos 0 parametros ou mais que um parametro, é necessario colocar os 
			round brackets entre o = e o => */
//7
		/* para arrow, o this é sempre window. */
		var objPessoa = {
			nome: 'Rafael',
			idade: 45
		};
		
		var fImprimeThis = () => {
			cl( 'this', this);
		};
		
		fImprimeThis();
		fImprimeThis.call(objPessoa);
		
		/* arrow function não aceita new.
		retorna erro dizendo "is not a constructor"
		deduzo que arrow function acaba tendo 
		algo mais proximo de uma função classica.
		
		Pode até ser um objeto, mas não pode ser instanciado com new.
		 */
		//new fImprimeThis ();



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