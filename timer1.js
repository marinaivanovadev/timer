// remove the first two elements (node and timer1) from comand line
const delays = process.argv.slice(2);

// Edge Cases
if (delays.some((delay) => isNaN(delay) || delay < 0) || delays.length === 0) {
  console.log("Please insert a positive number in a comand line arguments");
  process.exit(1); // stop the process
}

// System Sound (Beep / Ding)
const timer = function(delays) {
  for (let i = 0; i < delays.length; i++) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delays[i] * 1000);
  }
};
timer(delays);


