function myAddFunction(a, b){
    return (a + b);
}

console.log(myAddFunction(1, 2));

function mySecondAddFunction(a, b, c){
    return (a + b + c);
}

console.log(mySecondAddFunction(1, 2, 3));

function myThirdAddFunction(a, b, c, d){
    return (a + b + c + d);
}

console.log(myThirdAddFunction(1, 2, 3, 4));

var champOne = {
    "name": "Nasus",
    "legs": 2,
    "tails": 1,
    "enemies": ["Gator", "Rengar"]
  };
var champTwo = {
    "name": "Rengar",
    "legs": 2,
    "tails": 1,
    "enemies": ["Bugs", "Tanks"]
  };
var champThree = {
    "name": "Katarina",
    "legs": 2,
    "tails": 0,
    "enemies": ["Zhonya's", "CC"]
  };

  console.log (champOne.name);
  console.log (champTwo.name);
  console.log (champThree.name);
  console.log (champOne["enemies"]);
  console.log (champTwo["name"]);
  console.log (champThree["tails"]);

  champThree.broken = "Yes"
  champThree.name = "Zed"

