// Change background color on button click
document.getElementById('colorBtn').addEventListener('click', function() {
  document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
});

// Set greeting message as the title inside the webpage
window.onload = function() {
  const currentHour = new Date().getHours();
  let greeting = '';

  if (currentHour < 12) {
    greeting = 'Good Morning!';
  } else if (currentHour < 18) {
    greeting = 'Good Afternoon!';
  } else {
    greeting = 'Good Evening!';
  }

  // Set the greeting message inside the h1 element
  document.getElementById('pageTitle').textContent = greeting + " Welcome to My Portfolio";
};

// Display user input from the contact form
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const displayMessage = `
    <h2>Your Message:</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
  
  document.getElementById('userInputDisplay').innerHTML = displayMessage;
});
