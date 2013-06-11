//Prog:	Ryan Barrineau
//File: problem2.html
//Purp: Fibonacci sequence whose values do not exceed four million, //	find the sum of the even-valued terms
	
	var a = 1;
	var b = 1;
	var c = a + b;
	var evenSum = 0;

	while(b <= 4000000){
	  a = b;
	  b = c;
	  c = a + b;
	  if(b % 2 == 0) {
		evenSum += b;
	  }	  
	}
	document.write(evenSum);
	answerCheck(evenSum);

function answerCheck(answer) {
	if(answer == 4613732){
	document.write("<br>PASS");
	} else {
	document.write("<br>FAIL");
	}
	}

	

