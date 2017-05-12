var total1 = 0
var total2 = 0

function rolldice1() {
  var die1 = Math.floor(Math.random() * 6) + 1
  if (die1 > 1) {
    alert("You scored" + die1)
    total1 = total1 + die1
    alert("Your total is" + total1)
    return total1

  } else {
    alert("You roled a 1 so you get zero points")
    total1 = total1
    return total1
  }

}

function rolldice2() {
  var die2 = Math.floor(Math.random() * 6) + 1
  if (die2 > 1) {
    alert("You scored" + die2)
    total2 = total2 + die2
    alert("Your total is" + total2)
    return total2

  } else {
    alert("You roled a 1 so you get zero points")
    total2 = total2
    return total2
  }

}
