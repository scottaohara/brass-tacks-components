(function() {

  'use strict';

  var clearable = document.querySelectorAll('.js-clear'),
      len = clearable.length,
      clearBtn,
      inputField,
      i;

  for (i = 0; i < len; i++) {
    // create the clear button only if there's JS
    clearBtn = document.createElement('button');
    clearBtn.setAttribute('type', 'button');
    // reference the aria-label on the input to give the button's label more context
    clearBtn.setAttribute('aria-label', 'Clear ' + clearable[i].getAttribute('aria-label'));
    clearBtn.className = 'btn btn--clear';
    clearBtn.innerHTML = '&times;';

    // on click of the clearBtn, update all the stuff
    clearBtn.addEventListener('click', function() {
      this.previousElementSibling.value = '';
      this.previousElementSibling.focus();
      this.setAttribute('data-show-btn', false);
      this.setAttribute('aria-hidden', true);
    });

    // keep track of the clearable input fields and add
    // clear buttons to any input area that has a class of .js-clear
    inputField = clearable[i];
    inputField.parentNode.insertBefore(clearBtn, inputField.nextSibling);
    inputField.addEventListener('click', clearInput);
    inputField.addEventListener('keyup', clearInput);
  }


  // this function needs to be called more than once, so
  // that's why it's own thingy.
  function clearInput () {
    if (this.value !== '') {
      this.nextElementSibling.setAttribute('data-show-btn', true);
      this.nextElementSibling.setAttribute('aria-hidden', false);
    } else {
      this.nextElementSibling.setAttribute('data-show-btn', false);
      this.nextElementSibling.setAttribute('aria-hidden', true);
    }
  }

})();
