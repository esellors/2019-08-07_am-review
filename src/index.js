// Bobby's circumstance
let money = 0;

let bills = {
	rent: 0,
	car: 0,
	phone: 0,
	hospital: 0
};

const fate = 'doomed';

// Update Bobby's circumstance

function newBill(bill, amount) {
	bills[bill] += amount;
}

function emergency() {
	if (bills.hospital === 0) {
		bills.hospital = 1000;
	} else {
		bills.hospital *= 1.5;
	}
}

function transaction(action, bill, amount) {
	if (action === 'deposit') {
		money += amount;
	} else if (action === 'loan') {
		money += amount * 0.75;
	} else if (action === 'withdraw') {
		money -= amount;
	} else if (action === 'pay') {
		if (amount > money) {
			console.log('Get a loan!');
		} else {
			money -= amount;
			bills[bill] -= amount;
		}
	}
}

// activity
transaction('deposit', null, 750);
newBill('rent', 750);
newBill('phone', 50);
emergency();
transaction('pay', 'phone', 50);
transaction('pay', 'hospital', 1000);
transaction('loan', null, 2500);
transaction('pay', 'rent', 750);
transaction('withdraw', null, 25);
newBill('car', 500);
fate = 'successful'; // fails because fate initialized with const

// console logging

if (
	money > 0 &&
	bills.car === 0 &&
	bills.phone === 0 &&
	bills.rent === 0 &&
	bills.hospital === 0
) {
	console.log("You're rich!");
}

console.log(['Money: ' + money, bills]);
