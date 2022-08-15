   function pingPong(sounds) {
      const pingPongArray = sounds.split('-');
      let mrPong = 0;
      let mrPing = 0;
      let lastBad = 'empty'
      for (let i = 0; i < pingPongArray.length; i++) {
         if (pingPongArray[i + 1] !== 'pong' && pingPongArray[i + 1] !== 'ping' && pingPongArray[i] === 'ping') {
            lastBad = 'ping';
            for (let j = i, k = 0; k < 1; j--) {
               if (pingPongArray[j - 1] !== 'pong' && pingPongArray[j - 1] !== 'ping' && pingPongArray[j] === 'pong') {
                  mrPong++;
                  k = 1;
               } else if (pingPongArray[j - 1] !== 'pong' && pingPongArray[j - 1] !== 'ping' && pingPongArray[j] === 'ping'){
                  k = 1;
               }
            }
         }
         if (pingPongArray[i + 1] !== 'pong' && pingPongArray[i + 1] !== 'ping' && pingPongArray[i] === 'pong') {
            lastBad = 'pong';
            for (let j = i, k = 0; k < 1; j--) {
               if (pingPongArray[j - 1] !== 'pong' && pingPongArray[j - 1] !== 'ping' && pingPongArray[j] === 'ping') {
                  mrPing++;
                  k = 1;
               } else if (pingPongArray[j - 1] !== 'pong' && pingPongArray[j - 1] !== 'ping' && pingPongArray[j] === 'pong') {
                  k = 1;
               }
            }
         }
      }

      if (mrPing > mrPong) {
         return 'ping';
      } else if (mrPong > mrPing) {
         return 'pong';
      } else if (mrPong === mrPing && lastBad === 'pong') {
         return 'ping';
      } else if (mrPong === mrPing && lastBad === 'ping') {
         return 'pong';
      }
   }
   debugger;
   let result = pingPong("pong-ping-bink-ping-pong-donk");