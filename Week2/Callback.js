let browser = "Chrome";

//Create a function that accepts a callback
function checkBrowserVersion(callback) {
  setTimeout(() => {
    callback(browser); // Pass the browser value to the callback
  }, 2000); // Simulate 2-second delay
}

// callback function
function displayBrowserVersion(version) {
  console.log("Browser version using callback is:",version);
}

// Call the function and pass the callback
checkBrowserVersion(displayBrowserVersion);
