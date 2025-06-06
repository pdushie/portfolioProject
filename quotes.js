document.addEventListener('DOMContentLoaded', () => {
  // Select the element to display the quote
  let quoteHolder = document.querySelector('#quotes');

  // Function to fetch the quote from the API
  async function getResponse() {
    const url = "https://zenquotes.io/api/random/quotes";

    try {
      // Using CORS proxy to bypass CORS issue
      const response = await fetch('https://cors-anywhere.herokuapp.com/' + url);
      const result = await response.json();
      
      // Result is an array of quotes
      const quote = result[0].q;  // Extract the quote text
      const author = result[0].a;  // Extract the author

      // Update the DOM with the quote and author
      quoteHolder.textContent = `"${quote}" — ${author}`;
    } catch (err) {
      console.error('Error fetching the quote:', err);
    }
  }

  // Call getResponse every 10 seconds
  // Disable quotes display
  // setInterval(() => {
  //   getResponse();
  // }, 20000);
});
