const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = ''; //current value of type writer
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10); //base 10
  this.type();
  this.isDeleting = false;
};

// Type Method

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = txtElement.getAttribute('data-words');
}
