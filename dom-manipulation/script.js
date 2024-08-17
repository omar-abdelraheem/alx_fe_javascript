// Array to hold quote objects
let quotes = [
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    category: "Motivation",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    category: "Inspiration",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    category: "Life",
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    category: "Wisdom",
  },
];

// Function to display a random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  // Create DOM elements
  const quoteText = document.createElement("p");
  quoteText.textContent = `"${quote.text}"`;

  const quoteCategory = document.createElement("p");
  quoteCategory.textContent = `Category: ${quote.category}`;

  // Display in the DOM
  const quoteDisplayArea = document.getElementById("quoteDisplay");
  quoteDisplayArea.innerHTML = ""; // Clear previous quote
  quoteDisplayArea.appendChild(quoteText);
  quoteDisplayArea.appendChild(quoteCategory);
}

// Function to create a form for adding new quotes
function createAddQuoteForm() {
  const form = document.createElement("form");
  form.setAttribute("id", "addQuoteForm");

  // Input for quote text
  const quoteInputLabel = document.createElement("label");
  quoteInputLabel.setAttribute("for", "quoteText");
  quoteInputLabel.textContent = "Quote: ";

  const quoteInput = document.createElement("input");
  quoteInput.setAttribute("type", "text");
  quoteInput.setAttribute("id", "quoteText");
  quoteInput.setAttribute("name", "quoteText");

  // Input for quote category
  const categoryInputLabel = document.createElement("label");
  categoryInputLabel.setAttribute("for", "quoteCategory");
  categoryInputLabel.textContent = "Category: ";

  const categoryInput = document.createElement("input");
  categoryInput.setAttribute("type", "text");
  categoryInput.setAttribute("id", "quoteCategory");
  categoryInput.setAttribute("name", "quoteCategory");

  // Submit button
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "button");
  submitButton.textContent = "Add Quote";
  submitButton.addEventListener("click", addQuote);

  // Append inputs to form
  form.appendChild(quoteInputLabel);
  form.appendChild(quoteInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(categoryInputLabel);
  form.appendChild(categoryInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(submitButton);

  // Append form to the DOM
  const formArea = document.getElementById("formArea");
  formArea.innerHTML = ""; // Clear any existing form
  formArea.appendChild(form);
}

// Function to add a new quote to the array and update the DOM
function addQuote() {
  const quoteText = document.getElementById("quoteText").value;
  const quoteCategory = document.getElementById("quoteCategory").value;

  if (quoteText && quoteCategory) {
    quotes.push({ text: quoteText, category: quoteCategory });
    alert("Quote added successfully!");

    // Clear the form fields
    document.getElementById("quoteText").value = "";
    document.getElementById("quoteCategory").value = "";
  } else {
    alert("Please fill out both fields.");
  }
}

// Initial setup to create the form and show a random quote when the page loads
document.addEventListener("DOMContentLoaded", function () {
  createAddQuoteForm();
  showRandomQuote();
});
