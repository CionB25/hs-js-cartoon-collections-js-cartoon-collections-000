function startsWithB(words) {
  var array = []
  for (var i = 0; i < words.length; i++)
    if words[i].include?(b)
  array.push(words[i])
    return array
  
}

function dwarfRollCall(dwarves) {
var array = []
for (var i = 0; i < dwarves.length; i++) {
  array.push(`${i + 1}. ${dwarves[i]} `)
}
return array.join("")
}

function summonCaptainPlanet(planeteerCalls){
var array = []
for (var i = 0; i < planeteerCalls.length; i++) {
  array.push(`${planeteerCalls[i].toUpperCase}!`)
}
return array
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4)
      return true;
    else
      return false;
  }
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert" || foods[i] === "swiss")
      return foods[i];
  }
  return "no cheese!";
}
