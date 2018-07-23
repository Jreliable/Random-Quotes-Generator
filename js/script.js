// FSJS - Random Quote Generator
var usedQuotes = []
// Create the array of quote objects and name it quotes
var quotes = [
  {
    quote: 'The journey of a thousand miles begins with one step.',
    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: 'c 551 bc - c 479 bc',
    category: "Inspiration"
  },
  {
    quote: 'He who knows best knows how little he knows.',
    source: 'Thomas Jefferson',
    citation: 'Monticello.org',
    year: '1812',
    category: 'Inspiration'
  },
  {
    quote: 'A man may die, nations may rise and fall, but an idea lives on.',
    source: 'John F. Kennedy',
    citation: 'presidency.ucsb.edu',
    year: '1963',
    category: 'Inspiration'
  },
  {
    quote: 'If you spend too much time thinking about a thing, you\'ll never get it done',
    source: 'Bruce Lee',
    citation: 'Wikipedia',
    year: '1940 - 1973',
    category: 'Inspiration'
  },
  {
    quote: 'All that we see or seem is but a dream within a dream',
    source: 'Edgar Allan Poe',
    citation: 'Wikipedia',
    year: '1849',
    category: 'Inspiration'
  },
  {
    quote: 'We are always getting ready to live but never living',
    source: 'Ralph Waldo Emerson',
    citation: 'Wikipedia',
    year: '1803 - 1882',
    category: 'Inspiration'
  },
  {
    quote: 'The only way to make sense out of change is to plunge into it, move with it, and join the dance.',
    source: 'Alan Watts',
    citation: 'Wikipedia',
    year: '1915 - 1973',
    category: 'Wisdom'
  },
  {
    quote: 'Real generosity toward the future lies in giving all to the present.',
    source: 'Albert Camus',
    citation: 'The Rebel: An Essay on Man and Revolt',
    year: '1951',
    category: 'Inspiration'
  },
  {
    quote: 'Today you are you! That is truer than true! There is no one alive who is you-er than you!',
    source: 'Dr. Seuss',
    citation: 'Happy Birthday To You!',
    year: '1959',
    category: 'Inspiration'
  },
  {
    quote: 'Stay hungry, stay foolish.',
    source: 'Steve Jobs',
    citation: 'Stanford Commencement Speech',
    year: '2005',
    category: 'Inspiration'
  }
];
// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote() {
  var quoteIndex = math.floor(math.random() * quotes.length);
  var splicedQuote = quotes.splice(quoteIndex, 1)[0];
  usedQuotes.push(splicedQuote);
  if (quotes.length === 0) {
    quotes = usedQuotes;
    usedQuotes = [];
  }
  return splicedQuote;
}


// Create the printQuote funtion and name it printQuote
function printQuote() {
  var selectedRandomQuote = getRandomQuote();
  var html = '<p class="quote">' + selectedRandomQuote.quote + '</p>'
  + '<p class="source">' + selectedRandomQuote.source
  + '<span class="citation">' + selectedRandomQuote.citation + '</span>'
  + '<span class="year">' + selectedRandomQuote.year + '</span>' + '<span class="category">'
  + selectedRandomQuote.category + '</span>' + '</p>';
  document.getElementById('quote-box').innerHTML = html;
  setBackgroundColor();
  console.log("Number of viewed quotes: " + viewedQuotes.length);
  console.log("Number of quotes remaining: " + quotes.length);
}
// cal the functions
getRandomQuote();
printQuote();
// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
