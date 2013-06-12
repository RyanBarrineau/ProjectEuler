//Prog: Ryan Barrineau
//File:	problem6.js
//Purp:	Find the difference between the sum of the squares
//    	of the first one hundred natural numbers and the 
//	    square of the sum.

	var sqrSum = 0;
	var sumSqr = 0;
	var numSumSqr = 0;
	var difference = 0;

	var MAXNUM = 100;

	for(var numSqr = 1; numSqr <= MAXNUM; numSqr++) {
	   sqrSum += Math.pow(numSqr, 2);
	}
	
	for(var number = 1; number <= MAXNUM; number++) {
	   sumSqr += number;
	}
	
	numSumSqr = Math.pow(sumSqr, 2);
	difference = numSumSqr - sqrSum;
	
	document.write(difference);
