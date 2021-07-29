//--------------------------------------------------Gold Code Starting---------------------------------------//
// mass, length, temperature

// Input output
const inputField = document.getElementById('input');
const outputWeight = document.getElementById('output-weight');

// Weight variables
const LalOutput = document.getElementById('lalOutput');
const TolaOutput = document.getElementById('tolaOutput');
const ChatakOutput = document.getElementById('chatakOutput');
const PauOutput = document.getElementById('pauOutput');
const DharniOutput = document.getElementById('dharniOutput');




const btnGroup = document.getElementById('main');
btnGroup.addEventListener('click', button =>{
	if (button.target.matches('button')){
		const btn = button.target;
		const btnValue = btn.textContent;

		if (btn.classList.contains('btn-group-weight')){
			outputWeight.style.visibility = 'visible';

		}

		if (btnValue === 'Lal'){
			inputField.placeholder = 'Enter Lal';
			
			convertLal();
			

		} else if (btnValue ==='Tola'){
			inputField.placeholder = 'Enter Tola';
			
			convertTola();

		} else if (btnValue === 'Chatak'){
			inputField.placeholder = 'Enter Chatak';
		
			convertChatak();

		} else if (btnValue === 'Pau'){
			inputField.placeholder = 'Enter Pau';
			
			convertPau();

		} else if (btnValue === 'Dharni'){
			inputField.placeholder = 'Enter Dharni';
			
			convertDharni();

		}
		
	}
})


//conversion functions
function convertLal(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		lalOutput.textContent = input;
		tolaOutput.textContent = Math.floor( input)/100;
		chatakOutput.textContent = Math.floor(input)/500.085763;
		pauOutput.textContent = Math.floor(input)/1706.68954;
		dharniOutput.textContent = Math.floor(input)/20240.1372;
		
	}

		// set length out put fields to 0
		// set temp output fields to 0
		// or change visibility of output cards to  hidden.
}

function convertTola(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		lalOutput.textContent = Math.floor(input)*100;
		tolaOutput.textContent = Math.floor(input)*1;
		chatakOutput.textContent = Math.floor(input)/5.00085763;
		pauOutput.textContent = Math.floor(input)/17.0668954;
		dharniOutput.textContent = Math.floor(input)/204.974271;
		
	}
}

function convertChatak(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		lalOutput.textContent = Math.floor(input)*500.01166;
		tolaOutput.textContent = Math.floor(input)*5.00085763;
		chatakOutput.textContent = Math.floor(input)*1;
		pauOutput.textContent = Math.floor(input)/3.41279369;
		dharniOutput.textContent = Math.floor(input)/40.9878237;
		
	}
}

function convertPau(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		lalOutput.textContent = Math.floor(input)*1706.68954;
		tolaOutput.textContent = Math.floor(input)*17.0668954;
		chatakOutput.textContent = Math.floor(input)*3.41279369;
		pauOutput.textContent = Math.floor(input)*1;
		dharniOutput.textContent = Math.floor(input)/12.0100503;
		
	}
}

function convertDharni(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		lalOutput.textContent = Math.floor(input)*20497.4271;
		tolaOutput.textContent = Math.floor(input)*204.974271;
		chatakOutput.textContent = Math.floor(input)*40.9878237;
		pauOutput.textContent = Math.floor(input)*12.0100503;
		dharniOutput.textContent = Math.floor(input)*1;
		
	}
}

