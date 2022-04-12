function sameCase(a, b) {
   if (!(a.toUpperCase() != a.toLowerCase()) || !(b.toUpperCase() != b.toLowerCase())) return -1;

   if (a === a.toUpperCase() && b === b.toUpperCase()) return 1;
   if (a === a.toLowerCase() && b === b.toLowerCase()) return 1;

   return 0;
}