var quotes = JSON.parse(localStorage.getItem("quotes")) || [
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

localStorage.setItem("quotes", JSON.stringify(quotes));

function getRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayQuote() {
  var randomQuote = getRandomQuote();
  document.querySelector(".quote").innerText = "“" + randomQuote.text + "”";
  document.querySelector(".author").innerText = "- " + randomQuote.author;
}

document.addEventListener("DOMContentLoaded", function () {
  displayQuote();
});

document
  .querySelector(".generate-button")
  .addEventListener("click", function () {
    displayQuote();
  });

document
  .querySelector(".add-quotes-button")
  .addEventListener("click", function () {
    var newQuoteText = document
      .querySelector('input[placeholder="New Quote"]')
      .value.trim();
    var newAuthor = document.querySelector("#name").value.trim();

    if (newQuoteText === "" || newAuthor === "") {
      alert("Please enter both a quote and an author name.");
      return;
    }

    var newQuote = { text: newQuoteText, author: newAuthor };
    quotes.push(newQuote);
    localStorage.setItem("quotes", JSON.stringify(quotes));

    document.querySelector('input[placeholder="New Quote"]').value = "";
    document.querySelector("#name").value = "";

    alert("Quote added successfully!");
  });
