// exercicio.js

		////////////////////////////////////////////////////
		function cl (texto) {console.log (texto)};
		function dw (texto) {document.write (texto)};
		////////////////////////////////////////////////////

		/*
		aula11 - for break continue.js

		arquivo de trabalho ( chama este JS )
		file:///C:/rsr/lab/js-prog-a-bordo/index.html

		aula atual ( com segundo corrente )
		https://youtu.be/IEx_e4M2vt4?t=600
		
		Playlist completa.
		https://www.youtube.com/watch?v=vrSEt5J4q2Y&list=PLbA-jMwv0cuWbas947cygrzfzHIc7esmp
		*/
		
		/*
		for ( comando inicial ; teste retornando true; comando final - de incremento ) 
			for (roda antes (01); roda antes (02; roda na 2a passada )
			for (var XX of array )
			nao incluiu o for in que itera sobre objetos.
		*/
	
		cl ('incremento simples');
		for ( var i=0 ; i<=10 ; i++ ) {
			cl (i);
		}

		cl ('incremento simples - outro exemplo');
		for ( var i=0 ; i<=50 ; i+=3 ) {
			cl (i);
		}

		cl ('rodando em um array');
		var arr = [3, 5, 10, 12, 2, 19, 21, 13];
		for (var i=0; i<arr.length; i++) {
			console.log (i, arr[i]);
		}
		
		cl ('array - decremento');
		var arr = [3, 5, 10, 12, 2, 19, 21, 13];
		for (var i = arr.length - 1; i >= 0; --i) {
			console.log (i, arr[i]);
		}
		
		cl ('desmembrando o for');
		var arr = [3, 5, 10, 12, 2, 19, 21, 13];
		var i=0;
		for (; ; ) {
			 console.log (i, arr[i]);
			 i++;
			 if (i>=arr.length) break;
		}
		
		cl ('array - decremento - revisado');
		var arr = [3, 5, 10, 12, 2, 19, 21, 13];
		for (var i = arr.length; i-- > 0; ) {
			console.log (i, arr[i]);
		}

		cl ('outra demo');
		i = 1;
		condicao = true;
		for (; condicao; ) {
			if (i % 17 === 0 ) condicao=false;
			cl (`valor ${i} - condicao booleana simples: ${condicao}`);
			i ++;
			
		}

		cl ('usando break');
		for (var i = 0; i<=100 ;i++) {
			if (i===8) break;
			cl (`valor ${i}`);
		}


		cl ('usando continue');
		for (var i = 0; i<=100 ;i++) {
			if (i>20 && i<80) continue;
			cl (`valor ${i}`);
		}
		/* para o uso de continue, pede a boa pratica de usar  os tres parametros 
		condicoes dentro do parenteses FOR e nao fora dele */
		
		//  for of percorre o arrey, dispensa o tratamendo do legth com -1 para alguns casos.
		// for of nao tem ponto e virgula.
		cl ('array - for of');
		var arr = [3, 5, 10, 12, 2, 19, 21, 13];
		for (var i of arr ) {
			console.log (`for of: ${i}`);
		}

		//equivalente sem o of
		cl ('array - for normal');
		var arr = [3, 5, 10, 12, 2, 19, 21, 13];
		for (var i = 0; i < arr.length; i++ ) {
			console.log (`for normal: ${arr[i]}`);
		}


		//loops entrelacados
		cl ('for - entrelacados');
		for (var i = 1; i <=5 ; i++ ) {
			for (var j = 12; j <=40 ; j++ ) {
				if (j >17 ) {
					// break vale para o for mais de dentro.
					break;
				}

				if (j %  2 === 0 ) {
					// j sendo par, faz o continue
					// continue vale para o for mais de dentro.
					continue;
				}
				
				console.log (`coordenada i: ${i}, j: ${j}`);
				
			}
		}


		//exercicio 3 e 5 do hackerRank
		cl ('for - 3 e 5 ping e pong');
		for (var i = 1; i <=100 ; i++ ) {
			switch (0) {
				case i%15 :
					console.log (`${i} - ping-pong`);
					break;
				case i%3 :
					console.log (`${i} - ping`);
					break;
				case i%5 :
					console.log (`${i} - pong`);
					break;
				default :
					console.log (`${i}`);
					break;
			}
		}
