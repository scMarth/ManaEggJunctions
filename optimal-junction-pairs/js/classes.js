// constructor
function eggNode(name){
   this.name = name;
   this.minCost = -1;
   this.parentJunction = null;
   this.childJunctions = [];
   this.explored = false;
   this.unexploredJunctionList = [];
   this.junctionPath = {};
}

// constructor
function junction(){
   this.minCost = -1;
   this.parentEggNode = null;
   this.leftChildEgg = null;
   this.rightChildEgg = null;
   this.junctionID; // invariant: must be the respective index in eggData junctionPairs array
   this.explored = false;
}



/*

eggNodes need 'name' field for 'Holy' 'Fenrir' etc.

exploreEgg should explore an egg given a string name

exploreEggNode should explore an egg given an eggNode struct


*/