var styleguides = document.getElementById('styleguides'),
    stylesLink = document.getElementById('styles-link'),
    customCssWrapper = document.getElementById('custom-css'),
    customCssInput = document.getElementById('custom-css-input'),
    customCssSubmit = document.getElementById('custom-css-submit'),
    mobileNavToggle = document.getElementById('mobile-nav-toggle'),
    navLinks = document.querySelectorAll('.html-boilerplate-sidenav a');

// Handling styleguide selector
styleguides.addEventListener('change', function() {
  if (this.value === 'custom') {
    customCssWrapper.style.display = 'inherit';
  } else {
    customCssWrapper.style.display = 'none';
    stylesLink.href = this.value;
  }
});

customCssSubmit.addEventListener('click', function(event) {
  stylesLink.href = customCssInput.value;
  event.preventDefault();
});

// Close mobile nav when a link is clicked.
navLinks.forEach(function(element) {
  element.addEventListener('click', function(event) {
    mobileNavToggle.checked = false;
  });
});
