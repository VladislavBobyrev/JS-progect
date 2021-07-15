const socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello")

//socket.onopen = (e) => console.log(e.data)
socket.onmessage = (e) => console.log(e.data)

socket.close(1000, 'close job')

socket.onclose = e => {
	console.log( e.code)
	console.log( e.reason)
	console.log( e.wasClean)
}