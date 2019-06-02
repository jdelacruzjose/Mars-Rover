var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
};
// ======================

function turnLeft (rover){
  console.log("turnLeft was called!");
  rover.travelLog.push("Turned Left");
  switch (rover.direction) {
      case "N":
      rover.direction = "W";
      console.log("Rover is now facing West");
      break;
    case "W":
      rover.direction = "S";
      console.log("Rover is now facing South");
      break;
    case "S":
      rover.direction = "E";
      console.log("Rover is now facing East");
      break;
    case "E":
      rover.direction = "N";
      console.log("Rover is now facing North");
      break;
    }
  }

function turnRight (rover){
  console.log("turnRight was called!");
  rover.travelLog.push("Turned Right")
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("Rover is ow facing East");
      break;
    case "E":
      rover.direction = "S";
      console.log("Rover is now facing South");
      break;
    case "S":
      rover.direction = "W";
      console.log("Rover is now facing West");
      break;
    case "E":
      rover.direction = "N";  
      console.log("Rover is now facing North");
      break;
  }
}

function moveForward (rover){
  console.log("moveForward was called")
  rover.travelLog.push("Moved Forward")
  switch (rover.direction) {
    case "W":
      rover.x = rover.x-1;
      break;
      case "E":
      rover.x = rover.x+1;
      break;
     case "N":
      rover.y = rover.y-1;
      break;
      case "S":
      rover.y = rover.y+1;
      break;  
    }
}
  
function listOfComands (text){
  for (var i=0; i<text.length; i++){
    if (text.charAt(i) ==="r") {
      turnRight (rover);
    }
    else if (text.charAt(i)==="l"){
      turnLeft (rover);
    }
    else if (text.charAt(i)==="f"){
      moveForward (rover);
    }
    else {
      console.log ("invalid Comand"); 
    }
  }
  console.log ("Rover tracking="+rover.travelLog);
}

listOfComands ("rffrfflfrff");