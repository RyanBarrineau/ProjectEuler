//Prog: Ryan Barrineau
//File: Problem1.js
//Purp: Find the sum of all the multiples of 3 or 5 below 1000

  var sum = 0;

	for(var i = 0; i < 1000; i++)
	{
		if (i % 3 == 0) 
		{
			sum += i; 
		}
		else if(i % 5 == 0)
		{
			sum += i; 
		}
	}
  
	document.write(sum);
	answerCheck(sum);
  
function answerCheck(answer) {
	if(answer == 233168)
	{
		document.write("<br>PASS");
	}
	else
	{
		document.write("<br>FAIL");
	}
}
