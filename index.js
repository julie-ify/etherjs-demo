const form = document.querySelector('form');
const checkout = document.querySelector('#checkout-page');
const payment = document.querySelector('#payment');
const closebtn = document.querySelector('.closebtn');
const newClose = document.querySelector('.close2');
const retryClose = document.querySelector('.close3');
const confirmClose = document.querySelector('.close4');
const retry = document.querySelector('.retry');
const paymentBtn = document.querySelector('.btn-secondary');
const list = document.querySelectorAll('li');
const expired = document.getElementById('time-up');
const confirmationPage = document.getElementById('confirmation-page');

form.addEventListener('click', (e) => {
	e.preventDefault();
	checkout.style.display = 'block';
});

closebtn.addEventListener('click', () => {
	checkout.style.display = 'none';
});

retryClose.addEventListener('click', () => {
	expired.style.display = 'none';
	countdown(1, 0);
});

newClose.addEventListener('click', () => {
	checkout.style.display = 'none';
	payment.style.display = 'none';
});

confirmClose.addEventListener('click', () => {
	checkout.style.display = 'none';
	payment.style.display = 'none';
	confirmationPage.style.display = 'none';
});

retry.addEventListener('click', () => {
	document.getElementById('time-up').style.display = 'none';
	countdown(1, 0);
});

paymentBtn.addEventListener('click', () => {
	document.getElementById('confirmation-page').style.display = 'block';
});

const listItems = [...list];

listItems.forEach((item) => {
	item.addEventListener('click', (e) => {
		payment.style.display = 'block';
		const coinTag = e.target.innerHTML;

		countdown(1, 0);

		if (coinTag == 'Tether (USDT)') {
			document.querySelector('.tag').innerHTML = 'USDT';
			document.querySelector('.code').innerHTML = 'Binance Smart Chain (BEP20)';
			document.querySelector('.amount').innerHTML = '100.00 USDT';
			console.log('USDT');
		} else if (coinTag == 'Binance USD') {
			document.querySelector('.tag').innerHTML = 'BUSD';
			document.querySelector('.code').innerHTML = 'Binance Smart Chain (BEP20)';
			document.querySelector('.amount').innerHTML = '100.00 BUSD';
		} else if (coinTag == 'USD Coin') {
			document.querySelector('.tag').innerHTML = 'USDC';
			document.querySelector('.code').innerHTML = 'Binance Smart Chain (BEP20)';
			document.querySelector('.amount').innerHTML = '100.00 USDC';
		} else if (coinTag == 'Dai Stablecoin') {
			document.querySelector('.tag').innerHTML = 'DAI';
			document.querySelector('.code').innerHTML = 'Binance Smart Chain (BEP20)';
			document.querySelector('.amount').innerHTML = '100.00 DAI';
		} else {
			document.querySelector('.tag').innerHTML = '';
			document.querySelector('.code').innerHTML = '';
			document.querySelector('.amount').innerHTML = '100.00';
		}
	});
});

function countdown(minutes, seconds) {
	let element, endTime, hours, mins, msLeft, time;

	function twoDigits(n) {
		return n <= 9 ? '0' + n : n;
	}

	function updateTimer() {
		msLeft = endTime - +new Date();
		if (msLeft <= 1000) {
			document.getElementById('time-up').style.display = 'block';
			console.log('time up');
			return;
		} else {
			time = new Date(msLeft);
			hours = time.getUTCHours();
			mins = time.getUTCMinutes();
			element.innerHTML =
				(hours ? hours + ':' + twoDigits(mins) : mins) +
				':' +
				twoDigits(time.getUTCSeconds());
			setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
		}
	}

	element = document.querySelector('.timer');
	endTime = +new Date() + 1000 * (60 * minutes + seconds) + 500;
	updateTimer();
}
