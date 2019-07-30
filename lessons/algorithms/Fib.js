var fibadd = function(n){
	var a = 1
	var b = 2
	var c;
	var odd = 0;  
	for(var i = 1; i <= n; i++){
		
		if(b % 2 !== 0){
			odd += b; 
		} 
		c = a + b; 
	 	console.log(c); 
		a = b; 
		b = c; 
		
		 
		 
	}	
	console.log(odd); 
}
		
		 
fibadd(10);	

 