var eggDataDiv = $('#egg-data-div')[0];

$(window).on("load", function(){
   main();
});

function renderEggData(data){

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

            outHTML += "<span class='centerText'>Mana Egg Junction</span>";

            outHTML += "<br>";

            outHTML += "<table class='junctionTable'>";
            for (j=0; j<data[key].junctionPairs.length; j++){


               if (optimalPairs[eggName].includes(j)) outHTML += "<tr class='optimalPair'>";
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
   //getOptimalPairs();
   renderEggData(eggData);

   /*
   console.log("Flare " + minEggs('Flare'));
   console.log("Aqua " + minEggs('Aqua'));
   console.log("Wind " + minEggs('Wind'));
   console.log("Stone " + minEggs('Stone'));
   */

   //debugDump();
}


/*
// returns the minimum amount of base eggs (level one eggs) needed to make the input egg
function minEggs(eggName){
   console.log("minEggs: " + eggName);
   if (eggData[eggName].eggLevel == 1){
      return 1;
   }else{
      if (visitedEggs[eggName] == 1){
         return minEggsToMake[eggName];
      }else{

         pairs = eggData[eggName].junctionPairs;

         var runningMin = -1;
         var currLevel = eggData[eggName].eggLevel;

         // iterate through all egg's junction pairs
         for (var i=0; i<pairs.length; i++){

            var leftEgg = pairs[i][0];
            var rightEgg = pairs[i][1];

            var leftLevel = eggData[leftEgg].eggLevel;
            var rightLevel = eggData[rightEgg].eggLevel;

            if (currLevel == 2){
               if (leftLevel == 1 && rightLevel == 1){

                  for (var j=0; j<pairs.length; j++){
                     if (eggData[pairs[j][0]].eggLevel == 1 && eggData[pairs[j][1]].eggLevel == 1){
                        optimalPairs[eggName].push(j);
                     }
                  }

                  visitedEggs[eggName] = 1;
                  minEggsToMake[eggName] = 2;
                  return 2;
               }
            }

            var a = minEggs(leftEgg);
            var b = minEggs(rightEgg);

            var numEggs = a + b;

            if (runningMin == -1) runningMin = numEggs;
            else runningMin = Math.min(runningMin, numEggs);
         }

         // only after iterating through all pairs can we get the minimum
         // now we look for cases where there is more than one minimum
         for (var i=0; i<pairs.length; i++){
            var leftEgg = pairs[i][0];
            var rightEgg = pairs[i][1];

            var a = minEggs(leftEgg);
            var b = minEggs(rightEgg);

            var numEggs = a + b;

            if (runningMin == numEggs) optimalPairs[eggName].push(i);
         }
         visitedEggs[eggName] = 1;
         minEggsToMake[eggName] = runningMin;

         return runningMin;
      }

   }
}
*/


/*
function getOptimalPairs(){
   
   // for (var lvl=1; lvl<eggLevels.length; lvl++){
   //    console.log("LEVEL " + lvl);
   //    for (var i=0; i<eggLevels[lvl].length; i++){
   //       name = eggLevels[lvl][i];
   //       minEggs(name);
   //       console.log("blah " + name);
   //    }
   // }
   

   for (var lvl=1; lvl<3; lvl++){
      console.log("LEVEL " + lvl);
      for (var i=0; i<eggLevels[lvl].length; i++){
         name = eggLevels[lvl][i];
         minEggs(name);
         console.log("blah " + name);
      }
   }

}
*/


// for each egg, store an array telling which indeces of its junctions are the
// optimal junction pairs
//
// e,g, if the minimum cost way to make a Heat egg is the first junction in
// eggData['Heat'].junctionPairs[] is listed in junctionPairs[0] (the first junction pair)
// then optimalPairs['Heat'] will be an array containing the single integer 0 (for index 0)
//
// if there are more, for example, 2 junction pairs both are the minimum cost junctions, 
// the array will contain indeces for both of those junctions

var optimalPairs = {
   "Holy" : [],
   "Fenrir" : [],
   "Protect" : [],
   "Astral" : [],
   "Dragon" : [],
   "Chaos" : [],
   "Booster" : [],
   "Flare" : [],
   "Wind" : [],
   "Aqua" : [],
   "Stone" : [],
   "Dust" : [],
   "Decrease" : [],
   "Lava" : [],
   "Heat" : [],
   "Mist" : [],
   "Sand" : [],
   "Burst" : [],
   "Darkness" : [],
   "Bomb" : [],
   "Thunder" : [],
   "Frost" : [],
   "Leaf" : [],
   "Restore" : [],
   "Void" : [],
   "Star" : [],
   "Lightning" : [],
   "Icicle" : [],
   "Forest" : [],
   "Fairy" : [],
   "Calamity" : [],
   "Volcano" : [],
   "Cyclone" : [],
   "Rainbow" : [],
   "Gravity" : [],
   "Life" : [],
   "Ether" : [],
   "Cluster" : [],
   "Photon" : [],
   "Blizzard" : [],
   "Soul" : [],
   "Crown" : []
}


// for each egg, store whether or not we have determined its optimal junction pairs
// false = hasn't been visited
// true = has been visited

var visitedEggs = {
   "Holy" : false,
   "Fenrir" : false,
   "Protect" : false,
   "Astral" : false,
   "Dragon" : false,
   "Chaos" : false,
   "Booster" : false,
   "Flare" : true,
   "Wind" : true,
   "Aqua" :true,
   "Stone" : true,
   "Dust" : false,
   "Decrease" : false,
   "Lava" : false,
   "Heat" : false,
   "Mist" : false,
   "Sand" : false,
   "Burst" : false,
   "Darkness" : false,
   "Bomb" : false,
   "Thunder" : false,
   "Frost" : false,
   "Leaf" : false,
   "Restore" : false,
   "Void" : false,
   "Star" : false,
   "Lightning" : false,
   "Icicle" : false,
   "Forest" : false,
   "Fairy" : false,
   "Calamity" : false,
   "Volcano" : false,
   "Cyclone" : false,
   "Rainbow" : false,
   "Gravity" : false,
   "Life" : false,
   "Ether" : false,
   "Cluster" : false,
   "Photon" : false,
   "Blizzard" : false,
   "Soul" : false,
   "Crown" : false
}

// for each egg, how many level one eggs do you need to produce it?
// level one eggs are defined as having 1 cost, because you can't
// produce them from other eggs

var minEggsToMake = {
   "Holy" : 0,
   "Fenrir" : 0,
   "Protect" : 0,
   "Astral" : 0,
   "Dragon" : 0,
   "Chaos" : 0,
   "Booster" : 0,
   "Flare" : 1,
   "Wind" : 1,
   "Aqua" : 1,
   "Stone" : 1,
   "Dust" : 0,
   "Decrease" : 0,
   "Lava" : 0,
   "Heat" : 0,
   "Mist" : 0,
   "Sand" : 0,
   "Burst" : 0,
   "Darkness" : 0,
   "Bomb" : 0,
   "Thunder" : 0,
   "Frost" : 0,
   "Leaf" : 0,
   "Restore" : 0,
   "Void" : 0,
   "Star" : 0,
   "Lightning" : 0,
   "Icicle" : 0,
   "Forest" : 0,
   "Fairy" : 0,
   "Calamity" : 0,
   "Volcano" : 0,
   "Cyclone" : 0,
   "Rainbow" : 0,
   "Gravity" : 0,
   "Life" : 0,
   "Ether" : 0,
   "Cluster" : 0,
   "Photon" : 0,
   "Blizzard" : 0,
   "Soul" : 0,
   "Crown" : 0
}

/*
function debugDump(){
   for (var key in visitedEggs){
      if (visitedEggs.hasOwnProperty(key)){
         console.log(key + " " + visitedEggs[key]);
      }
   }

   for (var key in optimalPairs){
      if (optimalPairs.hasOwnProperty(key)){
         console.log(key + " " + optimalPairs[key]);
      }
   }

   for (var key in minEggsToMake){
      if (minEggsToMake.hasOwnProperty(key)){
         console.log(key + " minEggsToMake: " + minEggsToMake[key]);
      }
   }
}
*/

// given a string containing the name of an egg. e.g. 'Flare', 'Wind', etc.
// find its minimum cost
//
// calls exploreEggNode and therefore has the same invariants

function exploreEgg(eggName){
   var rootEgg = new eggNode(eggName);
   exploreEggNode(rootEgg);
}

// given an eggNode called 'rootEgg', find its minimum cost
//
// invariants to achieve: any eggNode that had exploreEgg called on it
// will have its respective egg ('Flare', 'Wind', etc.) visited, and
// therefore its optimal junction pairs determined

function exploreEggNode(rootEgg){
   if (rootEgg.name == ''){
      console.log("Error: exploreEggNode called on un-named egg.");
      return;
   }

   if (wasVisited(rootEgg.name)){
      return;
   }

   if (rootEgg.junctionPath[rootEgg.name] == 1){
      rootEgg.minCost = -1;
      rootEgg.explored = true;
      return;
   }

   var junctions = eggData[rootEgg.name].junctionPairs;

   // for all rootEgg's junction pairs
   for (var i=0; i<junctions.length; i++){
      var j = new junction();
      j.junctionID = i;

      addChildJunctionToEggNode(j, rootEgg);

      var leftEgg = new eggNode(junctions[i][0]);
      var rightEgg = new eggNode(junctions[i][1]);

      addLeftEggToJunction(leftEgg, j);
      addRightEggToJunction(rightEgg, j);

      leftEgg.junctionPath[rootEgg.name] = 1;
      rightEgg.junctionPath[rootEgg.name] = 1;

      if (wasVisited(leftEgg.name)){
         leftEgg.minCost = minCost(leftEgg.name);
         leftEgg.explored = true;
      }
      
      if (wasVisited(rightEgg.name)){
         rightEgg.minCost = minCost(rightEgg.name);
         rightEgg.explored = true;
      }

      if (wasVisited(leftEgg.name) && wasVisited(rightEgg.name)){
         j.minCost = leftEgg.minCost + rightEgg.minCost;
         if (rootEgg.minCost > j.minCost || rootEgg.minCost == -1)
            rootEgg.minCost = j.minCost;
         j.explored = true;
      }else{
         rootEgg.unexploredJunctionList.push(j);
      }
   }

   // while the root egg has unexplored junctions
   while (rootEgg.unexploredJunctionList.length > 0){
      var j = rootEgg.unexploredJunctionList.shift(); // remove first element

      if (j.leftChildEgg.explored == true && j.rightChildEgg.explored == false){
         if (isLevelOneEgg(j.rightChildEgg.name)){
            console.log("Error: Lv.1 Right Egg, both explored.");
         }else{
            var tsum = 2 + j.leftChildEgg.minCost;
            if (tsum > rootEgg.minCost){
               j.rightChildEgg.explored = true;
               j.explored = true;
               j.minCost = tsum;
               continue;
            }
         }
      }

      if (j.leftChildEgg.explored == false && j.rightChildEgg.explored == true){
         if (isLevelOneEgg(j.leftChildEgg.name)){
            console.log("Error: Lv.1 Left Egg, both explored.");
         }else{
            var tsum = 2 + j.rightChildEgg.minCost;
            if (tsum > rootEgg.minCost){
               j.leftChildEgg.explored = true;
               j.explored = true;
               j.minCost = tsum;
               continue;
            }
         }
      }

      if (j.leftChildEgg.explored == false){
         exploreEggNode(j.leftChildEgg) // RECUR LEFT
      }

      if (j.rightChildEgg.explored == false){
         exploreEggNode(j.rightChildEgg) // RECUR RIGHT
      }

      if (j.leftChildEgg.exploreed == true && j.leftChildEgg.minCost == -1){
         j.minCost = -1;
         j.explored = true;
         continue;
      } else if (j.rightChildEgg.explored == true && j.rightChildEgg.minCost == -1){
         j.minCost = -1;
         j.explored = true;
         continue;
      } else {
         j.minCost = j.leftChildEgg.minCost + j.rightChildEgg.minCost;
         if (rootEgg.minCost > j.minCost || rootEgg.minCost == -1)
            rootEgg.minCost = j.minCost;
         j.explored = true;         
      }
   }

   // set optimalPairs
   for (var i=0; i<rootEgg.childJunctions.length; i++){
      if (rootEgg.childJunctions[i].minCost == rootEgg.minCost){
         optimalPairs[rootEgg.name].push(rootEgg.childJunctions[i].junctionID);
      }
   }

   // set visitedEggs
   visitedEggs[rootEgg.name] = true;

   // set minEggsToMake
   minEggsToMake[rootEgg.name] = rootEgg.minCost;

}

function addChildJunctionToEggNode(childJunction, targetEggNode){
   childJunction.parentEggNode = targetEggNode;
   targetEggNode.childJunctions.push(childJunction);
}

function addParentJunctionToEggNode(parentJunction, targetEggNode){
   targetEggNode.parentJunction = parentJunction;
}

function addLeftEggToJunction(leftEggNode, targetJunction){
   leftEggNode.parentJunction = targetJunction;
   targetJunction.leftChildEgg = leftEggNode;
}

function addRightEggToJunction(rightEggNode, targetJunction){
   rightEggNode.parentJunction = targetJunction;
   targetJunction.rightChildEgg = rightEggNode;
}

function wasVisited(eggName){
   return visitedEggs[eggName];
}

function minCost(eggName){
   return minEggsToMake[eggName];
}

function isLevelOneEgg(eggName){
   switch (eggName){
      case "Flare": return true;
      case "Wind": return true;
      case "Aqua": return true;
      case "Stone": return true;
      default: return false;
   }
}