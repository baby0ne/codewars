function direction(facing, turn) {
   debugger
   let dir = {
      '0': 'N',
      '1': 'NE',
      '2': 'E',
      '3': 'SE',
      '4': 'S',
      '5': 'SW',
      '6': 'W',
      '7': 'NW'
   }
   let compass = {
      'N': 0,
      'NE': 1,
      'E': 2,
      'SE': 3,
      'S': 4,
      'SW': 5,
      'W': 6,
      'NW': 7
   }
   
   let position = compass[facing];
   let numberOfTurns = turn / 45;

   for (let i = 0, j = numberOfTurns > 0 ? 1 : -1; i < Math.abs(numberOfTurns); i++){
      position += j;

      if (position < 0) position = 7;
      if (position > 7) position = 0;
   }

   return dir[String(position)];
}