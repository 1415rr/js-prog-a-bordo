// exercicio.js

		////////////////////////////////////////////////////
		function cl (texto) {console.log (texto)};
		function dw (texto) {document.write (texto)};
		////////////////////////////////////////////////////

		/*
		aula10 - while break continue.js

		file:///C:/rsr/lab/js-prog-a-bordo/index.html

		https://youtu.be/IEx_e4M2vt4?t=25
		*/
		
		/*
		while / 
		break - sai do while / 
		continue - vai para a proxima iteracao do while
		*/


		// while simples
		cl ('while simples');
		var i = 0;
		while ( i < 5 ) {
			cl (i);
			i++;
		}
		
		// testando o break
		cl ('testando o break');
		var i = 0;
		while ( i < 15 ) {
			if (i===5) break;
			cl (i);
			i++;
		}
		
		//while com tratamentos diferenciados
		//3 = ping, / 5 = pong, / 3 e 5 = ping pong
		cl ('while com tratamentos diferenciados');
		var i = 1;
		while ( i <= 100 ) {
			switch (0) {
				case i % 15:
					cl (`${i} - PING-PONG`);
					break;
				case i % 3:
					cl (`${i} - PING`);
					break;
				case i % 5:
					cl (`${i} - PONG`);
					break;
				default:
					cl (`${i}`);
			}
				
			i++;
		}

		//testando o continue
		// acima de 50, so imprimo os pares.
		cl ('testando o continue');
		var i = 0;
		while ( ++i <= 100 ) {
			if (i>50) {
				if (i % 2 != 0) continue;
			} 
			cl(i)
		}