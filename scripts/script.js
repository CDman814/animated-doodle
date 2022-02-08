$(document).ready(function () {
  console.log("doc is ready");
 
  let revName; 


  $
    ("#btnGetFacts").click(function (){

      // handle it if input is blank

      let userName = $("#userName").val();
      let coolFacts = generateCoolNameFacts(userName); 

      console.log('you clicked the button');
      console.log('from ln 12', generateCoolNameFacts(userName));
      
      $("#coolNameFactsOutput").html(coolFacts);
  


    });


});

function generateCoolNameFacts(userName) {
  let coolFacts = ''; 
  
  coolFacts = nameLength(userName);
  coolFacts += " <br> " + nameStart(userName);
  coolFacts += "<h3> " + nameEnd(userName) + "</h3>";
  coolFacts += findSpiritAnimal(userName);

  console.log("initialized the'm coolFacts variable: " + coolFacts); 

  return coolFacts;
}

function nameLength(name) {
  return "Your name is " + name.length + " letters long!"; 
}

function nameStart(name) {
  return "the first letter of your name is " + name[0]
}

function nameEnd(name) {
  
  let lastIndex = name.length - 1

  return "the last letter of your name is " + name[lastIndex]
}


function findSpiritAnimal(name) {
  //some control structure (if/then?)
  if (name[0] == 'A' || name[0] == 'E' || name[0] == 'I' || name[0] == 'O' || name[0] == 'U') {
    return "your spirit animal is a tiger"
  }

  else {
    return "your spirit animal is a lion"
  }

//some arbitrary thing about name (if starts with vowel?)

//then this animal

//or other animal
}
