/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
 * This is an array of objects, which includes 5 objects defined using Literals!
***/
const quotes =[
  { 
    quote: 'Life is about making an impact, not making an income.',
    source: 'Kevin Kruse',
    citation: 'Twitter',
    year: 2016
  },
  { 
    quote: 'Whatever the mind of man can conceive and believe, it can achieve.',
    source: 'Napoleon Hill',
    year: 2009
  },
  { 
    quote: 'Strive not to be a success, but rather to be of value.',
    source: 'Albert Einstein',
    citation: 'Book - Issue of Life',
    year: 1995
    },
  {
    quote: 'I attribute my success to this: I never gave or took any excuse.',
    source: 'Florence Nightingale',
    citation: 'Forbes'

  },
  {
    quote: 'Every strike brings me closer to the next home run.',
    source: 'Babe Ruth',
    citation: 'Book - Issues of Life',
    year: 2017
  }
];


/***
 * `getRandomQuote` function
 * THis function generates a random Number to use in the print Quote (Function) to access object from array.
 * @returns the Object retrieving from the array using the quotes Array and randomNumber as an Index value.
***/
function getRandomQuote(){
  const randomNnumber = Math.floor(Math.random() * (quotes.length));
  return quotes[randomNnumber];
}


/***
 * `printQuote` function
***/
/**
 * This function at first calls the getRandomQuote Function and stores it into a new variable the returned Object.
 * Then we start using the keys and values of the object and adding it in to the Variable named HTML and eventually displaying it on the Web.
 * This program have two If statments to check about the Citation and Year Key!
 * @returns the quote and the other data, after accessing the Object from the Array of Objects
 */
const printQuote = () =>{
  let random = getRandomQuote();
  let html = `<p class="quote">${random.quote}</p>
              <p class="source">${random.source}
  `
if (random.citation){
  html = `<p class="quote">${random.quote}</p>
  <p class="source">${random.source}, 
  <span class="citaion">${random.citation}</span>
`
}
if (random.year){
  html += `<span class="year">${random.year}</span>
`
} else {
  html += `</p>`
}
return document.getElementById('quote-box').innerHTML = html;
}

// const rgb = () => {
//   return Math.floor(Math.random * 256);
// }
// function randomColor(value){
//   return `rgb${value()}, ${value()}, ${value()}`;
// }
// document.body.style.backgroundColor = randomColor(rgb);
/**
 * setInterval is a in-built function, which automatically generates a new quote from the list.
 * @param {function} printQuote is a function defined above.
 * @param {Number} is the counter number 10000 means 10 seconds 
 */
setInterval(printQuote, 10000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);