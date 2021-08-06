// All functional variables
const inputNumber = document.querySelector('.screen__input');
const keypad = document.querySelector('.keypad');
const keys = document.querySelectorAll('.keypad__key');
const keyDel = document.querySelector('.keypad__key-del');
const keyReset = document.querySelector('.keypad__key-reset');
const keyEqual = document.querySelector('.keypad__key-equal');
const keyOperator = document.querySelectorAll('.keypad__key-operator');
const keyDot = document.querySelector('.keypad__key-dot');

//Style
const container = document.querySelector('.container');
const header = document.querySelector('.header');
const heading2 = document.querySelector('.header__heading-2');
const toggleBox = document.querySelector('.header__toggle-box');
const btn = document.querySelector('.header__btn');
const btnBackground = document.querySelector('.header__btn-background');
const headingFirst = document.querySelector('.header__heading-4--1');
const headingSecond = document.querySelector('.header__heading-4--2');
const headingThird = document.querySelector('.header__heading-4--3');
const screenInput = document.querySelector('.screen__input');

// 1. Tap a key and log it out in the input

// Store 2 numbers
let arr = [];

// Basic Math
const addition = () => {
  inputNumber.value = arr[0] + arr[1]; // (((arr[0] + arr[1]) * 100) / 100).toFixed(2); - till 2 decimal numbers without rounding
};
const subtraction = () => {
  inputNumber.value = arr[0] - arr[1];
};
const divison = () => {
  inputNumber.value = arr[0] / arr[1];
};
const multiplakation = () => {
  inputNumber.value = arr[0] * arr[1];
};

// Add numbers in the input

keys.forEach(key =>
  key.addEventListener('click', function (e) {
    if (arr.length < 2)
      inputNumber.value += +e.target.textContent ? key.textContent : '';
  })
);

// Key Math Operators

keyOperator.forEach(key =>
  key.addEventListener('click', function () {
    if (arr.length < 1) {
      arr.push(+inputNumber.value);
      inputNumber.value = '';

      if (key.dataset['add'] === 'add') keyEqual.dataset.equal = 'add';

      if (key.dataset.subtract === 'subtract')
        keyEqual.dataset.equal = 'subtract';

      if (key.dataset.multiply === 'multiply')
        keyEqual.dataset.equal = 'multiply';

      if (key.dataset.divide === 'divide') keyEqual.dataset.equal = 'divide';
    } else return;
  })
);

// Key Result

keyEqual.addEventListener('click', function () {
  if (arr.length < 2) {
    arr.push(+inputNumber.value);

    // Addition
    if (keyEqual.dataset['equal'] === 'add') addition();

    // Subtract
    if (keyEqual.dataset.equal === 'subtract') subtraction();

    // Multiplakation
    if (keyEqual.dataset.equal === 'multiply') multiplakation();

    // Division
    if (keyEqual.dataset.equal === 'divide') divison();
  } else return;
});

// Key Delete

keyDel.addEventListener('click', function () {
  inputNumber.value = inputNumber.value.slice(0, -1);
});

// Key Reset
keyReset.addEventListener('click', function () {
  inputNumber.value = '';
  arr = [];
});

// Key Dot
keyDot.addEventListener('click', function () {
  inputNumber.value += '.';
});

// Click the btn

headingFirst.addEventListener('click', function () {
  // Btn movement
  btn.style.transform = 'translateX(-.3rem)';
  /// Theme 1
  container.classList.remove('container-2');
  container.classList.remove('container-3');
  container.classList.add('container-1');

  heading2.classList.remove('header-2__heading-2');
  heading2.classList.remove('header-3__heading-2');
  heading2.classList.add('header-1__heading-2');

  toggleBox.classList.remove('header-2__toggle-box');
  toggleBox.classList.remove('header-3__toggle-box');
  toggleBox.classList.add('header-1__toggle-box');

  btnBackground.classList.remove('header-2__btn-background');
  btnBackground.classList.remove('header-3__btn-background');
  btnBackground.classList.add('header-1__btn-background');

  screenInput.classList.remove('screen-2__input');
  screenInput.classList.remove('screen-3__input');
  screenInput.classList.add('screen-1__input');

  keypad.classList.remove('keypad-2');
  keypad.classList.remove('keypad-3');
  keypad.classList.add('keypad-1');

  keys.forEach(key => key.classList.remove('keypad-2__key'));
  keys.forEach(key => key.classList.remove('keypad-3__key'));
  keys.forEach(key => key.classList.add('keypad-1__key'));

  keyDel.classList.remove('keypad-2__key-del');
  keyDel.classList.remove('keypad-3__key-del');
  keyDel.classList.add('keypad-1__key-del');

  keyReset.classList.remove('keypad-2__key-reset');
  keyReset.classList.remove('keypad-3__key-reset');
  keyReset.classList.add('keypad-1__key-reset');

  keyEqual.classList.remove('keypad-2__key-equal');
  keyEqual.classList.remove('keypad-3__key-equal');
  keyEqual.classList.add('keypad-1__key-equal');
});

