// exercicio.js

		////////////////////////////////////////////////////
		function cl (texto) {console.log (texto)};
		function dw (texto) {document.write (texto)};
		////////////////////////////////////////////////////

		/*
		aula09 - arrays.js

		file:///C:/rsr/lab/js-prog-a-bordo/index.html

		https://youtu.be/vrSEt5J4q2Y?t=3650
		*/
		
		var numeros = [ 5, 3, 12, 17, 10, 99 ];

		// array basico
		cl ('conhecendo o array');
		cl (`array todo ->  ${numeros}`);
		cl (numeros);
		cl (`pos 2 ->  ${numeros[2]}`);
		cl (`pos 5 ->  ${numeros[5]}`);
		cl (`pos 0 ->  ${numeros[0]}`);
		
		cl (`tamanho ->  ${numeros.length}`); 

		// pop e push
		var ret 
		cl ('------pop e push');
		cl (`retorno do pop :  ${ret = numeros.pop()}`);
		cl (`depois do pop ${numeros}`);
		numeros.push (ret);
		cl (`depois do push ${numeros}`);

		cl (`retorno do push é a posicao que entra ${numeros.push (98)}`);
		numeros.push (35);
		numeros.push (36);
		
		cl (`mais alguns push ${numeros}`);
		
		// eu vendo funcoes do "proto" no console.
		cl ('------funcoes do "proto" no console.');
		cl (`reverso          ${numeros.reverse()}`);
		cl (`sort de texto    ${numeros.sort()}`);

		// sliice
		cl ('------slice');
		cl (`array:`);
		cl (numeros);
		cl (`3 a 6(exclusive)`);
		cl (numeros.slice(3,6));
		cl (`3 a 5`);
		cl (numeros.slice(3,5+1));
		
		// omitindo segundo param
		cl (`omitindo 2o param.:`);
		cl (numeros.slice(5));		

		cl (`ultimos 3`);
		cl (numeros.slice(numeros.length-3,numeros.length));
		cl (numeros.slice(-3));
		
		// join
		cl (`------join:`);
		cl (`array:`);
		cl (numeros);
		cl (`join --/--`);
		cl (numeros.join('--/--'));
		cl (`join espaco em branco`);
		cl (numeros.join(' '));
		cl (`join vazio`);
		cl (numeros.join(''));
		
		// array como registro.
		cl (`------array como registro:`);
		var usuario = [
						'RAFAEL',
						'REIS',
						'RIO DE JANEIRO',
						1976,
						'BRASIL',
						'ANALISTA DE SISTEMAS',
						'<foto>',
						'BRASIL',
						2021
						];
		cl (`usuario`);
		cl (usuario);
		cl (usuario.push('RJ'));
		cl (usuario);

		// metodo includes - faz pesquisa - campo completo
		// retorna booleano
		cl ('--includes');
		cl ('BRASIL');
		cl( usuario.includes ('BRASIL'));
		cl ('JANEIRO');
		cl( usuario.includes ('JANEIRO'));
		cl ('RIO DE JANEIRO');
		cl( usuario.includes ('RIO DE JANEIRO'));
		

		// metodo indexOf - faz pesquisa - campo completo
		// retorna indice da 1a ocorrencia
		// -1 para nao encontrou.
		cl ('--indexOf');
		cl ('BRASIL');
		cl( usuario.indexOf ('BRASIL'));
		cl ('JANEIRO');
		cl( usuario.indexOf ('JANEIRO'));
		cl ('RIO DE JANEIRO');
		cl( usuario.indexOf ('RIO DE JANEIRO'));
		
		// trabalhando com dois arrays.
		cl ('--dois arrays');
		arr1 = ['RAFAEL', 'SILVEIRA', 'REIS', 1976];
		arr2 = ['RENATA', 'SOARES', 'LEMOS', 1971];
		console.log ('arr1', arr1);
		console.log ('arr2', arr2);
		
		var r;
		cl ('--concat');

		r = arr1.concat(arr2);
		cl (r);
		r = arr1.concat(arr2).concat(usuario);
		cl (r);
		r = arr1.concat(arr2, usuario);
		cl (r);

		cl ('--2d');
		r = [arr1, arr2];
		cl (r);
		cl ('search 1,1');
		cl (r[1][1]);
		cl ('search 0,1');
		cl (r[0][1]);

		cl ('--length');
		cl ('r.length');
		cl (r.length);
		cl ('r[0].length');
		cl (r[0].length);
		cl ('r[0][0].length - string');
		cl (r[0][0].length);

		
		// array spread
		cl ('');
		cl ('--SPREAD');
		r = [...arr1, arr2];
		cl (r);
		cl ('r[0][3]');		
		cl (r[0][3]);
		cl ('r[1][3]');		
		cl (r[1][3]);
		r = [arr1, ...arr2];
		cl (r);
		cl ('r[0][3]');		
		cl (r[0][3]);
		cl ('r[1][3]');		
		cl (r[1][3]);
		r = [...arr1, ...arr2];
		cl (r);
		r = [...arr1, ...arr2, ...usuario];
		cl (r);
		
		console.log ('arr1 - ', arr1);
		console.log ('arr1 - spread...', ...arr1);
		
		/* spread de um array é transformar 
		seus elementos em uma lista , 
		para passar para uma função, por exemplo 
		( reticencias na funcao...)
		ex:
		["a", "b", "C"] passa a um array com 3 elementos.
		"a", "b", "c" ( três variáveis)
		*/
		


		// array destructuring ECS6
		cl ('');
		cl ('--destructuring');

		cl ('na mao');		
		var nome = usuario[0];
		var sobrenome = usuario[1];
		var nascimento = usuario[3];
		console.log ( nome, sobrenome, nascimento );
		
		cl ('no destructuring');
		//troquei os nomes das var para testar o funcionamento em detrimento 
		//das associacoes acima.
		var [sobrenome, nome, , ano, nacionalidade] = usuario;
		console.log ( nome, sobrenome, ano, nacionalidade );
		
		/* colchete só é array do lado direito do sinal de igual/atribuicao.
		do lado esquerdo, é destructuring
		*/
		
		/* destructuring é associar variáveis à esquerda em uma estrutura simliar ao array
		usando var com colchetes  e as variáveis podeem ser puladas com virgula em branco.
		temos
		var [a,b, ,d] = ["w", "x", "y", "z"]
		a= 'w';
		b= 'x';
		d= 'z';
		*/


/*

		var usuario = [
						'RAFAEL',
						'REIS',
						'RIO DE JANEIRO',
						1976,
						'BRASIL',
						'ANALISTA DE SISTEMAS',
						'<foto>',
						'BRASIL',
						2021
						];
*/