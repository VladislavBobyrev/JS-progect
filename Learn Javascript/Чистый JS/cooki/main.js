let coocki =  document.cookie = 'user=Vladislav'

console.log(coocki)

const input = document.querySelector('input')

input.value = localStorage.getItem('input')
input.oninput = () => {
	localStorage.setItem('input', input.value)
}