;(function() {

  'use strict';

  // vars
  var btnMenu = document.getElementById('btn_menu'),
      btnIcon = btnMenu.children[0],
      navMenu = document.getElementById('test_nav'),
      i;

  function toggleState ( stateOff, stateOn, alFalse, alTrue ) {
    btnMenu.setAttribute('data-state', btnMenu.getAttribute('data-state') === stateOff ? stateOn : stateOff);
    btnIcon.setAttribute('aria-label', btnIcon.getAttribute('aria-label') === alTrue ? alFalse : alTrue);
  }

  btnMenu.addEventListener('click', function () {
    toggleState('off', 'on', '', 'Close menu');
    if (this.getAttribute('data-state') === 'off') {
      navMenu.classList.add('display-none');
    }
    else {
      navMenu.classList.remove('display-none');
    }
  });

})();
