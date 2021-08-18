
function getPin(){
	const pin = Math.round(Math.random()*10000)
	const pinstring = pin + '';
	if(pinstring.length == 4){
		return pin;
	}
	else{
		// consolle.log('got a 3 degit pin and calling again',pin)
		return getPin();
	}
}
function generatePin(){
	const pin = getPin();
	document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click',function(event){
	const number = event.target.innerText;
	const calcInput = document.getElementById('typed-numbers');
	if(isNaN(number)){
		if(number == 'C'){
			calcInput.value = '';
		}
	}
	else{
		const previousNumber = calcInput.value;
	const newNumber = previousNumber + number;
	calcInput.value = newNumber;
	}	
})
function varifyPin(){
	const pin = document.getElementById('display-pin').value;
	const typedNumber = document.getElementById('typed-numbers').value;
	const successNotify = document.getElementById('notify-success');
	if(pin == typedNumber){
		successNotify.style.display = 'block'
		failNotify.style.display = 'none';
	}

	else{
		const failNotify = document.getElementById('notify-fail');
		failNotify.style.display = 'block';
		successNotify.style.display = 'none'
;	}
}