function compareunittype()
{
	
    var min = document.getElementById("").value;
    var max = document.getElementById("maxN").value;
    if (min > max) {
        alert("Minimum value must be lesser than maximum value.");
    }
}

function MaximumNValidate() {
    var min = document.getElementById("minN").value;
    var max = document.getElementById("maxN").value;
    if (max < min) {
        alert("Maximum value must be greater than minimum value.");
    }


	};