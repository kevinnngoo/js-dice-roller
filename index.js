// Dice roller function
function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value; // Get number of dice from input
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
  
    for (let i = 0; i < numOfDice; i++) {
      const value = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
      values.push(value); // Add the value to the values array
      images.push(`<img src="dice-images/dice${value}.png" alt="Dice ${value}" />`); // Use consistent naming
    }
  
    diceResult.textContent = `Dice: ${values.join(", ")}`; // Display dice values
    diceImages.innerHTML = images.join(""); // Display dice images
  }
  