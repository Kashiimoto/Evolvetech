const filterButtons = document.querySelectorAll('.filter-button');
const products = document.querySelectorAll('.product');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedCategory = button.getAttribute('data-category');

    products.forEach((product) => {
      const productCategory = product.getAttribute('data-category');

      if (selectedCategory === 'all' || selectedCategory === productCategory) {
        product.classList.remove('hide');
      } else {
        product.classList.add('hide');
      }
    });

    filterButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    button.classList.add('active');
  });
});

filterButtons.forEach((button) => {
  button.addEventListener('mouseenter', handleButtonHover);
  button.addEventListener('mouseleave', handleButtonHover);
});

function handleButtonHover() {
  this.classList.toggle('hovered');
}

filterButtons[0].classList.add('active');


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
}

function scrollToTop() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

$(window).on("load", function() {
  $("html, body").css("overflow", "hidden");
});

