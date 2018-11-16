var eggDataDiv = $('#egg-data-div')[0];

$(window).on("load", function(){
   main();
});


function getIconImageDiv(str){
   switch (str){
      case "Mp": return "<div class='mp-icon'></div>";
      case "P": return "<div class='p-icon'></div>";
      case "H": return "<div class='h-icon'></div>";
      case "W": return "<div class='w-icon'></div>";
      case "S": return "<div class='s-icon'></div>";
      case "Ip": return "<div class='ip-icon'></div>";
      default: return "";
   }
}


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

   var maxSpells = "";
   var maxJunctions = "";

   for (var i in sortedKeys){
      var key = sortedKeys[i];
      currEggMinCostJunctionId = optimal_pairs_vars.optimal_pairs[key][0];
      currEggMinCost = optimal_pairs_vars.min_eggs_to_make[key][currEggMinCostJunctionId];

      if (maxSpells == "")
         maxSpells = key;
      else
         if (data[maxSpells].spells.length < data[key].spells.length)
            maxSpells = key;

      if (maxJunctions == "")
         maxJunctions = key;
      else
         if (data[maxJunctions].junctionPairs.length < data[key].junctionPairs.length)
            maxJunctions = key;

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
            outHTML += "<span class='centerText'>Magic List</span><br>";
            outHTML += "<div class='spellCountDiv'>";
               outHTML += "<span class='spellCountSpan'>Spell Count&nbsp</span>";
               outHTML += "<span class='spellCountNum'>" + data[key].spells.length + "</span>";
            outHTML += "</div>";

            outHTML += "<br>";      
         
            outHTML += "<div class='magicList'>";

               var spells = [];

               for (j=0; j<data[key].spells.length; j++){
                  var spellRow = "";

                  spellRow += "<tr>";
                  var elemImg = "<div class='inlineDiv " + spellData[data[key].spells[j]][2] + "'></div>";

                  spellRow += "<td>" + elemImg + data[key].spells[j] + "</td>";

                  if (data[key].hasOwnProperty('possibleSFs')){
                     spellRow += "<td>";
                        for (k=0; k<data[key].possibleSFs[j].length; k++){
                           spellRow += getIconImageDiv(data[key].possibleSFs[j][k]);
                        }
                     spellRow += "</td>";
                  }

                  spellRow += "<td class='mintBold'>" + spellData[data[key].spells[j]][0] + "</td>";
                  spellRow += "<td>" + spellData[data[key].spells[j]][1] + "</td>";
                  spellRow += "</tr>";

                  spells.push(spellRow);
               }

               outHTML += "<table class='spellTable'>";
               outHTML += "<tr><th>Name</th><th>Possible SFs</th><th>MP</th><th>Area</th></tr>";
               for (j=0; j<spells.length; j++){
                  outHTML += spells[j];
               }
               outHTML += "</table>";


            outHTML += "</div>";

            outHTML += "<br>";

            outHTML += "<br>";
            outHTML += "<span class='centerText'>Mana Egg Junctions</span>";
            outHTML += "<br>";

            // outHTML += "<span class='centerText2'>Minimum Cost: " + "<span class='spellCountNum'>" + optimal_pairs_vars.min_eggs_to_make[key] + "</span></span><br>";
            outHTML += "<div class='minCountDiv'>";
            outHTML += "<span class='minCountSpan'>Minimum Cost&nbsp</span>";
            outHTML += "<span class='minCountNum'>" + currEggMinCost + "</span>";
            outHTML += "</div><br>"

            outHTML += "<table class='junctionTable'>";
            outHTML += "<tr><th class='headerLeftEgg'>&nbspLeft Egg</th><th class='junctionPlus'>+</th><th class='headerRightEgg'>&nbspRight Egg</th><th class='headerMinCost'>Min. Cost</th></tr>"
            for (j=0; j<data[key].junctionPairs.length; j++){
               currJunctionCost = optimal_pairs_vars.min_eggs_to_make[key][j]

               if (optimal_pairs_vars.optimal_pairs[eggName].includes(j)) outHTML += "<tr class='optimalPair'>";
               else outHTML += "<tr>";

               var leftEgg = data[key].junctionPairs[j][0];
               var rightEgg = data[key].junctionPairs[j][1];

               var leftEggImg = "";
               var rightEggImg = "";

               leftEggImg += "small-" + eggColors[leftEgg];
               rightEggImg += "small-" + eggColors[rightEgg];

               outHTML += "<td class='leftEgg'><div class='inlineDiv leftJunction " + leftEggImg + "'></div> " + leftEgg + " Egg</td>";
               outHTML += "<td class='junctionPlus'>+</td>";
               outHTML += "<td class='rightEgg'><div class='inlineDiv rightJunction " + rightEggImg + "'></div> " + rightEgg + " Egg</td>";

               // outHTML += "<td><div class='cellMinCountDiv'><span class='cellMinCountSpan'>Cost:&nbsp</span><span class='cellMinCountNum'>" + currJunctionCost + "</span></div></td>"

               outHTML += "<td><span class='cellMinCountNum'>  " + currJunctionCost + "</span></td>"

               outHTML += "</tr>";
            } 
            outHTML += "</table>";
         outHTML += "</div>";
         eggHTML.push(outHTML);
      }
   }

   console.log("maxSpells", maxSpells);
   console.log("maxJunctions", maxJunctions);

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