$(document).ready(function() {
  $("#items").submit(function(event) {
    event.preventDefault();
   var ranks = ["ace",2,3,4,5,6,7,8,9,10,"jack","queen","king"];
   var suits = ["clubs","diamonds","spades","hearts"];
   var cards = [];
   //   ranks.forEach(function(rank){
   //    suits.forEach(function(suit){
   //     cards.push(rank + " of " + suit);
   //   });
   // });
    for(var i = 0; i < ranks.length; i++) {
      for(var j = 0; j < suits.length; j++) {
        cards.push(ranks[i] + " of " + suits[j]);
      }
    }
     $("#orderedlist").text(cards);
  });
});
