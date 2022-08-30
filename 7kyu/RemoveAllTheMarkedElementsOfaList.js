Array.prototype.remove_ = function (integer_list, values_list) {
   for (let i = 0, j; i < values_list.length; i++) {
      for (let k = 0; k < integer_list.length;) {
         j = integer_list.indexOf(values_list[i]);
         if (j >= 0) {
            integer_list.splice(j, 1);            
         } else {
            k++;
         }
      }
   }

   return integer_list;
}