//business logic
var player1 = "";
var player2 = "";

var throwdice = function() {
  return Math.floor(Math.random() * 6) + 1;
}

function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}

// checking for 1
Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.tempscore = 0;
    $("h2#alerts").text("Sorry " + this.playerName + " , you rolled a 1! Your turn is over!")
    // this.changeturn();
  } else {
    this.tempscore += this.roll;
    $("h2#alerts").text(this.playerName + "  you rolled a " + this.roll)
  }
}

// hold
Player.prototype.hold = function() {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  // this.changeturn();
  $("h2#alerts").text(this.playerName + " , your turn is over, pass the mouse!");
}

//  changing turn
// Player.prototype.changeturn = function () {
//   if (this.roll ===1) {
//     this.turn = false;
//   } else {
//     this.turn = true;
//   }
// }
// check for 100
Player.prototype.winnerCheck = function() {
  if (this.totalscore >= 100) {
    $("h2#alerts").text(this.playerName + "   You are the winner!");
  }
}

Player.prototype.newGame = function() {
  //debugger;
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playerName = "";
}

var clearValues = function() {
  $(".player1Name").val("");
  $(".player2Name").val("");
}

// Progress bar of player1
function move1() {
  var elem = document.getElementById("myBar1");

  var id = setInterval(frame, player1.totalscore);

  function frame() {
    if (player1.totalscore >= 100) {
      clearInterval(id);
    } else {
      player1.totalscore;
      elem.style.width = player1.totalscore + '%';
      elem.innerHTML = player1.totalscore * 1 + '%';
    }
  }
}

function move2() {
  var elem = document.getElementById("myBar2");

  var id = setInterval(frame, player2.totalscore);

  function frame() {
    if (player2.totalscore >= 100) {
      clearInterval(id);
    } else {
      player2.totalscore;
      elem.style.width = player2.totalscore + '%';
      elem.innerHTML = player2.totalscore * 1 + '%';
    }
  }
}


// User Interface
$(document).ready(function() {
  //   ('.message a').click(function(){
  //    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
  // });

  $(".login-form").submit(function(event) {
    event.preventDefault();


  // $("button#start").click(function(event) {

    player1 = new Player(true);
    player2 = new Player(false);

    $(".start-menu").fadeOut();
    $(".player-console").fadeIn();

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName = player1Name;
    player2.playerName = player2Name;

  });


  $("button#new-game").click(function(event) {
    $(".player-console").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#round-total-1").empty();
    $("#total-score-1").empty();
    $("#die-roll-1").empty();
    $("#round-total-2").empty();
    $("#total-score-2").empty();
    $("#die-roll-2").empty();
    $("#alerts").hide();

    $(".start-menu").show();
  });

  $("button#player1-roll").click(function(event) {
    player1.roll = throwdice();
    $("#die-roll-1").text(player1.roll);
    player1.rollone();
    $("#round-total-1").text(player1.tempscore);
    // $("#alerts").fadeOut("10000")
  });

  $("button#player2-roll").click(function(event) {
    player2.roll = throwdice();
    $("#die-roll-2").text(player2.roll);
    player2.rollone();
    $("#round-total-2").text(player2.tempscore);
    // $("#alerts").fadeOut("10000")
  });

  $("button#player1-hold").click(function(event) {
    player1.hold();
    $("#total-score-1").text(player1.totalscore);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
    player1.winnerCheck();
    move1();

  });

  $("button#player2-hold").click(function(event) {
    player2.hold();
    $("#total-score-2").text(player2.totalscore);
    $("#round-total-2").empty();
    $("#die-roll-2").empty();
    player2.winnerCheck();
    move2();

  });

});
