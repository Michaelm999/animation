var score = 0
$(document).ready(function(){
    $("#go").click(function(){
    $('.start').css({'visibility': 'hidden'})
    $('.gameplay').css({'visibility': 'visible'})
    setTimeout(function(){
      $('.gameplay').css({'visibility': 'hidden'})
      $('.scoreboard').css({'visibility': 'visible'})
      document.querySelector('#pscore').innerHTML = "Your score is "+ score}, 30000)
  });
});

$(document).ready(function(){
    $(".moving").click(function(){
      score+=1;
      console.log(score);
    });
    $(".moving-up").click(function(){
      score+=1;
      console.log(score);
    });
});

$(document).ready(function(){
    $("#replay").click(function(){
    $('.scoreboard').css({'visibility': 'hidden'})
    $('.gameplay').css({'visibility': 'visible'})
    score = 0
    setTimeout(function(){
      $('.gameplay').css({'visibility': 'hidden'})
      $('.scoreboard').css({'visibility': 'visible'})
      document.querySelector('#pscore').innerHTML = "Your score is "+ score}, 30000)
  });
});
