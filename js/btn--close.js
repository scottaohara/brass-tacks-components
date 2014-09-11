(function (){

  'use strict';

  var btnClose = document.querySelectorAll('.js-btn--close'),
  i;

  // Simple function to display: none the parent container of a
  // clicked close button

  for ( i = 0; i < btnClose.length; i++ ) {
    btnClose[i].addEventListener('click', function() {
      this.parentNode.classList.add('display-none');
    });
  }

})();
