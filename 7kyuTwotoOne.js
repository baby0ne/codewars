function longest(s1, s2) {
   return (s1 + s2).split('').filter(onlyUnique).sort().join('')
}

function onlyUnique(value, index, self) {
   return self.indexOf(value) === index;
} 