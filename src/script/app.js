
  document.addEventListener('DOMContentLoaded', function () {
   
    var path = window.location.pathname;

   
    var links = document.querySelectorAll('.nav__menu-link a');

  
    links.forEach(function (link) {
      if (path.includes(link.getAttribute('href'))) {
     
        link.classList.add('active'); 
      }
    });
  });
