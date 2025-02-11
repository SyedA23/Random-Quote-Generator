function initializeQuotes() {
  const quotes = [
    {
      text: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      text: "Do not wait to strike till the iron is hot, but make it hot by striking.",
      author: "William Butler Yeats"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein"
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll"
    },
    {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    },
    {
      text: "It always seems impossible until it’s done.",
      author: "Nelson Mandela"
    },
    {
      text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
      author: "Walt Whitman"
    }
  ];

  // Save to localStorage if not already present
  if (!localStorage.getItem("quotes")) {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }
}

// Function to get a random quote
function getRandomQuote() {
  const quotes = JSON.parse(localStorage.getItem("quotes"));
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to display a quote
function displayQuote() {
  const { text, author } = getRandomQuote();
  document.querySelector(".quote").innerText = `“${text}”`;
  document.querySelector(".author").innerText = `- ${author}`;
}

// Adding new quotes
function addNewQuote() {
  const newQuoteText = document
    .querySelector('input[placeholder="New Quote"]')
    .value.trim();
  const newAuthor = document.querySelector("#name").value.trim();

  if (newQuoteText === "" || newAuthor === "") {
    alert("Please enter both a quote and an author name.");
    return;
  }

  const newQuote = { text: newQuoteText, author: newAuthor };

  // Get existing quotes, add new one, and update localStorage
  const quotes = JSON.parse(localStorage.getItem("quotes"));
  quotes.push(newQuote);
  localStorage.setItem("quotes", JSON.stringify(quotes));

  // Clear input fields after adding
  document.querySelector('input[placeholder="New Quote"]').value = "";
  document.querySelector("#name").value = "";

  alert("Quote added successfully!");
}

// Initialize quotes when the page loads
window.addEventListener("load", () => {
  initializeQuotes();
  displayQuote(); // Display an initial quote when the page loads
});

// Event listener for generating a random quote
document
  .querySelector(".generate-button")
  .addEventListener("click", displayQuote);

// Event listener for adding a new quote
document
  .querySelector(".add-quotes-button")
  .addEventListener("click", addNewQuote);
