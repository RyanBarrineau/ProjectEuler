//Prog:  Ryan Barrineau
//File:	problem3.html
//Purp:	Find the largest prime factor of the number 600851475143 ?

	var TESTNUM = 600851475143;

	var newNum = TESTNUM;
	var factors = new Array();                     
	var chk = 2;
	var max = 0;
                         
      while (chk*chk <= newNum)
      { 
            if (newNum % chk == 0)
            {
            	factors.push(chk);
            	newNum = newNum/chk;
            } 
	    else 
	    {
               chk++;                     
            }
      }
      if (newNum != 1)
      {                                     
          factors.push(newNum);          
      }

	for(var i = 0; factors[i] != null; i++) 
	{
	   if(factors[i] > max) 
	   {
	      max = factors[i];
	   }	   
	}  
	document.write(max);  
