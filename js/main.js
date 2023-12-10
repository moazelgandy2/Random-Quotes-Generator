const quote = document.getElementById("quote");

const quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  },
  {
    quote: "“So many books, so little time.”",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
  },
  {
    quote:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
  },
];

const showedQuotes = [];

var quotesClone = quotes.slice();

index();

function index() {
  if (quotes.length == showedQuotes.length) {
    showedQuotes.length = 0;
    console.log("Reseted");
  }

  do {
    var randomIndex = Math.floor(Math.random() * quotes.length);
  } while (showedQuotes.includes(randomIndex));

  showedQuotes.push(randomIndex);

  var randomQuote = quotes[randomIndex].quote;

  quote.innerHTML = randomQuote;

  console.log("showed Quotes", showedQuotes);
}
