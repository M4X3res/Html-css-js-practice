function sqrt(a){
	return a*a;
}
function sum(b, c){
	return b+c;
}
function operat(x,y,z){
	return (x-y)/z;
}
alert(sqrt(2));
alert(sum(2,6));
alert(operat(100,5,5));
function week(x){
	if (x>=1 && x<=7){
		let arr = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
		return arr[x-1];
	}
}
alert(week(3));