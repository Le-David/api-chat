fetch("https://czechichat.herokuapp.com/api/list-messages")
	.then((response) => response.json())
	.then((data) => console.log(data))
