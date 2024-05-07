function toggleSection(sectionId) {
  var sections = document.getElementsByTagName('section');
  for (var i = 0; i < sections.length; i++) {
      if (sections[i].id === sectionId) {
          sections[i].style.display = 'flex'; // Change display to flex
      } else {
          sections[i].style.display = 'none';
      }
  }
}

// Get all the anchor tags in the navigation menu
const navLinks = document.querySelectorAll('nav a');

// Loop through each anchor tag and add a click event listener
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Prevent the default behavior of the anchor tag
    e.preventDefault();
    
    // Get the ID of the section to show
    const sectionId = link.getAttribute('href').substring(1); // Remove the '#' symbol
    
    // Toggle the section based on its ID
    toggleSection(sectionId);
  });
});

// Set the home section as active by default
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('home').style.display = 'flex'; // Change display to flex
});

// Get all buttons with class "aa"
const buttons = document.querySelectorAll('.aa');

// Loop through each button and add a click event listener
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    // Prevent the default behavior of the button
    e.preventDefault();
    
    // Get the href attribute of the button
    const sectionId = button.getAttribute('href').substring(1); // Remove the '#' symbol
    
    // Toggle the section based on its ID
    toggleSection(sectionId);
  });
});
