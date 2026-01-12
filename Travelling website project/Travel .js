// Simple form validation example
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple email validation regex
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you for contacting us, " + name + "!");
  
  // Scroll to the contact form after submission (optional)
  window.scrollTo({
    top: document.getElementById('contact').offsetTop,
    behavior: 'smooth'
  });

  // Here you would typically send the form data to a server
});

// JavaScript to toggle destination description visibility
document.querySelectorAll('.view-details-btn').forEach(button => {
  button.addEventListener('click', function() {
    const description = this.nextElementSibling; // Get the sibling div with the description

    // Toggle the 'open' class on the destination description to show or hide it
    if (description.classList.contains('open')) {
      description.classList.remove('open'); // Hide the description
    } else {
      description.classList.add('open'); // Show the description
    }
  });
});

// JavaScript for Book Now button functionality
document.querySelectorAll('.book-now-btn').forEach(button => {
  button.addEventListener('click', function() {
    const bookingContent = this.nextElementSibling; // Get the sibling div with the booking content

    // Toggle the 'open' class to show or hide the content
    bookingContent.classList.toggle('open');
  });
});

// Handle form submission (for example, log the booking data)
document.querySelectorAll('.booking-content form').forEach(form => {
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form data
    const destination = document.getElementById('destination').value;
    const numPeople = document.getElementById('num-people').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const paymentMethod = document.getElementById('payment-method').value;
    const contactName = document.getElementById('contact-name').value;
    const contactPhone = document.getElementById('contact-phone').value;
    const specialRequests = document.getElementById('special-requests').value;

    // Simulate form submission (e.g., logging the data for now)
    console.log("Booking Details:");
    console.log(`Destination: ${destination}`);
    console.log(`Number of People: ${numPeople}`);
    console.log(`Start Date: ${startDate}`);
    console.log(`End Date: ${endDate}`);
    console.log(`Payment Method: ${paymentMethod}`);
    console.log(`Contact Name: ${contactName}`);
    console.log(`Contact Phone: ${contactPhone}`);
    console.log(`Special Requests: ${specialRequests}`);

    // Optional: You can send this data to your server at this point
    alert("Your booking has been confirmed!");

    // Close the booking form after submission
    bookingContent.classList.remove('open');
  });
});

// Lightbox functionality
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Show the image in the lightbox when clicked
galleryItems.forEach(item => {
  item.addEventListener('click', function() {
    const imgSrc = this.src;
    lightbox.style.display = 'flex';
    lightboxImg.src = imgSrc;
  });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', function() {
  lightbox.style.display = 'none';
});

// Close the lightbox if the user clicks outside the image
lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// Slideover Button functionality
const toggleButton = document.getElementById('toggle-video-button');
const slideoverContent = document.querySelector('.slideover-content');
const closeSlideoverButton = document.getElementById('close-slideover');

// Show the slideover content when the button is clicked
toggleButton.addEventListener('click', function() {
    slideoverContent.style.left = '0'; // Slide in the content
});

// Hide the slideover content when the close button is clicked
closeSlideoverButton.addEventListener('click', function() {
    slideoverContent.style.left = '100%'; // Slide out the content
});





