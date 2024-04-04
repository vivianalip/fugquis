const readline = require('readline');

// Create the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for input
rl.question('Enter your input: ', (input) => {
  // Process the input
  console.log(`You entered: ${input}`);

  // Close the interface after use
  rl.close();
});

// Error handling for the readline interface
rl.on('error', (err) => {
  console.error('An error occurred:', err);
});
