
getLike();
function getLike(){
    fetch('https://api.countapi.xyz/get/mysite/counter')
	.then(res => res.json())
	.then(res => {
		document.getElementById('count').innerHTML =  res.value;
	});
}
var ok = 0;
function update(){
	if (ok === 0){
		fetch('https://api.countapi.xyz/update/mysite/counter?amount=1')
		.then(res => res.json())
		.then(res => {
			document.getElementById('count').innerHTML = res.value;
		});
		document.getElementById('like-btn').innerHTML = 'Tnx😊';
		ok ++;

	}

}