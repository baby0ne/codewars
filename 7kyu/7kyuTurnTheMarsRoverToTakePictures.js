function turn(current, target) {
   if ((current === 'S' && target === 'W')
      || (current === 'N' && target === 'E')
      || (current === 'W' && target === 'N')
      || (current === 'E' && target === 'S')) return 'right'
   else return 'left';
}