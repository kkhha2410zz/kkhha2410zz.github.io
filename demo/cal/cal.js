const output1 = $('#output1');
const output2 = $('#output2');

function clearEntry() {
	if (output2[0].innerHTML != 0) {
		output2.html(0);
	}
	else {
		output2.html(0);
	} 
}

function clearAll() {
	if (output1[0].innerHTML != 0 && output2[0].innerHTML != 0) {
		output1.html(0);
		output2.html(0);
	}
	else {
		output1.html(0);
		output2.html(0);
	} 
}

function clearEntryOneChar() {
	if (output2[0].innerHTML.length == 1 && output2[0].innerHTML == 0) {
		output2.html(0);
	} 
	else if (output2[0].innerHTML.length == 1) {
		output2.html(0);
	} 
	else if (output2[0].innerHTML.length > 0) {
		let slice = output2[0].innerHTML.slice(0,output2[0].innerHTML.length - 1);
		output2.html(slice);
	}
}

function addNumber(number) {
	if (output2[0].innerText == 0) {
		output2.html(number.innerHTML);
	}
	else if (output2[0].innerText == oldValue) {
		output2.html(number.innerHTML);
		output1.html(0);
	} 
	else {
		output2.append(number.innerHTML);
	}
}

function addZero(number) {
	if (output2[0].innerText == 0) {
		output2.append(number.innerHTML);
	}
	else if (output2[0].innerText == oldValue) {
		output2.html(number.innerHTML);
		output1.html(0);
	}
	else if (output2[0].innerText != 0) {
		output2.append(number.innerHTML);
	}
}

function divide() {
	let lastPosition = output1[0].innerText.length-1;
	if (output1[0].innerText == 0) {
		let str = output2[0].innerText + " " + unescape('%F7');
		output1.html(str);
		output2.html(0);
	} 
	else if (output1[0].innerText[lastPosition] % 1 !== 0 && output2[0].innerText != 0) {
		let str = " " + output2[0].innerText + " " + unescape('%F7');
		output1.append(str);
		output2.html(0);
	}
	else if (output2[0].innerText != 0 && output1[0].innerText == oldCalculation) {
		let str = output2[0].innerText + " " + unescape('%F7');
		output1.html(str);
		output2.html(0);
	}
}

function multiply() {
	let lastPosition = output1[0].innerText.length-1;
	if (output1[0].innerText == 0) {
		let str = output2[0].innerText + " " + unescape('%D7');
		output1.html(str);
		output2.html(0);
	} 
	else if (output1[0].innerText[lastPosition] % 1 !== 0 && output2[0].innerText != 0) {
		let str = " " + output2[0].innerText + " " + unescape('%D7');
		output1.append(str);
		output2.html(0);
	}
	else if (output2[0].innerText != 0 && output1[0].innerText == oldCalculation) {
		let str = output2[0].innerText + " " + unescape('%D7');
		output1.html(str);
		output2.html(0);
		console.log(3);
	}
}

function subtraction() {
	let lastPosition = output1[0].innerText.length-1;
	if (output1[0].innerText == 0) {
		let str = output2[0].innerText + " -" ;
		output1.html(str);
		output2.html(0);
	} 
	else if (output1[0].innerText[lastPosition] % 1 !== 0 && output2[0].innerText != 0) {
		let str = " " + output2[0].innerText + " -";
		output1.append(str);
		output2.html(0);
	}
	else if (output2[0].innerText != 0 && output1[0].innerText == oldCalculation) {
		let str = output2[0].innerText + " -";
		output1.html(str);
		output2.html(0);
		console.log(3);
	}
}

function summation() {
	let lastPosition = output1[0].innerText.length-1;
	if (output1[0].innerText == 0) {
		let str = output2[0].innerText + " +" ;
		output1.html(str);
		output2.html(0);
	} 
	else if (output1[0].innerText[lastPosition] % 1 !== 0 && output2[0].innerText != 0) {
		let str = " " + output2[0].innerText + " +";
		output1.append(str);
		output2.html(0);
	}
	else if (output2[0].innerText != 0 && output1[0].innerText == oldCalculation) {
		let str = output2[0].innerText + " +";
		output1.html(str);
		output2.html(0);
		console.log(3);
	}
}

let oldValue = 0;
let oldCalculation = "";
function equal() {
	if (output1[0].innerText == 0 && output2[0].innerText == 0) {
		output1.html(0);
		output2.html(0);
	}
	else if (output1[0].innerText == 0 && output2[0].innerText != 0) {
		output2.html(output2[0].innerText);
	}
	else if (output1[0].innerText != 0 && typeof(output1[0].innerText[output1.length-1]) != "number") {
		for (let i=0; i<output1[0].innerText.length; i++) {
			if(output1[0].innerText[i] == unescape('%F7')) {
				output1[0].innerText = output1[0].innerText.replace(output1[0].innerText[i],"/");
			}
			if(output1[0].innerText[i] == unescape('%D7')) {
				output1[0].innerText = output1[0].innerText.replace(output1[0].innerText[i],"*");
			}
		}
		let valueStr = output1[0].innerText + " " + output2[0].innerText;
		for (let j=0; j<valueStr.length; j++) {
			if(valueStr[j] == ",") {
				valueStr = valueStr.replace(valueStr[j],".");
			}
		}
		// console.log(valueStr);
		let calculatedValue = eval(valueStr);
		output2.html(calculatedValue);
		oldValue = calculatedValue;
		printOldoldCalculation(valueStr);
		
	}
}

function printOldoldCalculation(str) {
	for (let i=0; i<str.length; i++) {
		if(str[i] == "/") {
			str = str.replace(str[i],unescape('%F7'));
		}
		if(str[i] == "*") {
			str = str.replace(str[i],unescape('%D7'));
		}
		output1.html(str);
		// console.log(valueStr);
		oldCalculation = str;
	}
}

function addComma() {
	let str = "";
	if (Number(output2[0].innerText) == output2[0].innerText && output2[0].innerText % 1 === 0) {
		str = output2[0].innerText + ".";
	} else {
		str = output2[0].innerText;
	}
	output2.html(str);
} 

function percent() {
	let lastPosition =  output1[0].innerText.length - 1;
	if (output1[0].innerText[lastPosition] != " " && output2[0].innerText != 0) {
		output1.html(0);
		output2.html(output2[0].innerText/100);
	}
}

function radic() {
	let lastPosition =  output1[0].innerText.length - 1;
	if (output1[0].innerText[lastPosition] != " " && output2[0].innerText != 0) {
		let str = Math.sqrt(output2[0].innerText);
		output2.html(str);
		output1.html(0);
	}
}

function permissionTwo() {
	let lastPosition =  output1[0].innerText.length - 1;
	if (output1[0].innerText[lastPosition] != " " && output2[0].innerText != 0) {
		let str = output2[0].innerText * output2[0].innerText;
		output2.html(str);
		output1.html(0);
	}
}

function onePartX() {
	let lastPosition =  output1[0].innerText.length - 1;
	if (output1[0].innerText[lastPosition] != " " && output2[0].innerText != 0) {
		let str = 1 / output2[0].innerText;
		output2.html(str);
		output1.html(0);
	}
}

function plusmn() {
	if (output2[0].innerText == 0) {
		output2.html(0);
		output1.html(0);
	}
	else if (output2[0].innerText > 0) {
		let str = "-" + output2[0].innerText;
		output2.html(str);
		output1.html(0);
	} 
	else if (output2[0].innerText < 0) {
		let str = Math.abs(output2[0].innerText);
		output2.html(str);
		output1.html(0);
	}
}