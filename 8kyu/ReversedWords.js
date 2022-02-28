function reverseWords(str) {
   let newArr = str.split(' ').reverse();
   str = '';
   for (let i = 0; i < newArr.length; i++) str += newArr[i] + ' '; 
   return str.trim(); 
}