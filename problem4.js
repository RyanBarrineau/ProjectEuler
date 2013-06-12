//Prog: Ryan Barrineau
//File:  problem4.js
//Purp: Find the largest palindrome made from the product 
//      of two 3-digit numbers



  var MAXNUM = 999;
	var MINNUM = 100;

	var testNumber = 0;
	var testString = " ";
	var arrayTotal = 0;
	var testArray = new Array();
	var places = 0;	
	var testMax = 0;

	for(var multiple1 = MAXNUM; multiple1 >= MINNUM; multiple1--) {
		for(var multiple2 = MAXNUM; multiple2 >= MINNUM; multiple2--) {
			var compare1 = " ";
			var compare2 = " ";

			testNumber = multiple1 * multiple2;
			testString = testNumber.toString();
			testArray = testString.split("");
		
			for(var counter = 0; testArray[counter] != null ; counter++) {
			}
			places = counter / 2;
			
			for(var chk1 = 0; chk1 < places; chk1++) {
				compare1 += testArray[chk1];
			}
			testArray.reverse();
			
			for(var chk2 = 0; chk2 < places; chk2++) {
				compare2 += testArray[chk2];
			}
			if(compare1 == compare2) {
				if(testNumber > testMax) {
					testMax = testNumber;
				}
			}
		}
	}
	document.write(testMax);
