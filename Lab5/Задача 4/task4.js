let time = Math.random()*60;
alert(time);
if (time >= 0 && time<=15){
	alert("Time  лежит в первой четверти");
} else if(time >15 && time <= 30){
	alert("time лежит во второй четверти");
} else if(time >30 && time <=45){
	alert("time лежит в третей четверти");
} else{
	alert("time лежит в четвертой четверти");
}
