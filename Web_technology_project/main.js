// mass, length, temperature

// Input output
const inputField = document.getElementById('input');
const outputWeight = document.getElementById('output-weight');

// Weight variables
const DaamOutput = document.getElementById('daamOutput');
const PaisaOutput = document.getElementById('paisaOutput');
const AanaOutput = document.getElementById('aanaOutput');
const RopaniOutput = document.getElementById('ropaniOutput');
const DhurOutput = document.getElementById('dhurOutput');
const KathaOutput = document.getElementById('kathaOutput');
const BighaOutput = document.getElementById('bighaOutput');



const btnGroup = document.getElementById('main');
btnGroup.addEventListener('click', button =>{
	if (button.target.matches('button')){
		const btn = button.target;
		const btnValue = btn.textContent;

		if (btn.classList.contains('btn-group-weight')){
			outputWeight.style.visibility = 'visible';

		}

		if (btnValue === 'Daam'){
			inputField.placeholder = 'Enter Daam';
			
			convertDaam();
			

		} else if (btnValue ==='Paisa'){
			inputField.placeholder = 'Enter Paisa';
			
			convertPaisa();

		} else if (btnValue === 'Aana'){
			inputField.placeholder = 'Enter Aana';
		
			convertAana();

		} else if (btnValue === 'Ropani'){
			inputField.placeholder = 'Enter Ropani';
			
			convertRopani();

		} else if (btnValue === 'Dhur'){
			inputField.placeholder = 'Enter Dhur';
			
			convertDhur();

		}
		else if (btnValue === 'Katha'){
			inputField.placeholder = 'Enter Katha';
			
			convertKatha();

		}
		else if (btnValue === 'Bigha'){
			inputField.placeholder = 'Enter Bigha';
			
			convertBigha();

		} 
	}
})


//conversion functions
function convertDaam(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		daamOutput.textContent = input;
		paisaOutput.textContent = Math.floor((input / 4)* 10000) / 10000;
		aanaOutput.textContent = Math.floor((input / 16) * 10000) / 10000;
		ropaniOutput.textContent = Math.floor((input / 256) * 10000) / 10000;
		dhurOutput.textContent = Math.floor((input / 8.520) * 10000) / 10000;
		kathaOutput.textContent = Math.floor((input * 0.005868544600938967) * 100000000) / 100000000;
		bighaOutput.textContent = Math.floor((input * 0.00029341603753377954) * 1000000000) / 1000000000;
	}

		// set length out put fields to 0
		// set temp output fields to 0
		// or change visibility of output cards to  hidden.
}

function convertPaisa(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		paisaOutput.textContent = input;
		daamOutput.textContent = Math.floor((input * 4)* 10000) / 10000;
		aanaOutput.textContent = Math.floor((input * 0.25) * 10000) / 10000;
		ropaniOutput.textContent = Math.floor((input *0.015625) * 1000000) / 1000000;
		dhurOutput.textContent = Math.floor((input *0.4694835680751174) * 1000000000) / 1000000000;
		kathaOutput.textContent = Math.floor((input * 0.023474178403755867) * 10000000000) / 10000000000;
		bighaOutput.textContent = Math.floor((input * 0.0011736675938640658) * 100000000000) / 100000000000;
	}
}

function convertAana(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		aanaOutput.textContent = input;
		daamOutput.textContent = Math.floor((input * 16)* 10000) / 10000;
		paisaOutput.textContent = Math.floor((input * 4) * 10000) / 10000;
		ropaniOutput.textContent = Math.floor((input *0.0625) * 1000000) / 1000000;
		dhurOutput.textContent = Math.floor((input *1.877) * 1000000000) / 1000000000;
		kathaOutput.textContent = Math.floor((input * 0.09389671361502347) * 10000000000) / 10000000000;
		bighaOutput.textContent = Math.floor((input * 0.004694791598200956) * 100000000000) / 100000000000;
	}
}

function convertRopani(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		ropaniOutput.textContent = input;
		daamOutput.textContent = Math.floor((input * 256)* 10000) / 10000;
		paisaOutput.textContent = Math.floor((input * 64) * 10000) / 10000;
		aanaOutput.textContent = Math.floor((input *16) * 1000000) / 1000000;
		dhurOutput.textContent = Math.floor((input *30.04) * 1000000000) / 1000000000;
		kathaOutput.textContent = Math.floor((input * 1.502) * 10000000000) / 10000000000;
		bighaOutput.textContent = Math.floor((input * 0.07513148009015777) * 100000000000) / 100000000000;
	}
}

function convertDhur(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		dhurOutput.textContent = input;
		daamOutput.textContent = Math.floor((input * 8.52)* 10000) / 10000;
		paisaOutput.textContent = Math.floor((input * 2.13) * 10000) / 10000;
		aanaOutput.textContent = Math.floor((input *0.5555555555555556) * 100000000) / 100000000;
		ropaniOutput.textContent = Math.floor((input *0.033288948069241014) * 1000000000) / 1000000000;
		kathaOutput.textContent = Math.floor((input * 0.05) * 10000000000) / 10000000000;
		bighaOutput.textContent = Math.floor((input * 0.0025) * 100000000000) / 100000000000;
	}
}

function convertKatha(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		kathaOutput.textContent = input;
		daamOutput.textContent = Math.floor((input * 170.4)* 10000) / 10000;
		paisaOutput.textContent = Math.floor((input * 42.602) * 10000) / 10000;
		aanaOutput.textContent = Math.floor((input *10.65) * 100000000) / 100000000;
		ropaniOutput.textContent = Math.floor((input *0.6657789613848203) * 1000000000) / 1000000000;
		dhurOutput.textContent = Math.floor((input * 20) * 10000000000) / 10000000000;
		bighaOutput.textContent = Math.floor((input * 0.05) * 100000000000) / 100000000000;
	}
}

function convertBigha(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		bighaOutput.textContent = input;
		daamOutput.textContent = Math.floor((input * 3408.13)* 10000) / 10000;
		paisaOutput.textContent = Math.floor((input * 852.03) * 10000) / 10000;
		aanaOutput.textContent = Math.floor((input *213.002) * 100000000) / 100000000;
		ropaniOutput.textContent = Math.floor((input *13.31) * 1000000000) / 1000000000;
		dhurOutput.textContent = Math.floor((input * 400) * 10000000000) / 10000000000;
		kathaOutput.textContent = Math.floor((input * 20) * 100000000000) / 100000000000;
	}
}


