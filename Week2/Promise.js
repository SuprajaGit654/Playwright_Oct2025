// Function that simulates fetching data from a database with a delay
function fetchDataFromDatabase(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = true; // Simulate data availability

      if (data) {
        resolve("Data fetched successfully!");
      } else {
        reject("Data not found!");
      }
    }, 3000); // 3-second delay
  });
}

// Call the function and handle the Promise
fetchDataFromDatabase()
  .then((message) => {
    console.log(message); // Output if resolved
  })
  .catch((error) => {
    console.error(error); // Output if rejected
  });
