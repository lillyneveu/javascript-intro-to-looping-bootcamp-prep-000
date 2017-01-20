function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop.')
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}
//Var and Let were interchangeable here
//Quotations, apostrophes and back ticks also appear to be interchangeable
//return array need to be after two curly braces
//i++ adds one to the variable
//Once the number reaches 25 the loop will cease
//Use a for loop when you know how many times you want your loop to run

function whileLoop(countdown) {
  while (countdown > 0) {
    console.log(--countdown)
  }
  return 'done'
}
//Use while loop when you do not know how many times you want your loop to run
//We just want it to run until the condition is met
//hyphens can be on either side of countdown in console.log
//no semi-colon needed after done

function doWhileLoop(array) {
  function maybeTrue() {
  return Math.random() >= 0.5
}
  do {
    array = array.pop
  } while (array.length > 0 && maybeTrue())
return array
}
//Use when you do not know how many times you want your loop to run but you
//know you want it to run once
//watch out for number of curly braces used
//three equals sign is not interchangeable after array, must be single equals
