// $ = jQuery's way of naming its stuff.
// $( ... ) = what's inside () is the "object" we are messin with
// .ready() = method of $jQ
// .ready( ... ) = argument/parameter passed to that method
// function(){} in the method is an IIFE = Immediately Invoked F/n Expresson
$(document).ready(function () {
  // alert("page is ready");
  console.log("doc is ready");
  
 
  let wowCount = 0;   
  let wowMsg; 
  
//   $("li") 
//   $('#specificID')
// $('.someClass ')


  $("#dogeDiv").draggable(
    {
      containment: "#dogeHouse",
      scroll: false,
      stop: function () {
        // wowCount = wowCount + 1; 
        wowCount++; //same as line 19 
        console.log("we are starting! " + "here is wowCount:" + wowCount);
        
        if (wowCount <= 4) {
          wowMsg = "your wow is weak sauce";
        }
        else if (4 < wowCount < 8)
        {
          wowMsg = "your wow is whatever";
        }
        
        $("#wowOutput").text(wowMsg + "(" + wowCount + ")");
    }
  }
  );

  

  let userGreeting = "Hello there, "; 

  $("button").click(function () {
    userGreeting += $("#fname").val();

    $("#greetingOutput").text(userGreeting);
  });
});