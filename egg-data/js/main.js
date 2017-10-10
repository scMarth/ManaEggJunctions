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

   //outHTML += "num eggs:" + data.length;
   // 42 eggs in total

   var eggHTML = [];

   for (var key in data){
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

            outHTML += "<br>";

            outHTML += "<div class='spellCountDiv'>";
               outHTML += "<span class='spellCountSpan'>Spell Count&nbsp</span>";
               outHTML += "<span class='spellCountNum'>" + data[key].spells.length + "</span>";
            outHTML += "</div>";

            outHTML += "<br>";
            outHTML += "<br>";

            outHTML += "<span class='centerText'>Magic List</span>";
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
               for (j=0; j<spells.length; j++){
                  outHTML += spells[j];
               }
               outHTML += "</table>";


            outHTML += "</div>";

            outHTML += "<br>";

            outHTML += "<br>";
            outHTML += "<span class='centerText'>Mana Egg Junction</span>";

            outHTML += "<br>";

            outHTML += "<table class='junctionTable'>";
            for (j=0; j<data[key].junctionPairs.length; j++){
               outHTML += "<tr>";

               var leftEgg = data[key].junctionPairs[j][0];
               var rightEgg = data[key].junctionPairs[j][1];

               var leftEggImg = "";
               var rightEggImg = "";

               leftEggImg += "small-" + eggColors[leftEgg];
               rightEggImg += "small-" + eggColors[rightEgg];

               outHTML += "<td class='leftEgg'><div class='inlineDiv leftJunction " + leftEggImg + "'></div> " + leftEgg + " Egg</td>";
               outHTML += "<td class='junctionPlus'>+</td>";
               outHTML += "<td class='rightEgg'><div class='inlineDiv rightJunction " + rightEggImg + "'></div> " + rightEgg + " Egg</td>";

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