'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Mohammed Amaan',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 0,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const displayMovements = function (movements, sorted = false) {
  containerMovements.innerHTML = '';
  movements = sorted ? movements.slice().sort((a, b) => a-b) : movements;
  movements.forEach(function (mov, i) {
    let type = mov >= 0 ? 'deposit' : 'withdrawal';
    const newmov = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', newmov);
  });
};

// displayMovements(account1.movements);

const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc = 0, mov) => (acc += mov));
  const deposits = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => (acc += mov), 0);
  const withdrawals = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => (acc += mov), 0);
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance + interest}€`;
  labelSumIn.textContent = `${deposits}€`;
  // labelSumOut.textContent = `${(withdrawal < 0) ? -withdrawal : 0}€`;
  labelSumOut.textContent = `${Math.abs(withdrawals)}€`;
  labelSumInterest.textContent = `${interest}€`;
};
// displayBalance(account1.movements);

function createUser(accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
}
createUser(accounts);


function updateUI() {
  displayBalance(currentAcc);
  displayMovements(currentAcc.movements);
}

// Creating Login
let currentAcc;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAcc = accounts.find(acc => acc.username === inputLoginUsername.value);
  if (currentAcc?.pin === Number(inputLoginPin.value)) {
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    inputLoginUsername.blur();
    labelWelcome.textContent = `Welcome, ${currentAcc.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    updateUI();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amt = Number(inputTransferAmount.value);
  const reciever = accounts.find(acc => acc.username === inputTransferTo.value);
  if (
    reciever &&
    reciever.username !== currentAcc.username &&
    0 < amt <= currentAcc.balance
  ) {
    currentAcc.movements.push(-amt);
    reciever.movements.push(amt);
    inputTransferAmount.value = inputTransferTo.value = '';
    inputTransferAmount.blur();
    inputTransferTo.blur();
    updateUI();
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAcc.username === inputCloseUsername.value &&
    Number(inputClosePin.value) === currentAcc.pin
  ) {
    const i = accounts.findIndex(acc => acc.username === currentAcc.username);
    console.log(i);
    accounts.splice(i, 1);
    console.log(accounts);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Log in to get started`;
  }
  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
  inputCloseUsername.blur();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amt = Number(inputLoanAmount.value);
  const res = currentAcc.movements.some(mov => mov >= amt/10);
  if (res) {
    inputLoanAmount.value = '';
    inputLoanAmount.blur();
    currentAcc.movements.push(amt);
    updateUI();
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAcc.movements, !sorted);
  sorted = !sorted;
})

/*
const max = currentAcc.movements.reduce(
  (acc, mov) => (mov > acc ? mov : acc),
  movements[0]
);
*/
