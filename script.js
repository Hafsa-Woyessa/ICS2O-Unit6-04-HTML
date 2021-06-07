let result = 0
let base1 = 0
let base2 = 0
let h = 0
// The "let" varibales are where users enter their specific numbers and where the results are shown

document.getElementById('button').addEventListener('click', multiplication)
// This line ensures the code calculates once the button is clicked

function multiplication () {
  base1 = document.getElementById('base1').value

  base1 = parseInt(base1)

  base2 = document.getElementById('base2').value

  base2 = parseInt(base2)

  h = document.getElementById('h').value

  h = parseInt(h)

  result = 1 / 2 * (base1 + base2) * h

  result = parseInt(result)

  alert(result)
}
// The function result tells the code what equation to follow and gives us the result of our equation. The alert button displays the result of the equation on top of the users screen.
