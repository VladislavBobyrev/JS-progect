customElements.define('show-hello', class extends HTMLElement {
	contentedCallback() {
		const shadow = thsi.attachShadow({mode:'open'})
		shadow.innerHML = `<p>
		Hello, ${this.getAttribute('name')}
	</p>`
	}
})