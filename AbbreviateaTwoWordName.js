function abbrevName(name) {
   let letterLastName = "";
   for (let i = 0; i < name.length; i++){
      if(name[i] == " "){
         letterLastName = name[i + 1];
      }
   }
   return name[0].toUpperCase() + "." + letterLastName.toUpperCase();
}