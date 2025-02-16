// Store quotes in key value pairs

let quotes = [
  {
    text: "Intelligence is the ability to adapt to change.",
    author: "Stephen Hawking"
  },
  {
    text: "What we know matters, but who we are matters more.",
    author: "Martin Luther King Jr."
  },
  {
    text: "There is no charm equal to tenderness of heart.",
    author: "Jane Austen"
  },
  {
    text: "The world will ask you who you are, and if you don't know, the world will tell you.",
    author: "Carl Jung"
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all.",
    author: "J.K. Rowling."
  },
  {
    text: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
    author: "H. Jackson Brown Jr."
  },
  {
    text: "Integrity is doing the right thing, even when no one is watching.",
    author: "C.S. Lewis."
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
  }
];
// Store the array in Local Storage
localStorage.setItem("quotes", JSON.stringify(quotes));

// Retrieve the array and parse it back to JavaScript objects
let storedQuotes = JSON.parse(localStorage.getItem("quotes"));

// Function to get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Update the quote text and author in the HTML
  document.querySelector(".quote").innerText = `“${randomQuote.text}”`;
  document.querySelector(".author").innerText = `- ${randomQuote.author}`;
}
// Add event listener to the button
document
  .querySelector(".generate-button")
  .addEventListener("click", getRandomQuote);
