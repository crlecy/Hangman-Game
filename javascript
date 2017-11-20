// hangman game 

prompt('Press any key!');


// list of bands.

var bandArr = ['The Afghan Whigs', 'Black Sabbath', 'Blood Orange', 
'Boards of Canada', 'The Cars','The Clash', 'Daft Punk', 'Brian Eno',
'FKA Twigs', 'The Flaming Lips', 'Fleet Foxes', 'Fugazi', 'Gang of Four', 
'Marvin Gaye', 'Merle Haggard', 'Happy Mondays', 'INXS', 'The Jam', 
'Joy Division', 'Kendrick Lamar', 'The Kinks', 'Little Richard', 'Manic Street Preachers', 
'Massive Attack', 'The National', 'Nirvana', 'Pet Shop Boys', 'Tom Petty', 'Prince', 
'Queen', 'Radiohead', 'Ramones', 'Run the Jewels', 'Slint', 'The Smiths', 'Spoon', 
'Bruce Springsteen', 'Talking Heads', 'Uncle Tupelo', 'The Velvet Underground', 'The Walkmen', 
'Ween', 'Yo La Tengo', 'Dwight Yoakam', 'ZZ Top']

// using above array we choose a random band.
var band = bandArr[Math.floor(Math.random() * bandArr.length)];


// global variables 

var s;
var count = 0;
var answerArray = [];


// filling the answer array with underscores as required
// number of underscores correlates to the randomly selected word in the array

function startUp() {
  for (var i = 0; i < sharkType.length; i++) {
    answerArray[i] = "_";
  }

  // putting in a string
  s = answerArray.join(" ");
  document.getElementById("answer").innerHTML = s;
}

function letter() {
  var letter = document.getElementById("letter").value;

  if (letter.length > 0) {
    for (var i = 0; i < band.length; i ++) {
      if (band[i] === letter) {
        answerArray[i] = letter;
      }
    }
    count++;
    document.getElementById("counter").innerHTML = "No of clicks: " + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
  }
  if(count>5) {
    document.getElementById("stat").innerHTML = "YOU LOSE!";
  }
}
