// Select and cache the <main> element in a variable named mainEl.
let mainEL = document.querySelector('main');

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEL.style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl to <h1>DOM Manipulation</h1>.
mainEL.innerHTML = '<h1>DOM Manipulation</h1>';

// Add a class of flex-ctr to mainEl.
mainEL.classList.add('flex-ctr');

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById('top-menu');

// Set the height of topMenuEl element to be "100%".
topMenuEl.style.height = '100%';

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');

// Menu data structure
let menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog', subLinks: [
    { text: 'all', href: '/catalog/all' },
    { text: 'top selling', href: '/catalog/top' },
    { text: 'search', href: '/catalog/search' },
  ] },
  { text: 'orders', href: '/orders', subLinks: [
    { text: 'new', href: '/orders/new' },
    { text: 'pending', href: '/orders/pending' },
    { text: 'history', href: '/orders/history' },
  ] },
  { text: 'account', href: '/account', subLinks: [
    { text: 'profile', href: '/account/profile' },
    { text: 'sign out', href: '/account/signout' },
  ] },
];

// Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((link) => {
  // Create an <a> element.
  let menuItem = document.createElement('a');
  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  menuItem.setAttribute('href', link.href);

  // Set the new element's content to the value of the text property of the "link" object.
  menuItem.textContent = link.text;

  // Append the new element to the topMenuEl element.
  topMenuEl.appendChild(menuItem);
});

// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById('sub-menu');

// Set the height of subMenuEl element to be "100%".
subMenuEl.style.height = '100%';

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');

// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';

// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = '0';

// Helper function to build submenu dynamically
function buildSubmenu(subLinks, subMenuEl) {
  // Clear the current contents of subMenuEl
  subMenuEl.innerHTML = '';

  // Iterate over the subLinks array
  subLinks.forEach(link => {
    // Create an <a> element
    const subLinkEl = document.createElement('a');
    // Add an href attribute to the <a>
    subLinkEl.href = link.href;
    // Set the element's content to the value of the text property of the "link" object
    subLinkEl.textContent = link.text;
    // Append the new element to the subMenuEl
    subMenuEl.appendChild(subLinkEl);
  });
}

// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', function(event) {
  // Call the event object's preventDefault() method.
  event.preventDefault();

  // Immediately return if the element clicked was not an <a> element.
  if (!event.target.matches('a')) {
    return;
  }

  // Toggle "active" class for the clicked link.
  if (!event.target.classList.contains('active')) {
    event.target.classList.add('active');
  } else {
    event.target.classList.remove('active');
  }

  // Remove "active" class from each other <a> element in topMenuEl.
  Array.from(topMenuEl.children).forEach(link => {
    if (link !== event.target) {
      link.classList.remove('active');
    }
  });

  // Get the "link" object for the clicked <a> element.
  let clickedLinkObject = menuLinks.find(link => link.text.toLowerCase() === event.target.textContent.toLowerCase());

  // Check if the clicked <a> element has a class of "active".
  if (!event.target.classList.contains('active')) {
    // If the clicked <a> element's "link" object within menuLinks has a subLinks property,
    // set the CSS top property of subMenuEl to 100%, otherwise set it to 0.
    subMenuEl.style.top = clickedLinkObject && clickedLinkObject.subLinks ? '100%' : '0';

    // Build submenu dynamically based on the clicked link's subLinks array
    if (clickedLinkObject && clickedLinkObject.subLinks) {
      buildSubmenu(clickedLinkObject.subLinks, subMenuEl);
    }
  }
});

// Helper function to build submenu dynamically
function buildSubmenu(subLinks, subMenuEl) {
  // Clear the current contents of subMenuEl
  subMenuEl.innerHTML = '';

  // Iterate over the subLinks array
  subLinks.forEach(link => {
    // Create an <a> element
    const subLinkEl = document.createElement('a');
    // Add an href attribute to the <a>
    subLinkEl.href = link.href;
    // Set the element's content to the value of the text property of the "link" object
    subLinkEl.textContent = link.text;
    // Append the new element to the subMenuEl
    subMenuEl.appendChild(subLinkEl);
  });
}

// Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener('click', function(event) {
    // Call the event object's preventDefault() method.
    event.preventDefault();
  
    // Immediately return if the element clicked was not an <a> element.
    if (!event.target.matches('a')) {
      return;
    }
  
    // Log the content of the <a> to verify the handler is working.
    console.log(event.target.textContent);
  
    // Set the CSS top property of subMenuEl to 0.
    subMenuEl.style.top = '0';
  
    // Remove the active class from each <a> element in topMenuLinks.
    Array.from(topMenuEl.children).forEach(link => {
      link.classList.remove('active');
    });
  
    // Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
    mainEL.innerHTML = `<h1>${event.target.textContent}</h1>`;
  });
  
  // If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
  // You can add more conditions for other links as needed.
  subMenuEl.addEventListener('click', function(event) {
    if (event.target.textContent.toLowerCase() === 'about') {
      mainEL.innerHTML = '<h1>About</h1>';
    }
  });
