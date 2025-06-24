function showMessage() {
  // Get input value
  const message = document.getElementById("userInput").value;

  // Display it in the output paragraph
  if (message.trim() === "") {
    document.getElementById("output").innerText = "Please enter a message!";
  } else {
    document.getElementById("output").innerText = "You entered: " + message;
  }
}