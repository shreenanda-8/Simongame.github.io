
    var level = 0;
    
       
    var gamePattern = [];
    var userClickedPattern = [];
    var buttonColours = ["red", "blue", "green", "yellow"];
   
    var started = false;
    
 
          
           level = 0;
      $("h1").text("Press Any Key to Start");
      $(document).on('keypress', function()
      {
             if (!started)
             {
                    NextSequence();
                    started  = true;
             }
           
      });
    

function nextSequence()
{
   
   level++;
  if (!(Array.isArray(gamePattern) && gamePattern.length))
  {
         level = 1;
  }
  
   $('h1').text("Level " + level);
   
    var randomNumber =  Math.floor(Math.random() * 4);
    var randomChosenCOlor = buttonColours[randomNumber];
    gamePattern.push(randomChosenCOlor);
    $("#" + randomChosenCOlor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   
     playSound(randomChosenCOlor);
     animatePress(randomChosenCOlor);
   userClickedPattern.length = 0;
}

$(".box").click(function()
{
   
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
  
    playSound(userChosenColour);
  
    animatePress(userChosenColour);
   
    iscorrect(userClickedPattern.length - 1);
})
 function iscorrect(Length)
 {
     if (gamePattern[Length] === userClickedPattern[Length])
     {
            if (gamePattern.length === userClickedPattern.length)
            {
                   NextSequence();
            }
     }
     else
     {
       var s = new Audio("sounds/wrong.mp3");
       s.play();
       $("body").addClass("game-over"); 
       endAnimation();
                                              
       gamePattern.length = 0;
                                              
       userClickedPattern.length = 0;
                                             
        setTimeout(function () {
               $("body").removeClass("game-over");
             }, 500);
             started = false;
              $("h1").text("Game over, Press Any Key to Start");
     }
 }

var delay;
function NextSequence()
{
delay = setTimeout(nextSequence, 2000);
}
function  playSound(name)
{
   
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
} 

function animatePress(currentColor) {

   
    $("#" + currentColor).addClass("pressed");
  
    
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
  function endAnimation()
  {
$("box").css(" background-color", "red"); 

  }

