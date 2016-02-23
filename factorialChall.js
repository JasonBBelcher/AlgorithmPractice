
// For loop version 

function factorial(n){
    j = 1; 
    for(i=1; i<=n; i++){
        
        console.log(j);
        j = j*i;
        console.log(j);
    }
    return j; 
}

// recursive version

function factorial (n){
  if (n==0 || n==1){
    return 1;
  }
  return factorial(n-1)*n;
} 

// another recursive version 

function factorial (n) {
var f = [];
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
} 