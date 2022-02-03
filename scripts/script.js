$(document).ready(function () {

  console.log("doc is ready");

  let revName;

  $("#factButton").click(function () {
    //handle is left blank
    let userName = $("#userName").val();
    let coolFact = (generateNameFacts(userName));

    console.log("you clicked the button")
    console.log(generateNameFacts(userName));

    $("#coolNameFactOutput").html(coolFact);

  });

  let userGreeting = "Hello there, "; 

  $("button").click(function () {
    userGreeting += $("#fname").val();

    $("#greetingOutput").text(userGreeting);
  });
});

function generateNameFacts(userName) {

  coolFact = nameLength(userName);
  coolFact += " <br> " + nameStart(userName);
  coolFact += "<h3>" + nameEnd(userName) + "</h3>";
  // coolFact = 'wow, cool name!';
  console.log("initialized coolFact variable: " + coolFact);
  return coolFact;
}

function nameLength(name) {

  return "your name is " + name.length + " letters long!";
}

function nameStart(name) {

  return "your name starts with " + name[0];
}

function nameEnd(name) {

  let lastIndex = name.length - 1;

  return "your name ends with " + name[lastIndex];
}

//function findSpiritAnimal(name) {
  //some control structure (if/then?)

//some arbitrary thing about name (if starts with vowel?)

//then this animal

//or other animal
//}
