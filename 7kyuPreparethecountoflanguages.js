let list = [
   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

function countLanguages(list) {
   let answer = {

   };

   for (let i = 0; i < list.length; i++) {
      if (list[i].language === "C") {
         answer.C = 0;
      } else if (list[i].language === "JavaScript") {
         answer.JavaScript = 0;
      } else if (list[i].language === "Ruby") {
         answer.Ruby = 0;
      } else if (list[i].language === "Python") {
         answer.Python = 0;
      } else if (list[i].language === "Clojure") {
         answer.Clojure = 0;
      } else if (list[i].language === "Java") {
         answer.Java = 0;
      } else if (list[i].language === "PHP") {
         answer.PHP = 0;
      }
   }

   for (let i = 0; i < list.length; i++) {
      if (list[i].language === "C") {
         answer.C++;
      } else if (list[i].language === "JavaScript") {
         answer.JavaScript++;
      } else if (list[i].language === "Ruby") {
         answer.Ruby++;
      } else if (list[i].language === "Python") {
         answer.Python++;
      } else if (list[i].language === "Clojure") {
         answer.Clojure++;
      } else if (list[i].language === "Java") {
         answer.Java++;
      } else if (list[i].language === "PHP") {
         answer.PHP++;
      }
   }

   return answer;
}

