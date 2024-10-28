let link = prompt("Введите адрес ссылки");
if(link.includes("http://",0) && link.includes(".html",-1)){
	alert("Ссылка введена корректно")
} else{
	alert("Ссылка введена некорректно")
}