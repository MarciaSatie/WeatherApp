WeatherApp
A responsive weather forecasting application built with JavaScript, HTML, Eleventy and Bulma.

 WeatherApp fetches and displays real-time weather data for user-specified locations, offering a clean and accessible user interface.​

🌦 Features
Real-Time Weather Data: Fetches current weather conditions using external APIs.​

Responsive Design: Optimized for desktops, tablets, and mobile devices.​


🚀 Getting Started
Prerequisites
Node.js (version 14 or higher)​

Installation
Clone the repository:
git clone https://github.com/MarciaSatie/WeatherApp.git

cd WeatherApp

Install dependencies:
npm install

Run the development server: npx eleventy --serve

The application will be available at http://localhost:8080/.

🛠 Project Structure
plaintext
Copy
Edit
WeatherApp/
├── _includes/       # Nunjucks templates
├── _site/           # Generated static site (output)
├── assets/          # Static assets (CSS, images, etc.)
├── data/            # Data files (e.g., JSON)
├── node_modules/    # Node.js dependencies
├── src/             # Source JavaScript files
├── .eleventy.js     # Eleventy configuration
├── index.njk        # Main Nunjucks template
├── package.json     # Project metadata and scripts
└── package-lock.json

📦 Dependencies
Eleventy: Static site generator.​
JavaScript: Handles data fetching and DOM manipulation.​


🙌 Acknowledgments
**document.createElement**(at file: utils.js): uses Javascript to create a new HTML element at this case a div.
reference: https://www.w3schools.com/jsref/met_document_createelement.asp

**replaceAll** (at file: utils.js): replace all specified string (or char) at whole variable.
reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll

**LoacalStorage** (at file: utils.js amd index.njk): Saves an information even after the page reloads or browser restarts.
reference: https://www.geeksforgeeks.org/javascript-localstorage/


