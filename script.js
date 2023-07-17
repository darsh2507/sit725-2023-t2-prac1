function changeText() {

  let textArray = ['Hi', 'is', 'there', 'any', 'hiring?'];
  let randomNumber = Math.floor(Math.random() * textArray.length);
  console.log(randomNumber);
  document.getElementById('header').innerHTML = textArray[randomNumber];
  
}