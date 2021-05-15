// exercicio.js

		////////////////////////////////////////////////////
		function cl (texto) {console.log (texto)};
		function dw (texto) {document.write (texto)};
		////////////////////////////////////////////////////

		/*
		aula12a - functions - chamada simples e precedencia.js

		arquivo de trabalho ( chama este JS )
		file:///C:/rsr/lab/js-prog-a-bordo/index.html

		aula atual ( com segundo corrente )
		https://youtu.be/sb_XEtwVsG0
		
		Playlist completa.
		https://www.youtube.com/watch?v=vrSEt5J4q2Y&list=PLbA-jMwv0cuWbas947cygrzfzHIc7esmp
		*/


	/*
	chamada simples de funcao.
	declarar a funcao antes ou depoisda chamada nao faz diferenca.
	se houver mais de uma declaracao, a ultima declaraco de funcao é a que vale.
	acho que ele varre todas as declarações antes de executar. Já com o var, isto não acontece.
	*/
	
	// 1 - neste exemplo, a segunda funcao sera chamada.
	function escreve1(texto) {
		console.log ('escreve1 - primeira funcao - ', texto);		
	}

	escreve1  ('ola mundo - 1!');

	function escreve1(texto) {
		console.log ('escreve1 - segunda funcao - ', texto);		
	}
	
	// 2 = a segunda funcao sera chamada. texto2 é undefined.
	function escreve2(texto) {
		console.log ('escreve2 - primeira funcao - ', texto);		
	}

	escreve2 ('ola mundo - 2!');

	function escreve2(texto, texto2) {
		console.log ('escreve2 - segunda funcao - ', texto, texto2);
	}

	/* como funciona a precedencia - qual funcao é considerada em caso de mais de uma definicao:
	imagine:
	codigo-G;
	funcao a()={DEF#1}
	codigo-H;
	if (condicao-dinamica) { 
		funcao a()={DEF#2}
	}
	codigo-I;
	funcao a()={DEF#3}
	codigo-J;
	funcao a()={DEF#4}
	codigo-K;
	
	se condicao-dinamica for FALSE:
		Todos os codigos serao executados considerando "funcao a()={DEF#4}"
	se condicao-dinamica for TRUE:
		Codigos G e H serao executados considerando "funcao a()={DEF#4}"
		Codigos I J e K serao executados considerando "funcao a()={DEF#2}"
	
	sendo condicao dinamica gerada por um numero aleatorio gerado em tempo de execucao.
	Ou seja, DEF#1 e DEF#3 serao sempre ignoradas.
	
	Deduzo que: Ao executar, JS percorre as definicoes de funcao e elege a ultima.
	Mesmo que não haja chamada clássica ( x = f(); ) - testei isto imprindo a definicao da f com console.log .
	Se houver mudanca da definicao em um if: (testei if dinamico com numero aleatorio e testei if com true forçado)
		a definicao muda se o codigo entrar no if substitnuindo a definicao valiilda independente da posicao.
	
	ou seja: 
	1) em qualquer posicionamento, vale a ultma definicao da funcao;
	2) é possivel mudar dinamicamente a definicao da funcao. (if);
	
	-----------------
	na aula 12e - function precedencias - tem um teste mais detalhado. sobre em que momento a 
	declaração é chamada em tempo de execução.
	*/


	// 3 = aqu tbm, a segunda funcao sera chamada. texto2 é undefined.
	cl ('****** comecando os testes de precedencia' );
	
	// aqui, vai exibir a DEF#3. mesmo que esta linha seja comentada, a 
	// DEF#3 será considerada para qualquer outra chamada da funcao por default.
	escreve3 ('primeira chamada - antes de qualquer definicao.');

	//DEF#1 - esta funcao sera ignorada, pois temos outra definicao mais abaixo.
	function escreve3(texto) {
		console.log ('DEF#1 - ', texto);		
	}
	escreve3 ('segunda chamada - logo apos a DEF#1.');
	console.log ('definicao da funcao:', escreve3 );
	
	console.log ('aleatorio - se b>5, entra no if  b:', b = getRandomInt (1,10));
	
	if (b>5) {	
		function escreve3(texto) {
			console.log ('DEF#2 - if (b>5) - ', texto);		
		}
	}
	//esultado do teste do IF - ola mundo!');

	function escreve3(texto) {
		console.log ('DEF#3 - ', texto);		
	}
	escreve3 ('terceira chamada - logo apos a DEF#3.');
	console.log ('definicao da funcao:', escreve3 );

	
	/*  proximo passo, tratar o array.
	*/
	
	
	
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}