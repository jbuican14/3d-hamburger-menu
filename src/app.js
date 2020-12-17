const hamburgerBtn = document.querySelector('.hamburger-menu');
const navWrapper = document.querySelector('.nav-wrapper');

const handleMenubarClick = () => {
  navWrapper.classList.toggle('change');
};

hamburgerBtn.addEventListener('click', handleMenubarClick);
