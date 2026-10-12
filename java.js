// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Pledge form submission
const pledgeForm = document.getElementById('pledgeForm');
const message = document.getElementById('message');

if (pledgeForm) {
  pledgeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    if (name) {
      message.textContent = `Thank you, ${name}! Your pledge to protect wildlife has been recorded.`;
      message.style.color = '#1b5e20';
      pledgeForm.reset();
    } else {
      message.textContent = 'Please enter your name.';
      message.style.color = '#c62828';
    }
  });
}