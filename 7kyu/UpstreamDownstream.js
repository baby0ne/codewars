function time(distance, boatSpeed, stream) {
   if (stream[0] === 'D') boatSpeed = boatSpeed + Number(stream.split(' ')[1])
   else boatSpeed = boatSpeed - Number(stream.split(' ')[1])
   debugger
   return Number((distance / boatSpeed).toFixed(2));
}