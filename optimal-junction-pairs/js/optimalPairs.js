var eggDataDiv = $('#egg-data-div')[0];

$(window).on("load", function(){
   main();
});

function renderEggData(data){

   var eggHTML = [];

   // get a list of keys sorted first in increasing order of egg level
   // then by alphabetical order on egg name
   sortedKeys = []
   for (var i=0; i<=9; i++){
      list_of_eggs = [];

      for (var key in data)
         if (i == data[key].eggLevel)
            list_of_eggs.push(key);

      list_of_eggs = list_of_eggs.sort();
      for (var j in list_of_eggs)
         sortedKeys.push(list_of_eggs[j]);
   }

   for (var i in sortedKeys){
      var key = sortedKeys[i];
      if (data.hasOwnProperty(key)){
         var outHTML = "";
         outHTML += "<div class='eggDiv'>";
            var eggName = key;

            outHTML += "<div class='eggTitle'>";
               outHTML += "<div class='medium-" + eggColors[eggName] + " eggImage'></div>";
               outHTML += "<div class='eggNameDiv'>";
                  outHTML += eggName + " Egg" + " (Level <span class='mintBoldBig'>" + data[key].eggLevel + "</span>)";
               outHTML += "</div>";
            outHTML += "</div>";
            // outHTML += "<br>";
            outHTML += "<span class='centerText2'>Minimum Cost: " + optimal_pairs_vars.min_eggs_to_make[key] + "</span><br>";
            outHTML += "<span class='centerText'>Mana Egg Junctions:</span>";
            outHTML += "<br>";
            outHTML += "<table class='junctionTable'>";

            for (j=0; j<data[key].junctionPairs.length; j++){
               if (optimal_pairs_vars.optimal_pairs[eggName].includes(j)) outHTML += "<tr class='optimalPair'>";
               else outHTML += "<tr>";

               var leftEgg = data[key].junctionPairs[j][0];
               var rightEgg = data[key].junctionPairs[j][1];

               var leftEggImg = "";
               var rightEggImg = "";

               leftEggImg += "small-" + eggColors[leftEgg];
               rightEggImg += "small-" + eggColors[rightEgg];

               outHTML += "<td class='leftEgg'><div class='inlineDiv leftJunction " + leftEggImg + "'></div> ";
               outHTML += leftEgg + " Egg (Level <span class='mintBold'>" + data[leftEgg].eggLevel + "</span>)</td>";
               outHTML += "<td class='junctionPlus'>+</td>";
               outHTML += "<td class='rightEgg'><div class='inlineDiv rightJunction " + rightEggImg + "'></div> ";
               outHTML += rightEgg + " Egg (Level <span class='mintBold'>" + data[rightEgg].eggLevel + "</span>)</td>";

               outHTML += "</tr>";
            } 
            outHTML += "</table>";
         outHTML += "</div>";
         eggHTML.push(outHTML);
      }
   }

   var outHTML = "";
   outHTML += "<div class='leftColumn'>";
   for (i=0; i<(eggHTML.length / 2); i++) outHTML += eggHTML[i];
   outHTML += "</div>";

   outHTML += "<div class='rightColumn'>";
   for (i=(eggHTML.length / 2); i<eggHTML.length; i++) outHTML += eggHTML[i];
   outHTML += "</div>";


   eggDataDiv.insertAdjacentHTML('beforeend', outHTML);
}

function main(){
   renderEggData(eggData);
}