function howMuchILoveYou(nbPetals) {
   let means = ["not at all", "I love you", "a little", "a lot", "passionately", "madly"];

   return means[nbPetals % 6];
}
