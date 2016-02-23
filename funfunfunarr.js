var arr = [['J','a', 's', 'o', 'n'],['B', 'e','l','c','h', 'e', 'r'],['o','w','n','s'],['t','h','i','s'],['a','r','r','a','y']];
var flatArr = [];
var strings = "";

for(var i= 0; i < arr.length; i++){
	flatArr.push(arr[i]);
}
		
for(var i = 0; i < flatArr.length; i++){
	strings += flatArr[i].join("");
	strings += " ";
	
}

console.log(strings);

	

	 

			






			
			


	
