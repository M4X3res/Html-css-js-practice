let check = (a,b) =>{
	let c =1;
	a==b?(c=0):(a>b?c=1:c=-1); 
	return c;
} 
alert(check(6,6));