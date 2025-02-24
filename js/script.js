// Store quotes in key value pairs
if (!localStorage.getItem("quotes")) {
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
    },

    {
      text: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt"
    }
  ];
  // Store the array in Local Storage
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Retrieve the array and parse it back to JavaScript objects
let storedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
console.log("lenght is", storedQuotes.length);

// Function to get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * storedQuotes.length);
  console.log("lenght is", storedQuotes.length);

  console.log("random index is", randomIndex);

  const randomQuote = storedQuotes[randomIndex];

  // Update the quote text and author in the HTML
  document.querySelector(".quote").innerText = `“${randomQuote.text}”`;
  document.querySelector(".author").innerText = `- ${randomQuote.author}`;
}
// Add event listener to the button
document
  .querySelector(".generate-button")
  .addEventListener("click", getRandomQuote);

function getQuotes() {
  let storedQuotes = localStorage.getItem("quotes"); // Get data from localStorage
  if (storedQuotes) {
    return JSON.parse(storedQuotes); // Convert JSON string to an array
  } else {
    return []; // Return an empty array if no quotes are found
  }
}

// Function to add a new quote
function addNewQuote() {
  const quoteText = document.getElementById("new-quote").value.trim();
  const quoteAuthor = document.getElementById("name").value.trim();

  if (quoteText === "" || quoteAuthor === "") {
    alert("Please enter both quote and author!");
    return;
  }

  // let quotes = getQuotes(); // Get existing quotes
  let newQuote = { text: quoteText, author: quoteAuthor };
  console.log(newQuote);
  // Create a new quote object
  storedQuotes.push(newQuote); // Add new quote to the array

  localStorage.setItem("quotes", JSON.stringify(storedQuotes)); // Store updated quotes

  // Clear input fields after adding a quote
  document.getElementById("new-quote").value = "";
  document.getElementById("name").value = "";

  alert("Quote added successfully!");
}
