let obj = {
	Минск: 'Беларусь',
	Киев: 'Украина',
	Москва: 'Россия'
}
for(let prop in obj) {
	alert(prop + " - это "+ obj[prop]);
}