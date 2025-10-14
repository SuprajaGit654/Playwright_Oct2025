browserName = 'chrome'
if (browserName === "chrome") {
    console.log("Launching Chrome Browser...")
} else {
    console.log("Launching default Browser...")
}

testType= "Regression"
switch (testType) {
case "Smoke":
    console.log("Running Smoke Tests...") 
    break;
case "Regression":
    console.log("Running Regression Tests...")
    break;
case "Sanity":
    console.log("Running Sanity Tests...")
    break;
default:
    console.log("Running default Smoke tests...")
    break;
}