headingSecond.addEventListener('click', function () {
  // Btn movement
  btn.style.transform = 'translateX(1.2rem)';
  // Theme 2
  container.classList.remove('container-1');
  container.classList.remove('container-3');
  container.classList.add('container-2');

  heading2.classList.remove('header-1__heading-2');
  heading2.classList.remove('header-3__heading-2');
  heading2.classList.add('header-2__heading-2');

  toggleBox.classList.remove('header-1__toggle-box');
  toggleBox.classList.remove('header-3__toggle-box');
  toggleBox.classList.add('header-2__toggle-box');

  btnBackground.classList.remove('header-1__btn-background');
  btnBackground.classList.remove('header-3__btn-background');
  btnBackground.classList.add('header-2__btn-background');

  screenInput.classList.remove('screen-1__input');
  screenInput.classList.remove('screen-3__input');
  screenInput.classList.add('screen-2__input');

  keypad.classList.remove('keypad-1');
  keypad.classList.remove('keypad-3');
  keypad.classList.add('keypad-2');

  keys.forEach(key => key.classList.remove('keypad-1__key'));
  keys.forEach(key => key.classList.remove('keypad-3__key'));
  keys.forEach(key => key.classList.add('keypad-2__key'));

  keyDel.classList.remove('keypad-1__key-del');
  keyDel.classList.remove('keypad-3__key-del');
  keyDel.classList.add('keypad-2__key-del');

  keyReset.classList.remove('keypad-1__key-reset');
  keyReset.classList.remove('keypad-3__key-reset');
  keyReset.classList.add('keypad-2__key-reset');

  keyEqual.classList.remove('keypad-1__key-equal');
  keyEqual.classList.remove('keypad-3__key-equal');
  keyEqual.classList.add('keypad-2__key-equal');
});

headingThird.addEventListener('click', function () {
  // Btn movement
  btn.style.transform = 'translateX(2.7rem)';

  // Theme 3
  container.classList.remove('container-1');
  container.classList.remove('container-2');
  container.classList.add('container-3');

  heading2.classList.remove('header-1__heading-2');
  heading2.classList.remove('header-2__heading-2');
  heading2.classList.add('header-3__heading-2');

  toggleBox.classList.remove('header-1__toggle-box');
  toggleBox.classList.remove('header-2__toggle-box');
  toggleBox.classList.add('header-3__toggle-box');

  btnBackground.classList.remove('header-1__btn-background');
  btnBackground.classList.remove('header-2__btn-background');
  btnBackground.classList.add('header-3__btn-background');

  btn.classList.remove('header-1__btn');
  btn.classList.remove('header-2__btn');
  btn.classList.add('header-3__btn');

  screenInput.classList.remove('screen-1__input');
  screenInput.classList.remove('screen-2__input');
  screenInput.classList.add('screen-3__input');

  keypad.classList.remove('keypad-1');
  keypad.classList.remove('keypad-2');
  keypad.classList.add('keypad-3');

  keys.forEach(key => key.classList.remove('keypad-1__key'));
  keys.forEach(key => key.classList.remove('keypad-2__key'));
  keys.forEach(key => key.classList.add('keypad-3__key'));

  keyDel.classList.remove('keypad-1__key-del');
  keyDel.classList.remove('keypad-2__key-del');
  keyDel.classList.add('keypad-3__key-del');

  keyReset.classList.remove('keypad-1__key-reset');
  keyReset.classList.remove('keypad-2__key-reset');
  keyReset.classList.add('keypad-3__key-reset');

  keyEqual.classList.remove('keypad-1__key-equal');
  keyEqual.classList.remove('keypad-2__key-equal');
  keyEqual.classList.add('keypad-3__key-equal');
});
