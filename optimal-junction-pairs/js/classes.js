// constructor
function eggNode(){
   this.minCost = -1;
   this.parentJunction = null;
   this.childJunctions = [];
   this.expanded = false;
   this.unexpandedJunctionList = [];
   this.junctionPath = {};
}

function junction(){
   this.minCost = -1;
   this.parentEggNode = null;
   this.leftChildEgg = null;
   this.rightChildEgg = null;
   this.junctionID;
   this.expanded = false;
}