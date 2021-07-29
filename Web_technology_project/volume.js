//--------------------------------------------------Gold Code Starting---------------------------------------//
// mass, length, temperature

// Input output
const inputField = document.getElementById('input');
const outputWeight = document.getElementById('output-weight');

// Weight variables
const MuthiOutput = document.getElementById('muthiOutput');
const ManaOutput = document.getElementById('manaOutput');
const KaruwaOutput = document.getElementById('karuwaOutput');
const PathiOutput = document.getElementById('pathiOutput');
const MuriOutput = document.getElementById('muriOutput');




const btnGroup = document.getElementById('main');
btnGroup.addEventListener('click', button =>{
	if (button.target.matches('button')){
		const btn = button.target;
		const btnValue = btn.textContent;

		if (btn.classList.contains('btn-group-weight')){
			outputWeight.style.visibility = 'visible';

		}

		if (btnValue === 'Muthi'){
			inputField.placeholder = 'Enter Muthi';
			
			convertMuthi();
			

		} else if (btnValue ==='Mana'){
			inputField.placeholder = 'Enter Mana';
			
			convertMana();

		} else if (btnValue === 'Karuwa'){
			inputField.placeholder = 'Enter Karuwa';
		
			convertKaruwa();

		} else if (btnValue === 'Pathi'){
			inputField.placeholder = 'Enter Pathi';
			
			convertPau();

		} else if (btnValue === 'Muri'){
			inputField.placeholder = 'Enter Muri';
			
			convertDharni();

		}
		
	}
})


//conversion functions
function convertMuthi(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		muthiOutput.textContent = Math.floor( input)*1;
		manaOutput.textContent = Math.floor( input)/5;
		karuwaOutput.textContent = Math.floor(input)/19.8181818;
		pathiOutput.textContent = Math.floor(input)/79.2909091;
		muriOutput.textContent = Math.floor(input)/1585.72727;
		
	}

		// set length out put fields to 0
		// set temp output fields to 0
		// or change visibility of output cards to  hidden.
}

function convertMana(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		muthiOutput.textContent = Math.floor(input)*10;
		manaOutput.textContent = Math.floor(input)*1;
		karuwaOutput.textContent = Math.floor(input)/2;
		pathiOutput.textContent = Math.floor(input)/8.00183486;
		muriOutput.textContent = Math.floor(input)/160.027523;
		
	}
}

function convertKaruwa(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		muthiOutput.textContent = Math.floor(input)*19.8181818;
		manaOutput.textContent = Math.floor(input)*2;
		karuwaOutput.textContent = Math.floor(input)*1;
		pathiOutput.textContent = Math.floor(input)/8001.83486;
		muriOutput.textContent = Math.floor(input)/160.027523;
		
	}
}

function convertPathi(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		muthiOutput.textContent = Math.floor(input)*79290.9091;
		manaOutput.textContent = Math.floor(input)*8001.83486;
		karuwaOutput.textContent = Math.floor(input)*4000.91743;
		pathiOutput.textContent = Math.floor(input)*1;
		muriOutput.textContent = Math.floor(input)/0.0199988535;
		
	}
}

function convertMuri(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		muthiOutput.textContent = Math.floor(input)*1585.72727;
		manaOutput.textContent = Math.floor(input)*160.027523;
		karuwaOutput.textContent = Math.floor(input)*80.0137615;
		pathiOutput.textContent = Math.floor(input)*0.0199988535;
		muriOutput.textContent = Math.floor(input)*1;
		
	}
}

